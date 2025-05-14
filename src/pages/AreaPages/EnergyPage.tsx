import AreaPageHero from '@/components/area-pages-constructor/AreaPageHero'
import AreaPageSection, { IAreaPageSection } from '@/components/area-pages-constructor/AreaPageSection'
import { useTheme } from '@/contexts/ThemeContext'

import energyHeroImage from "@/assets/business-areas/energy.png"
import energyHeroImageDark from "@/assets/business-areas/energy-dark.png"
import { ContactPageSection } from '../ContactPage/ContactPageSection'

import energy1 from "@/assets/areas-sections/energy-1.png"
import energy2 from "@/assets/areas-sections/energy-2.png"
import energy3 from "@/assets/areas-sections/energy-3.png"

const EnergyPage = () => {
  const {darkMode} = useTheme();

  const heroContent = {
    image: darkMode ? energyHeroImageDark : energyHeroImage,
    heading: "Energy",
    title: "Projektplanung, Umsetzung & nachhaltige Energievermarktung",
    text: "MaierTech Energy plant, steuert und realisiert nachhaltige Energieprojekte – von der ersten Idee bis zur fertigen Anlage. Unsere maßgeschneiderten Lösungenvereinen effiziente Technologien, wirtschaftliche Konzepte und innovative Finanzierungsmodelle für eine zukunftssichere Energieversorgung. Durch strategische Planung und smarte Integration schaffen wir rentable, nachhaltige und zuverlässige Energiesysteme für Unternehmen, Kommunen und Investoren."
  }

  const content:{title: string, sections: IAreaPageSection[]} = {
    title: "Unsere Energy",
    sections: [
      {
        imgSrc: energy1,
        title: "Projektplanung, Steuerung & Umsetzung",
        subtitle: "Von der Idee zur erfolgreichen Inbetriebnahme",
        text: "Wir übernehmen die Planung, Steuerung und Umsetzung von Energieprojekten – von Photovoltaik & Hybridanlagen bis hin zu Netzanbindungen. Durch technologische Beratung und präzise Umsetzung sorgen wir für maximale Effizienz und langfristige Rentabilität. ",
        table: {
          plusColTitle: "Vorteile",
          pluses: [
            { title: "Ganzheitliche Planung & Optimierung", text: "Standortanalyse, Konzeptentwicklung & technische Umsetzung." },
            { title: "Effiziente Steuerung", text: "Projektkoordination, Genehmigungen & Bauleitung." },
            { title: "Innovative Technologien", text: "Integration von PV, Hybridlösungen & smarten Netzen." }
          ],
          checkmarkColTitle: "Anwendungsbereiche",
          checkmarks: [
            { title: "Industrie & Gewerbe", text: "Planung effizienter Energiekonzepte." },
            { title: "Kommunale & gewerbliche Projekte", text: "Intelligente Strom- & Wärmelösungen." },
            { title: "Investoren & Unternehmen", text: "Umsetzung nachhaltiger Großprojekte." }
          ]
        }
      },
      {
        imgSrc: energy2,
        title: "Finanzierung & Wirtschaftlichkeit",
        subtitle: "Nachhaltige Energielösungen rentabel gestalten",
        text: "Wir bieten maßgeschneiderte Finanzierungs- & Investitionsmodelle, um nachhaltige Energieprojekte wirtschaftlich tragfähig zu machen. Durch Fördermittel, Kapitalbeschaffung und smarte Abrechnungsmodelle schaffen wir finanzielle Sicherheit und langfristige Rendite.",
        table: {
          plusColTitle: "Vorteile",
          pluses: [
            { title: "Kapitalbeschaffung für erneuerbare Energien", text: "Finanzierungssicherheit für Projekte." },
            { title: "Nutzung von Fördermöglichkeiten & Zuschüssen", text: "Staatliche & private Förderungen optimal einsetzen." },
            { title: "Flexible Investitionsmodelle", text: "Zusammenarbeit mit Banken & Investoren" },
          ],
          checkmarkColTitle: "Anwendungsbereiche",
          checkmarks: [
            { title: "Solarparks", text: "Finanzierung & Fördermittelberatung." },
            { title: "Industrie & Gewerbe", text: "Wirtschaftliche Energieinvestitionen." },
            { title: "Kommunale Projekte & Stadtwerke", text: "Nachhaltige Finanzierungsstrategien" }
          ]
        }
      },
      {
        imgSrc: energy3,
        title: "Betriebsoptimierung & Flächennutzung",
        subtitle: "Maximale Effizienz & nachhaltige Flächenverwertung",
        text: "Wir optimieren den Betrieb, die Vermarktung und die Nutzung von Energieanlagen. Intelligente Einspeise- und Abrechnungsmodelle verbessern die Wirtschaftlichkeit, während Unternehmen und Landwirte durch Dach- & Freiflächenleasing langfristige Einnahmen erzielen können.",
        table: {
          plusColTitle: "Vorteile",
          pluses: [
            { title: "Effiziente Betriebsmodelle", text: "Intelligente Steuerung & maximale Rentabilität." },
            { title: "Smart Energy Trading", text: "Optimierte Einspeise- & Abrechnungsmodelle." },
            { title: "Dach- & Freiflächenleasing", text: "Zusätzliche Einnahmequellen ohne Eigeninvestition." }
          ],
          checkmarkColTitle: "Anwendungsbereiche",
          checkmarks: [
            { title: "Großanlagen & Industrie", text: "Optimierung von PV- & Hybridanlagen." },
            { title: "Stromhändler & Stadtwerke", text: "Intelligente Vermarktungsmodelle." },
            { title: "Unternehmen & Landwirte", text: "Dach- & Freiflächen für Solarnutzung verpachten." }
          ]
        }
      }
    ]
  }

  return (
    <>
      <AreaPageHero heading={heroContent.heading} title={heroContent.title} text={heroContent.text} image={heroContent.image} />
      <AreaPageSection title={content.title} sections={content.sections} />
      <ContactPageSection insideOtherPage={true} />
    </>
  )
}

export default EnergyPage;
