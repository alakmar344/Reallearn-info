import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * StickyScene3D Component
 * Renders a fixed background WebGL 3D Canvas hosting the interactive
 * 3D Book & 3D Learning Spine with hyper-realistic materials, glass refraction,
 * metallic chrome elements, and animated trophy objects.
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

    // 2. Realistic Multi-Point Lighting System
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.1)
    scene.add(ambientLight)

    const mainLight = new THREE.DirectionalLight(0xffffff, 2.2)
    mainLight.position.set(5, 8, 5)
    scene.add(mainLight)

    const accentLight = new THREE.PointLight(0x00ff66, 4, 14)
    accentLight.position.set(-3, 2, 2)
    scene.add(accentLight)

    const actionLight = new THREE.PointLight(0xff3e00, 3, 12)
    actionLight.position.set(3, -2, 2)
    scene.add(actionLight)

    // 3. 3D Book & Master Group Creation
    const masterGroup = new THREE.Group()
    scene.add(masterGroup)

    const bookGroup = new THREE.Group()
    masterGroup.add(bookGroup)

    // Book Cover (Deep Sumi Ink / Slate Leather)
    const coverGeo = new THREE.BoxGeometry(1.6, 2.3, 0.32)
    const coverMat = new THREE.MeshStandardMaterial({
      color: 0x141a26,
      roughness: 0.25,
      metalness: 0.3,
    })
    const coverMesh = new THREE.Mesh(coverGeo, coverMat)
    bookGroup.add(coverMesh)

    // Spine Trim (Electric Green #00FF66 with Emissive Glow)
    const spineGeo = new THREE.BoxGeometry(0.14, 2.32, 0.34)
    const spineMat = new THREE.MeshStandardMaterial({
      color: 0x00ff66,
      emissive: 0x00cc52,
      emissiveIntensity: 0.5,
      roughness: 0.15,
      metalness: 0.4,
    })
    const spineMesh = new THREE.Mesh(spineGeo, spineMat)
    spineMesh.position.x = -0.8
    bookGroup.add(spineMesh)

    // Page Block (Cream Washi #FFFDF5)
    const pagesGeo = new THREE.BoxGeometry(1.48, 2.2, 0.28)
    const pagesMat = new THREE.MeshStandardMaterial({
      color: 0xfffdf5,
      roughness: 0.85,
    })
    const pagesMesh = new THREE.Mesh(pagesGeo, pagesMat)
    pagesMesh.position.x = 0.05
    bookGroup.add(pagesMesh)

    // Front Cover Band (Vermillion Action #FF3E00 Accent)
    const bandGeo = new THREE.BoxGeometry(1.62, 0.4, 0.34)
    const bandMat = new THREE.MeshStandardMaterial({
      color: 0xff3e00,
      roughness: 0.3,
      metalness: 0.2,
    })
    const bandMesh = new THREE.Mesh(bandGeo, bandMat)
    bandMesh.position.set(0, 0, 0.01)
    bookGroup.add(bandMesh)

    // 4. Realistic Metallic Chrome Ring Orbiting Master Group
    const chromeRingGeo = new THREE.TorusGeometry(2.1, 0.035, 16, 100)
    const chromeRingMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.95,
      roughness: 0.08,
    })
    const chromeRingMesh = new THREE.Mesh(chromeRingGeo, chromeRingMat)
    chromeRingMesh.rotation.x = Math.PI / 3
    masterGroup.add(chromeRingMesh)

    // 5. Realistic Physical Glass Orb of Knowledge
    const glassOrbGeo = new THREE.SphereGeometry(0.38, 32, 32)
    const glassOrbMat = new THREE.MeshPhysicalMaterial({
      color: 0x00ff66,
      emissive: 0x00cc52,
      emissiveIntensity: 0.3,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.85,
      transparent: true,
      opacity: 0.9,
      ior: 1.5,
      thickness: 0.5,
    })
    const glassOrbMesh = new THREE.Mesh(glassOrbGeo, glassOrbMat)
    glassOrbMesh.position.set(1.4, 1.1, 0.5)
    masterGroup.add(glassOrbMesh)

    // 6. Realistic 3D Golden Trophy Gem (Dodecahedron)
    const trophyGemGeo = new THREE.DodecahedronGeometry(0.32, 0)
    const trophyGemMat = new THREE.MeshStandardMaterial({
      color: 0xffd700,
      emissive: 0xb38600,
      emissiveIntensity: 0.4,
      metalness: 0.85,
      roughness: 0.2,
    })
    const trophyGemMesh = new THREE.Mesh(trophyGemGeo, trophyGemMat)
    trophyGemMesh.position.set(-1.4, -1.1, 0.5)
    masterGroup.add(trophyGemMesh)

    // 7. Orbiting Node Spheres (Foundation, Mechanism, Real World)
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
        metalness: 0.3,
      })
      const mesh = new THREE.Mesh(geo, mat)
      nodeGroup.add(mesh)
      return { mesh, angle: d.angle }
    })

    // 8. Ambient Floating Particle Cosmos
    const particleCount = 140
    const particleGeo = new THREE.BufferGeometry()
    const particlePositions = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 14
      particlePositions[i + 1] = (Math.random() - 0.5) * 14
      particlePositions[i + 2] = (Math.random() - 0.5) * 9
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
    const particleMat = new THREE.PointsMaterial({
      color: 0x00ff66,
      size: 0.055,
      transparent: true,
      opacity: 0.8,
    })
    const particles = new THREE.Points(particleGeo, particleMat)
    scene.add(particles)

    // 9. Scroll & Pointer Event Listeners
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

    onScroll()

    // 10. Frame-Rate Independent Animation Loop
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

      const isMobile = window.innerWidth < 768

      // Interpolate Target Positions & Rotations across stages
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

      // Animate Realistic Chrome Ring and 3D Trophy Gem
      chromeRingMesh.rotation.z = now * 0.0008
      chromeRingMesh.rotation.y = now * 0.0005

      glassOrbMesh.rotation.y = now * 0.001
      glassOrbMesh.position.y = 1.1 + Math.sin(now * 0.002) * 0.15

      trophyGemMesh.rotation.x = now * 0.0015
      trophyGemMesh.rotation.y = now * 0.0012
      trophyGemMesh.position.y = -1.1 + Math.cos(now * 0.002) * 0.15

      // Orbit Nodes Expansion (Spine Method Stage 0.35 -> 0.7)
      const nodeRadius = 1.4 + Math.sin(p * Math.PI * 3) * 0.6
      nodeMeshes.forEach((n) => {
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
      chromeRingGeo.dispose()
      chromeRingMat.dispose()
      glassOrbGeo.dispose()
      glassOrbMat.dispose()
      trophyGemGeo.dispose()
      trophyGemMat.dispose()
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
