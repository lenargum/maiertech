import { Input } from "../../components/ui/Input"
import { Button } from "../../components/ui/Button"
import { CardSpotlight } from "../../components/ui/CardSpotlight"

import GermanyFlag from "@/assets/flags/germany.svg"
import TurkeyFlag from "@/assets/flags/turkey.svg"
import { useTheme } from "@/contexts/ThemeContext"
import ContactSectionBgPattern from "@/components/svg-patterns/ContactSectionBgPattern"
import ContactCardBgPattern from "@/components/svg-patterns/ContactCardBgPattern"
import ContactSectionRotatedBgPattern from "@/components/svg-patterns/ContactSectionRotatedBgPattern"

export const ContactSection = () => {
  const { darkMode } = useTheme();

  return (
    <section className="container mx-auto py-20 lg:py-30 relative" style={{ zIndex: 1 }}>
      <ContactSectionBgPattern className="hidden lg:flex" style={{ zIndex: -1 }} />
      <ContactSectionRotatedBgPattern className="block lg:hidden" style={{ zIndex: -1 }} />
      <div className="max-w-[44.5rem] flex flex-col items-center mx-auto text-center">
        <h2 className="text-gradient-2 mb-6">Kontakt & Beratung</h2>
        <span className="mb-15">
          Ob individuelle Lösungen oder Großprojekte —
          <br />
          Wir beraten Sie persönlich und kompetent.
        </span>

        <CardSpotlight className="self-center p-0.5 rounded-4xl overflow-hidden dark:border-2 dark:border-gray-700/20"
          style={{
            background: `radial-gradient(50% 50% at 50% 50%, ${darkMode ? "#000000" : "#FFFFFF"} 0%, rgba(255, 255, 255, 0) 100%), rgba(255, 255, 255, 0.1)`,
            boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.05), 0px 40px 60px rgba(0, 0, 0, 0.05)',
            backdropFilter: "blur(5px)",
          }}
        >
          <div className="relative flex flex-col lg:flex-row gap-2.5 z-20">
            <div className="p-10 flex flex-col text-center">
              <h4 className="mb-5 drop-shadow-triple-white">
                Direktes Kontaktformular
              </h4>
              <span className="mb-5 drop-shadow-triple-white">
                Ob individuelle Lösungen oder Großprojekte —
                <br />
                wir beraten Sie persönlich und kompetent.
              </span>
              <form className="px-10">
                <Input
                  type="text"
                  placeholder="Ihr Name"
                  className="drop-shadow-triple-white mb-1 text-center"
                />
                <Input
                  type="email"
                  placeholder="Ihr e-mail"
                  className="drop-shadow-triple-white text-center"
                />
                <Button variant="filled" className="w-full mt-8">
                  Schicken
                </Button>
              </form>
            </div>

            <div className="p-10 w-full lg:w-[280px] flex-shrink-0 rounded-[1.75rem] border-2 border-gray-300/20 dark:border-gray-700/20 text-start relative overflow-hidden"
              style={{
                zIndex: 1,
                background: 'linear-gradient(252.44deg, rgba(0, 150, 237, 0.05) 0%, rgba(0, 220, 187, 0.05) 100%)'
              }}>
              <ContactCardBgPattern style={{ zIndex: -1 }} />

              <h4 className="mb-5 drop-shadow-triple-white">
                Unsere Standorte
              </h4>
              <div className="flex flex-col gap-2.5 drop-shadow-triple-white">
                <div className="flex items-start gap-2">
                  <h5 className="flex items-center justify-center w-[1.4rem] h-[1.4rem]"><img src={GermanyFlag} alt="Germany" /></h5>
                  <div className="flex flex-col gap-3">
                    <h5 className="text-primary-3">Deutschland</h5>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <h5 className="flex items-center justify-center w-[1.4rem] h-[1.4rem]"><img src={TurkeyFlag} alt="Turkey" /></h5>
                  <div className="flex flex-col gap-3">
                    <h5 className="text-primary-3">MaierTech Türkiye</h5>
                    <span className="body2 text-primary-3">
                      MOSAB 3. Kısım, Mustafa
                      <br />
                      Çapra Cd. No:1 45030
                      <br />
                      Yunusemre, Manisa, Türkiye
                      <br />
                      +90 236 232 05 55
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardSpotlight>
      </div>
    </section>
  )
}





