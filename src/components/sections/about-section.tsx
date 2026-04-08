import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"

const DISCOVERIES = [
  {
    img: "https://cdn.poehali.dev/projects/3ecabc12-8e6a-4786-8c08-883906f10742/files/1d2eda94-ffa4-4d05-a271-c321c7ca7355.jpg",
    label: "Папирус Ринда",
    year: "1650 до н.э.",
  },
  {
    img: "https://cdn.poehali.dev/projects/3ecabc12-8e6a-4786-8c08-883906f10742/files/92b08bff-0b09-4a2c-9571-431e71bd26f0.jpg",
    label: "Архимед",
    year: "250 до н.э.",
  },
  {
    img: "https://cdn.poehali.dev/projects/3ecabc12-8e6a-4786-8c08-883906f10742/files/e3dc9020-2c59-46d6-a180-36c7048834e1.jpg",
    label: "Символ π",
    year: "1706 н.э.",
  },
  {
    img: "https://cdn.poehali.dev/projects/3ecabc12-8e6a-4786-8c08-883906f10742/files/764d42ee-75fe-4bcf-8e26-5233d1d392fa.jpg",
    label: "Суперкомпьютер",
    year: "2024 н.э.",
  },
]

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">
          {/* Left — Gallery */}
          <div
            className={`grid grid-cols-2 gap-3 transition-all duration-700 md:gap-4 ${
              isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
            }`}
          >
            {DISCOVERIES.map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-44 lg:h-52"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-3">
                  <p className="font-sans text-sm font-medium text-white">{item.label}</p>
                  <p className="font-mono text-xs text-white/60">{item.year}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right — Key facts */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-10">
            <div
              className={`transition-all duration-700 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
              }`}
            >
              <h2 className="mb-3 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Ключевые
                <br />
                открытия
                <br />
                <span className="text-foreground/40">человечества</span>
              </h2>
            </div>

            {[
              { value: "4000", label: "лет истории", sublabel: "от Вавилона до наших дней", direction: "right" },
              { value: "100T", label: "знаков π", sublabel: "рекорд 2024 года · Google", direction: "left" },
              { value: "∞", label: "иррационально", sublabel: "не является дробью никогда", direction: "right" },
            ].map((stat, i) => {
              const getRevealClass = () => {
                if (!isVisible) {
                  return stat.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
                }
                return "translate-x-0 opacity-100"
              }

              return (
                <div
                  key={i}
                  className={`flex items-baseline gap-4 border-l border-foreground/30 pl-4 transition-all duration-700 md:gap-6 md:pl-6 ${getRevealClass()}`}
                  style={{
                    transitionDelay: `${300 + i * 150}ms`,
                    marginLeft: i % 2 === 0 ? "0" : "auto",
                    maxWidth: i % 2 === 0 ? "100%" : "88%",
                  }}
                >
                  <div className="text-2xl font-light text-foreground md:text-4xl lg:text-5xl">{stat.value}</div>
                  <div>
                    <div className="font-sans text-base font-light text-foreground md:text-lg">{stat.label}</div>
                    <div className="font-mono text-xs text-foreground/60">{stat.sublabel}</div>
                  </div>
                </div>
              )
            })}

            <div
              className={`flex flex-wrap gap-3 transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "750ms" }}
            >
              <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection?.(4)}>
                Любопытные факты
              </MagneticButton>
              <MagneticButton size="lg" variant="secondary" onClick={() => scrollToSection?.(1)}>
                Древний мир
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
