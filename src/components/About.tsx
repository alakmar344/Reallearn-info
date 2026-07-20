import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'
import AnimatedLetter from './AnimatedLetter'

const segments = [
  { text: 'I am Marcus Chen,', className: 'font-normal' },
  { text: 'a self-taught director.', className: 'italic font-serif' },
  { text: 'I have skills in color grading, visual effects, and narrative design.', className: 'font-normal' },
]

const bodyText =
  'Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals.'

export default function About() {
  const chars = bodyText.split('')

  return (
    <section className="bg-black py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
        <span className="text-primary text-[10px] sm:text-xs uppercase tracking-widest mb-8 block">
          Visual arts
        </span>

        <div className="mb-12 md:mb-16">
          <WordsPullUpMultiStyle
            segments={segments}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] text-[#DEDBC8]"
          />
        </div>

        <p className="text-[#DEDBC8] text-xs sm:text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
          {chars.map((char, i) => (
            <AnimatedLetter key={i} letter={char} index={i} totalChars={chars.length} />
          ))}
        </p>
      </div>
    </section>
  )
}
