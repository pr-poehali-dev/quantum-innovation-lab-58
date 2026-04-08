import { useReveal } from "@/hooks/use-reveal"

const ANCIENT_SLIDES = [
  {
    number: "01",
    title: "Вавилон",
    category: "≈ 1900 до н.э. — π ≈ 3.125",
    year: "–1900",
    direction: "left",
    fact: "Глиняные таблички с расчётом площади круга",
  },
  {
    number: "02",
    title: "Египет",
    category: "≈ 1650 до н.э. — π ≈ 3.1605",
    year: "–1650",
    direction: "right",
    fact: "Папирус Ринда: «Площадь круга равна квадрату 8/9 диаметра»",
  },
  {
    number: "03",
    title: "Архимед",
    category: "≈ 250 до н.э. — 3.1408 < π < 3.1429",
    year: "–250",
    direction: "left",
    fact: "Метод вписанных и описанных многоугольников",
  },
  {
    number: "04",
    title: "Китай",
    category: "≈ 480 н.э. — π ≈ 3.14159265",
    year: "480",
    direction: "right",
    fact: "Цзу Чунчжи: 7 верных знаков после запятой",
  },
  {
    number: "05",
    title: "Индия",
    category: "≈ 499 н.э. — бесконечные ряды",
    year: "499",
    direction: "left",
    fact: "Арьябхата: π ≈ 62832/20000 = 3.1416",
  },
]

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-12 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Древний мир
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Первые вычисления π · 5 цивилизаций</p>
        </div>

        <div className="space-y-4 md:space-y-5">
          {ANCIENT_SLIDES.map((slide, i) => (
            <SlideCard key={i} slide={slide} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SlideCard({
  slide,
  index,
  isVisible,
}: {
  slide: { number: string; title: string; category: string; year: string; direction: string; fact: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      return slide.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
    }
    return "translate-x-0 opacity-100"
  }

  return (
    <div
      className={`group flex items-center justify-between border-b border-foreground/10 py-4 transition-all duration-700 hover:border-foreground/25 md:py-5 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 100}ms`,
        marginLeft: index % 2 === 0 ? "0" : "auto",
        maxWidth: index % 2 === 0 ? "88%" : "92%",
      }}
    >
      <div className="flex items-baseline gap-4 md:gap-8">
        <span className="font-mono text-sm text-foreground/30 transition-colors group-hover:text-foreground/50 md:text-base">
          {slide.number}
        </span>
        <div>
          <h3 className="mb-0.5 font-sans text-xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-2 md:text-2xl lg:text-3xl">
            {slide.title}
          </h3>
          <p className="font-mono text-xs text-foreground/50 md:text-sm">{slide.category}</p>
          <p className="mt-0.5 font-sans text-xs text-foreground/40 md:text-sm">{slide.fact}</p>
        </div>
      </div>
      <span className="font-mono text-xs text-foreground/30 md:text-sm">{slide.year}</span>
    </div>
  )
}
