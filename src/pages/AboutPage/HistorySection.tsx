import React from 'react';
import historyImage from '@/assets/logo-patterns/history.png';
import historyBlackImage from '@/assets/logo-patterns/history-black.png';
import { useTheme } from '@/contexts/ThemeContext';

const HistorySection: React.FC = () => {
    const { darkMode } = useTheme();
    return (
        <section className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-15 py-20 lg:py-30 relative">
            <div className="flex flex-col gap-10 max-w-[32.5rem]">
                <h2 className="text-gradient-2 dark:text-gradient">Unsere Erfolgsgeschichte</h2>
                <span>
                    Unsere Wurzeln reichen bis ins <strong>Jahr 2003 zurück</strong>, als wir aktiv in der <strong>Entwicklung, Planung und Umsetzung von Solarprojekten</strong> tätig wurden.
                    <br />
                    <br />
                    2010 entstand MaierTech mit der Vision, eine <strong>innovative und nachhaltige Plattform für intelligente Energielösungen</strong> zu schaffen. Seither setzen wir Maßstäbe in der <strong>technologischen Weiterentwicklung von Photovoltaiklösungen</strong>, der Optimierung von Energieprojekten und der Entwicklung von innovativen Speichersystemen. </span>
            </div>

            <div className="flex justify-center items-center flex-grow max-h-[28.75rem] relative">
                <img src={darkMode ? historyBlackImage : historyImage} alt="History" className="max-w-[44rem] w-full aspect-square max-h-[28.75rem] lg:max-h-none dark:drop-shadow-[0_0_300px_#794DE3]" />
            </div>
        </section>
    )
}

export default HistorySection;

