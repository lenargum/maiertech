import { Button } from "@/components/ui/Button/Button"
import heroImage from "@/assets/hero/hero.png"
import { Spotlight } from "@/components/ui/spotlight"

export const HeroSection = () => {
  return (
    <section className="py-16 pt-48 pb-10" style={{ backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 72%,  rgba(255, 255, 255, 1) 100%), url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Spotlight />
      <div className="container mx-auto flex flex-col gap-20 drop-shadow-triple-white z-10">
        <div className="text-center flex flex-col gap-8 items-center justify-center">
          <h1 className="text-gradient">
            Energy meets Intelligence
            <br />
            Nachhaltig. Effizient. Zukunftssicher
          </h1>
          <span className="text-black">
            Intelligente Energie erfordert smarte Lösungen. MaierTech verbindet modernste Technologie<br /> mit innovativen Ansätzen, um eine nachhaltige, vernetzte und effiziente Energiewelt zu <br />gestalten. Dank unserer engen Partnerschaft mit AE Solar setzen wir auf modernste <br /> Solartechnologie und skalieren Projekte weltweit.
          </span>

          <div className="flex flex-wrap justify-center items-center gap-2.5">
            <Button href="/contact" variant="filled">
              Solutions
            </Button>
            <Button href="/about" variant="outlined">
              Über uns
            </Button>
          </div>
        </div>
        <div className="max-w-5xl flex flex-row justify-center items-start self-center p-8 gap-2.5 bg-white/50 border-2 border-[#EDE8FB] backdrop-blur-[10px] rounded-2xl">
          <div className="flex flex-row gap-2.5">
            <div className="mt-3 h-[2px] w-6 bg-gradient shrink-0" />
            <span className="text-black">
              <strong>Über 20 Jahre Erfahrung</strong> in der Photovoltaik — von der Planung bis zur Umsetzung großflächiger Projekte.
            </span>
          </div>

          <div className="flex flex-row gap-2.5">
            <div className="mt-3 h-[2px] w-6 bg-gradient shrink-0" />
            <span className="text-black">
              <strong>Smarte Steuerung & effiziente Energiespeicherung</strong> für maximale Unabhängigkeit und Netzstabilität.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
} 