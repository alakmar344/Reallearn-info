import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * StickyScene3D Component
 * Renders a fixed background WebGL 3D Canvas hosting the interactive
 * 3D Book & 3D Learning Spine. Synchronizes 3D transformations frame-rate
 * independently using THREE.MathUtils.damp() based on page scroll.
 * 
 * Strict Compliance:
 * - NO PURPLE / VIOLET RULE
 * - Accent: Electric Green (#00FF66 / #00CC52) & Vermillion Action (#FF3E00)
 */
export default function StickyScene3D() {
  const canvasRef = useRef(null)
  const targetScroll = useRef(0)
  const currentScroll = useRef(0)
  const pointerRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 })

  useEffect(() => {
    if (!canvasRef.current) return

    // 1. Scene, Camera, Renderer Setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.set(0, 0, 6)

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)

    // 2. Lighting System
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9)
    scene.add(ambientLight)

    const mainLight = new THREE.DirectionalLight(0xffffff, 1.8)
    mainLight.position.set(5, 8, 5)
    scene.add(mainLight)

    const accentLight = new THREE.PointLight(0x00ff66, 3, 12)
    accentLight.position.set(-3, 2, 2)
    scene.add(accentLight)

    const actionLight = new THREE.PointLight(0xff3e00, 2.5, 10)
    actionLight.position.set(3, -2, 2)
    scene.add(actionLight)

    // 3. 3D Book & Spine Group Creation
    const masterGroup = new THREE.Group()
    scene.add(masterGroup)

    const bookGroup = new THREE.Group()
    masterGroup.add(bookGroup)

    // Book Cover (Sumi Ink / Deep Slate)
    const coverGeo = new THREE.BoxGeometry(1.6, 2.3, 0.32)
    const coverMat = new THREE.MeshStandardMaterial({
      color: 0x141a26,
      roughness: 0.3,
      metalness: 0.2,
    })
    const coverMesh = new THREE.Mesh(coverGeo, coverMat)
    bookGroup.add(coverMesh)

    // Spine Trim (Electric Green #00FF66)
    const spineGeo = new THREE.BoxGeometry(0.12, 2.32, 0.34)
    const spineMat = new THREE.MeshStandardMaterial({
      color: 0x00ff66,
      emissive: 0x00cc52,
      emissiveIntensity: 0.4,
      roughness: 0.2,
    })
    const spineMesh = new THREE.Mesh(spineGeo, spineMat)
    spineMesh.position.x = -0.8
    bookGroup.add(spineMesh)

    // Page Block (Cream Washi #FFFDF5)
    const pagesGeo = new THREE.BoxGeometry(1.48, 2.2, 0.28)
    const pagesMat = new THREE.MeshStandardMaterial({
      color: 0xfffdf5,
      roughness: 0.8,
    })
    const pagesMesh = new THREE.Mesh(pagesGeo, pagesMat)
    pagesMesh.position.x = 0.05
    bookGroup.add(pagesMesh)

    // Front Cover Band (Vermillion Action #FF3E00 Accent)
    const bandGeo = new THREE.BoxGeometry(1.62, 0.4, 0.34)
    const bandMat = new THREE.MeshStandardMaterial({
      color: 0xff3e00,
      roughness: 0.4,
    })
    const bandMesh = new THREE.Mesh(bandGeo, bandMat)
    bandMesh.position.set(0, 0, 0.01)
    bookGroup.add(bandMesh)

    // 4. Orbiting Node Spheres (Foundation, Mechanism, Real World)
    const nodeGroup = new THREE.Group()
    masterGroup.add(nodeGroup)

    const nodeData = [
      { color: 0x00cc52, name: 'Foundation', angle: 0 },
      { color: 0x00ff66, name: 'Mechanism', angle: (Math.PI * 2) / 3 },
      { color: 0xff3e00, name: 'Real World', angle: (Math.PI * 4) / 3 },
    ]

    const nodeMeshes = nodeData.map((d) => {
      const geo = new THREE.SphereGeometry(0.24, 32, 32)
      const mat = new THREE.MeshStandardMaterial({
        color: d.color,
        emissive: d.color,
        emissiveIntensity: 0.6,
        roughness: 0.2,
      })
      const mesh = new THREE.Mesh(geo, mat)
      nodeGroup.add(mesh)
      return { mesh, angle: d.angle }
    })

    // 5. Ambient Floating Particle Cosmos
    const particleCount = 120
    const particleGeo = new THREE.BufferGeometry()
    const particlePositions = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 12
      particlePositions[i + 1] = (Math.random() - 0.5) * 12
      particlePositions[i + 2] = (Math.random() - 0.5) * 8
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
    const particleMat = new THREE.PointsMaterial({
      color: 0x00ff66,
      size: 0.05,
      transparent: true,
      opacity: 0.75,
    })
    const particles = new THREE.Points(particleGeo, particleMat)
    scene.add(particles)

    // 6. Scroll & Pointer Event Listeners
    const onScroll = () => {
      const totalScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      )
      targetScroll.current = Math.min(Math.max(window.scrollY / totalScroll, 0), 1)
    }

    const onPointerMove = (e) => {
      pointerRef.current.targetX = (e.clientX / window.innerWidth - 0.5) * 0.8
      pointerRef.current.targetY = (e.clientY / window.innerHeight - 0.5) * 0.8
    }

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('resize', onResize)

    // Initial scroll setup
    onScroll()

    // 7. Animation Loop with THREE.MathUtils.damp() for 120Hz/60Hz Display Independence
    let animationFrameId
    let lastTime = performance.now()

    const render = (now) => {
      const delta = Math.min((now - lastTime) / 1000, 0.1)
      lastTime = now

      // Smooth damp scroll progress
      currentScroll.current = THREE.MathUtils.damp(
        currentScroll.current,
        targetScroll.current,
        8,
        delta
      )

      // Smooth damp pointer tilt
      pointerRef.current.x = THREE.MathUtils.damp(
        pointerRef.current.x,
        pointerRef.current.targetX,
        6,
        delta
      )
      pointerRef.current.y = THREE.MathUtils.damp(
        pointerRef.current.y,
        pointerRef.current.targetY,
        6,
        delta
      )

      const p = currentScroll.current
      const px = pointerRef.current.x
      const py = pointerRef.current.y

      // 5-Stage Transformation Pipeline based on Scroll Progress p [0..1]

      // Stage 1: Hero (0..0.15) — Right aligned, subtle float
      // Stage 2: Problem (0.15..0.35) — Rotates 90° to highlight Spine structure
      // Stage 3: Method (0.35..0.60) — Unfolds nodes outward
      // Stage 4: Quiz (0.60..0.80) — Center & pulse
      // Stage 5: Rewards (0.80..1.0) — Elevate & orbit trophy matrix

      const isMobile = window.innerWidth < 768

      // Interpolate Target Positions & Rotations
      let targetPosX = isMobile ? 0 : 1.8 - p * 1.8
      let targetPosY = Math.sin(now * 0.0015) * 0.12 - py * 0.5
      let targetPosZ = p > 0.6 && p < 0.85 ? 1.0 : 0

      let targetRotY = p * Math.PI * 2.5 + px * 0.5
      let targetRotX = Math.sin(p * Math.PI * 2) * 0.3 - py * 0.3
      let targetRotZ = Math.cos(p * Math.PI) * 0.15

      // Apply dampened transforms to master group
      masterGroup.position.x = THREE.MathUtils.damp(masterGroup.position.x, targetPosX, 6, delta)
      masterGroup.position.y = THREE.MathUtils.damp(masterGroup.position.y, targetPosY, 6, delta)
      masterGroup.position.z = THREE.MathUtils.damp(masterGroup.position.z, targetPosZ, 6, delta)

      bookGroup.rotation.y = THREE.MathUtils.damp(bookGroup.rotation.y, targetRotY, 6, delta)
      bookGroup.rotation.x = THREE.MathUtils.damp(bookGroup.rotation.x, targetRotX, 6, delta)
      bookGroup.rotation.z = THREE.MathUtils.damp(bookGroup.rotation.z, targetRotZ, 6, delta)

      // Orbit Nodes Expansion (Spine Method Stage 0.35 -> 0.7)
      const nodeRadius = 1.4 + Math.sin(p * Math.PI * 3) * 0.6
      nodeMeshes.forEach((n, idx) => {
        const currentAngle = n.angle + now * 0.001 + p * Math.PI * 2
        const nx = Math.cos(currentAngle) * nodeRadius
        const ny = Math.sin(currentAngle) * nodeRadius
        const nz = Math.sin(currentAngle * 2) * 0.4

        n.mesh.position.x = THREE.MathUtils.damp(n.mesh.position.x, nx, 6, delta)
        n.mesh.position.y = THREE.MathUtils.damp(n.mesh.position.y, ny, 6, delta)
        n.mesh.position.z = THREE.MathUtils.damp(n.mesh.position.z, nz, 6, delta)
      })

      // Particle Cosmos rotation
      particles.rotation.y = now * 0.0002
      particles.rotation.x = Math.sin(now * 0.0001) * 0.2

      // Accent light pulsing
      accentLight.intensity = 2.5 + Math.sin(now * 0.003) * 1.0
      actionLight.intensity = 2.0 + Math.cos(now * 0.002) * 0.8

      renderer.render(scene, camera)
      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      coverGeo.dispose()
      coverMat.dispose()
      spineGeo.dispose()
      spineMat.dispose()
      pagesGeo.dispose()
      pagesMat.dispose()
      bandGeo.dispose()
      bandMat.dispose()
      particleGeo.dispose()
      particleMat.dispose()
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
    </div>
  )
}
