import { useReveal } from "@/hooks/use-reveal"
import { MagneticButton } from "@/components/magnetic-button"

const FUN_FACTS = [
  {
    emoji: "🎂",
    title: "День π",
    text: "14 марта (3/14) — официальный День числа Пи. В этот день родился Альберт Эйнштейн.",
  },
  {
    emoji: "🧠",
    title: "Мировой рекорд памяти",
    text: "Акиро Харагути (Япония) устно воспроизвёл 111 700 знаков π — это заняло 16 часов.",
  },
  {
    emoji: "🎵",
    title: "Музыка из π",
    text: "Композиторы создают музыку, превращая цифры π в ноты. Существуют целые симфонии!",
  },
  {
    emoji: "🌌",
    title: "Везде во Вселенной",
    text: "π встречается в квантовой механике, теории относительности и ДНК. Природа «любит» π.",
  },
  {
    emoji: "📐",
    title: "Нормальность π",
    text: "Предполагается, что каждая последовательность цифр встречается в π одинаково часто.",
  },
]

const PI_DIGITS = "3.14159265358979323846264338327950288419716939937510582097494459230781640628620899"

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:gap-12 lg:gap-20">
          {/* Left — Title + digits */}
          <div className="flex flex-col justify-center">
            <div
              className={`mb-6 transition-all duration-700 md:mb-10 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
            >
              <h2 className="mb-2 font-sans text-4xl font-light leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
                Сегодня
                <br />
                и всегда
              </h2>
              <p className="font-mono text-xs text-foreground/60 md:text-sm">/ π в современном мире</p>
            </div>

            <div
              className={`transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="mb-4 text-sm leading-relaxed text-foreground/80 md:text-base">
                Число π используется везде: в GPS, в МРТ-сканерах, в расчётах орбит спутников и в алгоритмах
                шифрования. Без π невозможна современная цивилизация.
              </p>
              <div className="overflow-hidden rounded-lg border border-foreground/15 bg-foreground/5 p-3 backdrop-blur-sm md:p-4">
                <p className="mb-1 font-mono text-xs text-foreground/40">Первые 80 знаков π</p>
                <p className="break-all font-mono text-xs leading-relaxed text-foreground/70 md:text-sm">
                  {PI_DIGITS}
                </p>
              </div>
            </div>

            <div
              className={`mt-6 flex flex-wrap gap-3 transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <MagneticButton variant="primary" size="lg">
                π в науке и технике
              </MagneticButton>
            </div>
          </div>

          {/* Right — Fun facts */}
          <div className="flex flex-col justify-center space-y-4 md:space-y-5">
            {FUN_FACTS.map((fact, i) => (
              <div
                key={i}
                className={`group flex items-start gap-4 rounded-xl border border-foreground/10 p-4 transition-all duration-700 hover:border-foreground/25 hover:bg-foreground/5 md:p-5 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <span className="text-2xl">{fact.emoji}</span>
                <div>
                  <h3 className="mb-1 font-sans text-sm font-medium text-foreground md:text-base">{fact.title}</h3>
                  <p className="text-xs leading-relaxed text-foreground/65 md:text-sm">{fact.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
