import { Input } from "./ui/Input"
import { Button } from "./ui/Button"
import { CardSpotlight } from "./ui/CardSpotlight"

export const ContactSection = () => {
  return (
    <section className="py-16">
      <div className="container flex flex-col mx-auto px-4 gap-16">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gradient-3 mb-6">Kontakt & Beratung</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Ob individuelle Lösungen oder Großprojekte —
            <br />
            Wir beraten Sie persönlich und kompetent.
          </p>
        </div>

        <CardSpotlight className="self-center p-1 rounded-3xl bg-white overflow-hidden border-none" color="#00DCBB80"
        style={{
          boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.05), 0px 40px 60px rgba(0, 0, 0, 0.05)'
        }}
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-center text-black">
                Direktes Kontaktformular
              </h3>
              <p className="mb-8 text-black text-center">
                Ob individuelle Lösungen oder Großprojekte —
                <br />
                wir beraten Sie persönlich und kompetent.
              </p>
              <form className="space-y-8">
                <div className="border-b border-gray-400">
                  <Input
                    type="text"
                    placeholder="Ihr Name"
                  />
                </div>
                <div className="border-b border-gray-400">
                  <Input
                    type="email"
                    placeholder="Ihr e-mail"
                  />
                </div>
                <div className="mt-8">
                  <Button variant="filled" className="w-full">
                    Schicken
                  </Button>
                </div>
              </form>
            </div>

            <div className="p-10 w-[280px] rounded-2xl border-2 border-gray-400/20 bg-gray-200/20 text-start">
              <h3 className="text-2xl font-bold mb-5 text-black">
                Unsere Standorte
              </h3>
              <div className="flex flex-col gap-2.5">
                <div className="flex items-start gap-2">
                  <span>🇩🇪</span>
                  <div className="flex flex-col gap-3">
                    <span className="text-primary-3 font-semibold">Deutschland</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span>🇹🇷</span>
                  <div className="flex flex-col gap-3">
                    <span className="text-primary-3 font-semibold">MaierTech Türkiye</span>
                    <p className="text-primary-3">
                      MOSAB 3. Kısım, Mustafa
                      <br />
                      Çapra Cd. No:1 45030
                      <br />
                      Yunusemre, Manisa, Türkiye
                      <br />
                      +90 236 232 05 55
                    </p>
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