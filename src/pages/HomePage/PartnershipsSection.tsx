import AesolarLogo from "@/assets/partners-logo/aesolar.svg"
import AlphaESSLogo from "@/assets/partners-logo/alpha-ess.svg"
import AlpitronicLogo from "@/assets/partners-logo/alpitronic.svg"
import CatlLogo from "@/assets/partners-logo/catl.svg"
import DanfossLogo from "@/assets/partners-logo/danfoss.svg"
import DehnLogo from "@/assets/partners-logo/dehn.svg"
import FroniusLogo from "@/assets/partners-logo/fronius.svg"
import K2Logo from "@/assets/partners-logo/k2.svg"
import LongiLogo from "@/assets/partners-logo/longi.svg"
import PhoenixContactLogo from "@/assets/partners-logo/phoenix-contact.svg"
import PramacLogo from "@/assets/partners-logo/pramac.svg"
import RefuLogo from "@/assets/partners-logo/refu.svg"
import SolarKitLogo from "@/assets/partners-logo/solarkit.svg"
import SoneparLogo from "@/assets/partners-logo/sonepar.svg"


export const PartnershipsSection = () => {

  const partners: { name: string, logo: string }[] = [
    {
      name: "Aesolar",
      logo: AesolarLogo
    },
    {
      name: "Dehn",
      logo: DehnLogo
    },
    {
      name: "SolarKit",
      logo: SolarKitLogo
    },
    {
      name: "Alpha-ESS",
      logo: AlphaESSLogo
    },
    {
      name: "Longi",
      logo: LongiLogo
    },
    {
      name: "Alpitronic",
      logo: AlpitronicLogo
    },
    {
      name: "CATL",
      logo: CatlLogo
    },
    {
      name: "Fronius",
      logo: FroniusLogo
    },
    {
      name: "Sonepar",
      logo: SoneparLogo
    },
    {
      name: "Danfoss",
      logo: DanfossLogo
    },
    {
      name: "Phoenix Contact",
      logo: PhoenixContactLogo
    },
    {
      name: "Refu",
      logo: RefuLogo
    },
    {
      name: "K2",
      logo: K2Logo
    },
    {
      name: "Pramac",
      logo: PramacLogo
    },
  ]

  return (
    <section className="container mx-auto pt-15 pb-20 md:py-[7.5rem]">
      {/* Partners */}
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-16 lg:gap-2.5">
        <h3 className="text-gradient lg:min-w-[21.5rem]">
          Unsere
          <br />
          Partner
        </h3>
        <div className="flex flex-wrap justify-center items-start gap-[3.75rem] opacity-50">
          {partners.map(partner => (
            <img key={partner.name} className="h-6 lg:h-10" src={partner.logo} />
          ))}
        </div>
      </div>
    </section>
  )
}

