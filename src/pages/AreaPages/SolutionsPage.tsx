import AreaPageHero from '@/components/area-pages-constructor/AreaPageHero'
import AreaPageSection, { IAreaPageSection } from '@/components/area-pages-constructor/AreaPageSection'

import solutionsHeroImage from "@/assets/business-areas/solutions.png"
import solutionsHeroImageDark from "@/assets/business-areas/solutions-dark.png"
import { ContactPageSection } from '../ContactPage/ContactPageSection'

import solution1 from "@/assets/areas-sections/sol-1.png"
import solution2 from "@/assets/areas-sections/sol-2.png"
import solution3 from "@/assets/areas-sections/sol-3.png"
import { useTheme } from '@/contexts/ThemeContext'
const SolutionsPage = () => {

  const {darkMode} = useTheme();

  const heroContent = {
    image: darkMode ? solutionsHeroImageDark : solutionsHeroImage,
    heading: "Solutions",
    title: "Intelligente Systemlösungen für diverse Anwendungen",
    text: "Maiertech Solutions entwickelt und implementiert maßgeschneiderte Energiesysteme, die Photovoltaik, Speicher und Smart-Grid-Technologien miteinander vernetzen. Wir optimieren Energiesysteme für verschiedene Anwendungen, um maximale Effizienz, Wirtschaftlichkeit und Nachhaltigkeit zu gewährleisten."
  }

  const content: { title: string, sections: IAreaPageSection[] } = {
    title: "Unsere Lösungen",
    sections: [
      {
        imgSrc: solution1,
        title: "Photovoltaik-Systeme",
        subtitle: "Effiziente Kombination aus Solarstrom und Wärmerückgewinnung",
        text: "Hybrid-Photovoltaik-Thermie-Module (PVT-Module) vereinen Photovoltaik (PV) und Solarthermie (T) in einem einzigen System. Während die Photovoltaikmodule Sonnenlicht in Strom umwandeln, nutzen sie gleichzeitig die entstehende Abwärme, um thermische Energie zu gewinnen. Dadurch wird der Wirkungsgrad deutlich gesteigert und die Sonnenenergie doppelt effizient genutzt.",
        table: {
          plusColTitle: "Vorteile",
          pluses: [
            { title: "Maximale Energieausbeute", text: "Gleichzeitige Nutzung von Solarstrom und Wärme steigert die Gesamteffizienz." },
            { title: "Erhöhte Photovoltaik-Leistung", text: "Durch die Wärmerückgewinnung werden die PV-Module gekühlt, wodurch sie effizienter arbeiten." },
            { title: "Einsparung von Heizkosten", text: "Die gewonnene Wärme kann für Warmwasser, Prozesswärme oder Heizsysteme genutzt werden. " },
            { title: "Platzsparend & nachhaltig", text: "Ein System für zwei Energieformen reduziert die benötigte Fläche und senkt CO₂-Emissionen." },
            { title: "Hohe Wirtschaftlichkeit", text: "Besonders rentabel für Unternehmen mit hohem Energiebedarf, da Strom- und Heizkosten gesenkt werden. " }
          ],
          checkmarkColTitle: "Anwendungsbereiche",
          checkmarks: [
            { title: "Industriegebäude & Gewerbe", text: "Ideale Lösung für Unternehmen mit großem Strom- und Wärmebedarf, z. B. Produktionsstätten." },
            { title: "Energieintensive Betriebe", text: "Perfekt für Lebensmittelproduktion, Chemieindustrie oder metallverarbeitende Betriebe. " },
            { title: "Wohngebäude & Quartiere", text: "Einsatz in Mehrfamilienhäusern oder modernen, energieautarken Gebäuden." },
            { title: "Landwirtschaft", text: "Wärme kann für Gewächshäuser oder die Warmwasseraufbereitung genutzt werden." }
          ]
        },
        conclusion: {
          title: "Fazit",
          text: "Hybrid-PVT-Module bieten eine intelligente Lösung für nachhaltige Energiegewinnung, indem sie Solarstrom und Wärme effizient kombinieren. Insbesondere für Unternehmen mit hohem Energiebedarf kann diese Technologie eine kostensparende und umweltfreundliche Alternative sein. "
        }
      },
      {
        imgSrc: solution2,
        title: "Energieprojekte & Vermarktung",
        subtitle: "Effiziente Kombination aus Solarstrom und Wärmerückgewinnung",
        text: "Hybrid-Photovoltaik-Thermie-Module (PVT-Module) vereinen Photovoltaik (PV) und Solarthermie (T) in einem einzigen System. Während die Photovoltaikmodule Sonnenlicht in Strom umwandeln, nutzen sie gleichzeitig die entstehende Abwärme, um thermische Energie zu gewinnen. Dadurch wird der Wirkungsgrad deutlich gesteigert und die Sonnenenergie doppelt effizient genutzt.",
        table: {
          plusColTitle: "Vorteile",
          pluses: [
            { title: "Maximale Energieausbeute", text: "Gleichzeitige Nutzung von Solarstrom und Wärme steigert die Gesamteffizienz." },
            { title: "Erhöhte Photovoltaik-Leistung", text: "Durch die Wärmerückgewinnung werden die PV-Module gekühlt, wodurch sie effizienter arbeiten." },
            { title: "Einsparung von Heizkosten", text: "Die gewonnene Wärme kann für Warmwasser, Prozesswärme oder Heizsysteme genutzt werden. " },
            { title: "Platzsparend & nachhaltig", text: "Ein System für zwei Energieformen reduziert die benötigte Fläche und senkt CO₂-Emissionen." },
            { title: "Hohe Wirtschaftlichkeit", text: "Besonders rentabel für Unternehmen mit hohem Energiebedarf, da Strom- und Heizkosten gesenkt werden. " }
          ],
          checkmarkColTitle: "Anwendungsbereiche",
          checkmarks: [
            { title: "Industriegebäude & Gewerbe", text: "Ideale Lösung für Unternehmen mit großem Strom- und Wärmebedarf, z. B. Produktionsstätten." },
            { title: "Energieintensive Betriebe", text: "Perfekt für Lebensmittelproduktion, Chemieindustrie oder metallverarbeitende Betriebe. " },
            { title: "Wohngebäude & Quartiere", text: "Einsatz in Mehrfamilienhäusern oder modernen, energieautarken Gebäuden." },
            { title: "Landwirtschaft", text: "Wärme kann für Gewächshäuser oder die Warmwasseraufbereitung genutzt werden." }
          ]
        },
        conclusion: {
          title: "Fazit",
          text: "Hybrid-PVT-Module bieten eine intelligente Lösung für nachhaltige Energiegewinnung, indem sie Solarstrom und Wärme effizient kombinieren. Insbesondere für Unternehmen mit hohem Energiebedarf kann diese Technologie eine kostensparende und umweltfreundliche Alternative sein. "
        }
      },
      {
        imgSrc: solution3,
        title: "Digitales Energiemanagement",
        subtitle: "Effiziente Kombination aus Solarstrom und Wärmerückgewinnung",
        text: "Hybrid-Photovoltaik-Thermie-Module (PVT-Module) vereinen Photovoltaik (PV) und Solarthermie (T) in einem einzigen System. Während die Photovoltaikmodule Sonnenlicht in Strom umwandeln, nutzen sie gleichzeitig die entstehende Abwärme, um thermische Energie zu gewinnen. Dadurch wird der Wirkungsgrad deutlich gesteigert und die Sonnenenergie doppelt effizient genutzt.",
        table: {
          plusColTitle: "Vorteile",
          pluses: [
            { title: "Maximale Energieausbeute", text: "Gleichzeitige Nutzung von Solarstrom und Wärme steigert die Gesamteffizienz." },
            { title: "Erhöhte Photovoltaik-Leistung", text: "Durch die Wärmerückgewinnung werden die PV-Module gekühlt, wodurch sie effizienter arbeiten." },
            { title: "Einsparung von Heizkosten", text: "Die gewonnene Wärme kann für Warmwasser, Prozesswärme oder Heizsysteme genutzt werden. " },
            { title: "Platzsparend & nachhaltig", text: "Ein System für zwei Energieformen reduziert die benötigte Fläche und senkt CO₂-Emissionen." },
            { title: "Hohe Wirtschaftlichkeit", text: "Besonders rentabel für Unternehmen mit hohem Energiebedarf, da Strom- und Heizkosten gesenkt werden. " }
          ],
          checkmarkColTitle: "Anwendungsbereiche",
          checkmarks: [
            { title: "Industriegebäude & Gewerbe", text: "Ideale Lösung für Unternehmen mit großem Strom- und Wärmebedarf, z. B. Produktionsstätten." },
            { title: "Energieintensive Betriebe", text: "Perfekt für Lebensmittelproduktion, Chemieindustrie oder metallverarbeitende Betriebe. " },
            { title: "Wohngebäude & Quartiere", text: "Einsatz in Mehrfamilienhäusern oder modernen, energieautarken Gebäuden." },
            { title: "Landwirtschaft", text: "Wärme kann für Gewächshäuser oder die Warmwasseraufbereitung genutzt werden." }
          ]
        },
        conclusion: {
          title: "Fazit",
          text: "Hybrid-PVT-Module bieten eine intelligente Lösung für nachhaltige Energiegewinnung, indem sie Solarstrom und Wärme effizient kombinieren. Insbesondere für Unternehmen mit hohem Energiebedarf kann diese Technologie eine kostensparende und umweltfreundliche Alternative sein. "
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

export default SolutionsPage;
