import { Spotlight } from '@/components/ui/spotlight';
import React from 'react';
import aboutHeroImage from "@/assets/hero/about-hero.png"

const AboutHeroSection: React.FC = () => {

    return (
        <section
            className="pt-75 lg:pt-96 pb-20 lg:pb-52 relative"
        >
            <div
                className="lg:block hidden absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `url(${aboutHeroImage})`,
                    backgroundSize: 'cover', backgroundPosition: 'center',
                    zIndex: -1
                }}
            />
            <Spotlight />
            <div className="container mx-auto flex flex-col gap-20 drop-shadow-triple-white z-10">
                <div className="text-center flex flex-col gap-4 items-center justify-center">
                    <div className="flex flex-col items-center gap-2">
                        <h3 className="text-gradient">
                            MaierTech
                        </h3>
                        <h1 className="text-gradient">
                            Energie trifft Intelligenz
                        </h1>
                    </div>

                    <span>
                        MaierTech wurde auf der Basis langjähriger Erfahrung und fundierter Expertise in
                        <br />
                        der Photovoltaikbranche gegründet.
                    </span>
                </div>
            </div>
        </section>
    )
}

export default AboutHeroSection;
