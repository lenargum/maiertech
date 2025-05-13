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
                <img src={darkMode ? historyBlackImage : historyImage} alt="History" className="max-w-[44rem] w-full aspect-square max-h-[28.75rem] lg:max-h-none" />
                {darkMode && <HistoryImageBgForDarkMode />}
            </div>
        </section>
    )
}

export default HistorySection;

const HistoryImageBgForDarkMode = () => (<svg
    viewBox="0 0 1720 1005"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 max-w-[44rem] w-full aspect-square max-h-[28.75rem] lg:max-h-none scale-200"
    style={{ zIndex: -1 }}
>
    <g opacity="0.3" filter="url(#filter0_f_1_70)">
        <circle cx={860} cy={503} r={360} fill="#794DE3" />
    </g>
    <defs>
        <filter
            id="filter0_f_1_70"
            x={0}
            y={-357}
            width={1720}
            height={1720}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            />
            <feGaussianBlur stdDeviation={250} result="effect1_foregroundBlur_1_70" />
        </filter>
    </defs>
</svg>
)
