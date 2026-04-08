import { useReveal } from "@/hooks/use-reveal"

const ERAS = [
  {
    title: "Средневековье",
    description: "Аль-Каши (1424): 16 знаков π. Индийские математики открыли бесконечные ряды для вычисления π.",
    direction: "top",
    year: "XI–XV вв.",
    digits: "16 знаков",
  },
  {
    title: "Ренессанс",
    description: "Ван Цейлен (1610): 35 знаков. Завещал выгравировать π на надгробии.",
    direction: "right",
    year: "XVI–XVII вв.",
    digits: "35 знаков",
  },
  {
    title: "Эпоха анализа",
    description: "Лейбниц, Валлис, Ньютон: бесконечные ряды и формулы. Мэчин (1706): 100 знаков за несколько часов.",
    direction: "left",
    year: "XVII–XVIII вв.",
    digits: "100 знаков",
  },
  {
    title: "Имя «π»",
    description: "Уильям Джонс (1706) первым использовал букву π. Эйлер (1737) закрепил обозначение навсегда.",
    direction: "bottom",
    year: "1706–1737",
    digits: "символ π",
  },
  {
    title: "Компьютерный век",
    description: "1949: ENIAC вычислил 2037 знаков за 70 часов. Начало гонки за триллионами цифр.",
    direction: "top",
    year: "1949",
    digits: "2 037 знаков",
  },
  {
    title: "Наши дни",
    description: "2024: Emma Haruka Iwao (Google) — 100 триллионов знаков π. Новый рекорд человечества.",
    direction: "bottom",
    year: "2024",
    digits: "100 трлн знаков",
  },
]

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-12 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Эпохи
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ 4000 лет вычислений · 6 периодов</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-x-16 md:gap-y-8 lg:gap-x-24">
          {ERAS.map((era, i) => (
            <EraCard key={i} era={era} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function EraCard({
  era,
  index,
  isVisible,
}: {
  era: { title: string; description: string; direction: string; year: string; digits: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (era.direction) {
        case "left":
          return "-translate-x-16 opacity-0"
        case "right":
          return "translate-x-16 opacity-0"
        case "top":
          return "-translate-y-16 opacity-0"
        case "bottom":
          return "translate-y-16 opacity-0"
        default:
          return "translate-y-12 opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group transition-all duration-700 ${getRevealClass()}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="mb-2 flex items-center gap-3">
        <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
        <span className="font-mono text-xs text-foreground/60">{era.year}</span>
        <span className="rounded-full border border-foreground/20 px-2 py-0.5 font-mono text-xs text-foreground/50">
          {era.digits}
        </span>
      </div>
      <h3 className="mb-1.5 font-sans text-xl font-light text-foreground md:text-2xl">{era.title}</h3>
      <p className="max-w-sm text-xs leading-relaxed text-foreground/70 md:text-sm">{era.description}</p>
    </div>
  )
}
