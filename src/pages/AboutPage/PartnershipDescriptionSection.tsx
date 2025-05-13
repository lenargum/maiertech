import React from 'react';

const PartnershipDescriptionSection: React.FC = () => {
    return (
        <section className="container mx-auto pt-15 pb-20 lg:py-[7.5rem]">
            {/* Partners */}
            <div className="flex flex-col lg:flex-row justify-between lg:items-stretch gap-10 lg:gap-2.5">
                <h2 className="text-gradient-2 lg:text-gradient lg:h3 lg:min-w-[21.5rem]">
                    Unsere Partnerschaften
                    <br />
                    & Synergien
                </h2>
                <span className="lg:max-w-[45vw]">
                    Wir arbeiten mit führenden Unternehmen und Forschungseinrichtungen zusammen, um innovative Energiekonzepte zu entwickeln. Unsere enge Verbindung zu AE Solar, einem weltweit anerkannten Tier-1-Modulhersteller, ermöglicht uns den Zugang zu modernsten PV-Technologien, die wir in unsere Projekte integrieren. Zusätzlich setzen wir auf ein starkes Partnernetzwerk für die Umsetzung und Skalierung nachhaltiger Projekte weltweit.
                </span>
            </div>
        </section>
    )
}

export default PartnershipDescriptionSection;
