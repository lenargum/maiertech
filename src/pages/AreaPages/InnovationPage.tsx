import AreaPageHero from '@/components/area-pages-constructor/AreaPageHero'
import AreaPageSection, { IAreaPageSection } from '@/components/area-pages-constructor/AreaPageSection'

import innovationHeroImage from "@/assets/business-areas/innovationen.png"
import innovationHeroImageDark from "@/assets/business-areas/innovationen-dark.png"
import { ContactPageSection } from '../ContactPage/ContactPageSection'

import innovation1 from "@/assets/areas-sections/inno-1.png"
import innovation2 from "@/assets/areas-sections/inno-2.png"
import innovation3 from "@/assets/areas-sections/inno-3.jpg"
import { useTheme } from '@/contexts/ThemeContext'

const InnovationPage = () => {

  const {darkMode} = useTheme();

  const heroContent = {
    image: darkMode ? innovationHeroImageDark : innovationHeroImage,
    heading: "Innovationen",
    title: "Technologien für die Zukunft der Energie",
    text: "MaierTech Innovations entwickelt fortschrittliche Technologien, die die Energiebranche revolutionieren. Durch Forschung, Entwicklung und praxisnahe Implementierung treiben wir die nächste Generation erneuerbarer Energielösungen voran. Unsere innovativen Produkte und Konzepte maximieren die Effizienz, steigern die Nachhaltigkeit und schaffen neue Möglichkeiten für Unternehmen, Städte und die Industrie."
  }

  const content:{title: string, sections: IAreaPageSection[]} = {
    title: "Unsere Innovationen",
    sections: [
      {
        imgSrc: innovation1,
        title: "Hybrid-PVT-Module ",
        subtitle: "Effiziente Kombination aus Solarstrom und Wärmerückgewinnung",
        text: "Hybrid-Photovoltaik-Thermie-Module (PVT-Module) vereinen Photovoltaik (PV) und Solarthermie (T) in einem einzigen System. Während die Photovoltaikmodule Sonnenlicht in Strom umwandeln, nutzen sie gleichzeitig die entstehende Abwärme, um thermische Energie zu gewinnen. Dadurch wird der Wirkungsgrad deutlich gesteigert und die Sonnenenergie doppelt effizient genutzt.",
        table: {
          plusColTitle: "Vorteile",
          pluses: [
            { title: "Maximale Energieausbeute", text: "Gleichzeitige Nutzung von Solarstrom und Wärme steigert die Gesamteffizienz." },
            { title: "Erhöhte Photovoltaik-Leistung", text: "Durch die Wärmerückgewinnung werden die PV-Module gekühlt, wodurch sie effizienter arbeiten." },
            { title: "Einsparung von Heizkosten", text: "Die gewonnene Wärme kann für Warmwasser, Prozesswärme oder Heizsysteme genutzt werden. " },
            { title: "Platzsparend & nachhaltig", text: "Ein System für zwei Energieformen reduziert die benötigte Fläche und senkt CO₂-Emissionen." },
            { title: "Hohe Wirtschaftlichkeit", text: "Besonders rentabel für Unternehmen mit hohem Energiebedarf, da Strom- und Heizkosten gesenkt werden." },
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
        imgSrc: innovation2,
        title: "Agri-PV-Module",
        subtitle: "Doppelte Nutzung für Landwirtschaft und Solarenergie",
        text: "Agri-Photovoltaik (Agri-PV) kombiniert landwirtschaftliche Nutzung mit Solarstromerzeugung. Photovoltaik-Module werden über oder zwischen landwirtschaftlichen Kulturen installiert, sodass die Fläche sowohl für den Anbau von Lebensmitteln als auch für die Stromerzeugung genutzt wird. Diese innovative Technologie steigert die Flächeneffizienz und bietet sowohl ökologische als auch wirtschaftliche Vorteile. ",
        table: {
          plusColTitle: "Vorteile",
          pluses: [
            { title: "Doppelte Flächennutzung", text: "Landwirtschaftliche Produktion und Solarstromerzeugung auf derselben Fläche." },
            { title: "Schutz der Pflanzen", text: "Teilweise Beschattung schützt vor Hitze, Frost, Hagel und Trockenstress." },
            { title: "Geringerer Wasserverbrauch", text: "Reduzierte Verdunstung durch die Solarmodule sorgt für eine effizientere Wassernutzung." },
            { title: "Ertragssteigerung für Landwirte", text: "Durch die Einspeisung des erzeugten Stroms entstehen zusätzliche Einnahmequellen. " },
            { title: "Klimafreundliche Energie", text: "Senkung von CO₂-Emissionen durch nachhaltige Stromproduktion." }
          ],
          checkmarkColTitle: "Anwendungsbereiche",
          checkmarks: [
            { title: "Obst- & Weinbau", text: "Schutz vor extremer Sonneneinstrahlung, während die Reben oder Bäume weiterhin wachsen. " },
            { title: "Ackerbau", text: "Getreide, Gemüse und Hülsenfrüchte profitieren von besserer Wasserspeicherung und geringerer Hitzebelastung," },
            { title: "Viehzucht & Weideland", text: "Tiere finden Schutz unter den Modulen, während der Boden weiterhin als Weide genutzt wird." },
            { title: "Gewächshäuser & Sonderkulturen", text: "Kombination von Solarenergie und landwirtschaftlicher Produktion für maximale Effizienz." }
          ]
        },
        conclusion: {
          title: "Fazit",
          text: "Agri-PV ist eine zukunftsweisende Lösung, um erneuerbare Energien auszubauen und gleichzeitig die landwirtschaftliche Produktion zu sichern. Durch die intelligente Kombination von Energiegewinnung und Pflanzenanbau profitieren sowohl Landwirte als auch die Umwelt."
        }
      },
      {
        imgSrc: innovation3,
        title: "Systemintegration & Optimierung",
        subtitle: "Effiziente Energievernetzung für maximale Leistung",
        text: "In einer Welt steigender Energieanforderungen ist eine intelligente Vernetzung und Steuerung verschiedener Energiesysteme essenziell. Durch eine optimierte Integration von Photovoltaik, Speicherlösungen, Wärmerückgewinnung und Verbrauchern lassen sich Energieeffizienz und Kosteneinsparungen deutlich steigern. Unsere Lösungen passen bestehende Systeme intelligent an und sorgen für eine reibungslose, effiziente Zusammenarbeit aller Komponenten. ",
        table: {
          plusColTitle: "Vorteile",
          pluses: [
            { title: "Intelligente Steuerung & Lastmanagement", text: "Dynamische Anpassung des Energieverbrauchs, um Lastspitzen zu vermeiden und Betriebskosten zu senken. " },
            { title: "Optimierung bestehender Systeme", text: "Smarte Anpassungen und Automatisierung sorgen für eine höhere Effizienz ohne große Neuinvestitionen." },
            { title: "Nahtlose Integration", text: "Photovoltaik, Speicher, Wärmerückgewinnung und Verbraucher werden optimal aufeinander abgestimmt. " },
            { title: "Erhöhung der Eigenverbrauchsquote", text: "Maximale Nutzung von selbst erzeugter Energie zur Senkung der Netzabhängigkeit." },
            { title: "Datenbasierte Analyse & Monitoring", text: "Echtzeitüberwachung zur Identifikation von Einsparpotenzialen und zur langfristigen Effizienzsteigerung." }
          ],
          checkmarkColTitle: "Anwendungsbereiche",
          checkmarks: [
            { title: "Industrie & Gewerbe", text: "Optimiertes Energiemanagement für Produktionsbetriebe, Logistikzentren und energieintensive Unternehmen." },
            { title: "Gewerbeimmobilien & Quartiere", text: "Effiziente Steuerung von Photovoltaik, Speichern, Ladeinfrastruktur und Wärmesystemen. " },
            { title: "Landwirtschaft & Agrarbetriebe", text: "Smarte Kombination aus Agrivoltaik, Stromspeichern und Bewässerungssteuerung für nachhaltige Bewirtschaftung." },
            { title: "Wohngebäude & Smart Homes", text: "Intelligente Energienutzung durch Automatisierung und Eigenverbrauchsoptimierung." }
          ]
        },
        conclusion: {
          title: "Fazit",
          text: "Eine durchdachte Systemintegration & Optimierung macht bestehende Energiesysteme effizienter, nachhaltiger und wirtschaftlicher. Durch intelligente Steuerung, Lastmanagement und smarte Anpassungen helfen wir dabei, den Energieverbrauch zu optimieren und Betriebskosten zu senken – für eine nachhaltige und zukunftssichere Energieversorgung. "
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

export default InnovationPage 