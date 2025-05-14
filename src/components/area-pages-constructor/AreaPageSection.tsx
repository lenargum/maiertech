export interface IAreaPageSection {
    imgSrc: string;
    title: string;
    subtitle: string;
    text: string;
    table: {
        plusColTitle: string;
        pluses: { title: string, text: string }[];
        checkmarkColTitle: string;
        checkmarks: { title: string, text: string }[];
    },
    conclusion?: {
        title: string;
        text: string;
    }
}

const AreaPageSection = ({ title = "", sections = [] }: { title: string, sections: IAreaPageSection[] }) => {
    return (
        <section className="container mx-auto flex flex-col lg:flex-row lg:gap-2.5 gap-10 pt-20 mb-20 border-b border-[#EBEBEB] bg:border-[#2A2A2A]">
            <div className="w-2xs shrink-0">
                <h3 className="lg:text-gradient text-gradient-2 max-w-3xs">{title}</h3>
            </div>

            <div className="flex flex-col gap-20 lg:gap-30 pb-30">
                {sections.map((section, index) => (
                    <div key={index} className="flex flex-col gap-10">
                        <img src={section.imgSrc} alt={section.title} className="w-full h-[440px] object-cover rounded-4xl bg-[#CED2D4]" />
                        <div className="px-8">
                            <h3 className="mb-1">{section.title}</h3>
                            <h4 className="mb-4 text-gradient">{section.subtitle}</h4>
                            <span>{section.text}</span>
                        </div>

                        <div className="border-2 border-[#EDE8FB] dark:border-[#1A1A1A] rounded-4xl px-4 py-8 lg:p-8 flex flex-col lg:flex-row gap-10">
                            <div className="flex-1 flex flex-col gap-5">
                                <h4 className="text-gradient">{section.table.plusColTitle}</h4>
                                <div className="flex flex-col gap-5">
                                    {section.table.pluses.map(plus => (
                                        <div key={plus.title} className="flex gap-2.5">
                                            <div className="shrink-0 pt-[7px]"><BulletPointPlus /></div>
                                            <div className="flex flex-col">
                                                <span style={{ fontWeight: 600 }}>{plus.title}</span>
                                                <span>{plus.text}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col gap-5">
                                <h4 className="text-gradient">{section.table.checkmarkColTitle}</h4>
                                <div className="flex flex-col gap-5">
                                    {section.table.checkmarks.map(checkmark => (
                                        <div key={checkmark.title} className="flex gap-2.5">
                                            <div className="shrink-0 pt-[7px]"><BulletPointCheckmark /></div>
                                            <div className="flex flex-col">
                                                <span style={{ fontWeight: 600 }}>{checkmark.title}</span>
                                                <span>{checkmark.text}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {section.conclusion && (
                            <div className="px-8">
                                <h4 className="mb-2 text-gradient">{section.conclusion.title}</h4>
                                <span>{section.conclusion.text}</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default AreaPageSection;

const BulletPointPlus = () => (
    <svg
        width={12}
        height={12}
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M7 1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1V5H1C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7H5V11C5 11.5523 5.44771 12 6 12C6.55228 12 7 11.5523 7 11V7H11C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5H7V1Z"
            fill="url(#paint0_linear_2005_1359)"
        />
        <defs>
            <linearGradient
                id="paint0_linear_2005_1359"
                x1={12}
                y1={0}
                x2="-2.35932"
                y2="4.54338"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#0096ED" />
                <stop offset={1} stopColor="#00DCBB" />
            </linearGradient>
        </defs>
    </svg>
)

const BulletPointCheckmark = () => (
    <svg
        width={13}
        height={12}
        viewBox="0 0 13 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M2.5 6L5.5 9L11.5 3"
            stroke="url(#paint0_linear_2005_1384)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <defs>
            <linearGradient
                id="paint0_linear_2005_1384"
                x1="11.5"
                y1={3}
                x2="1.83045"
                y2="7.58926"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#0096ED" />
                <stop offset={1} stopColor="#00DCBB" />
            </linearGradient>
        </defs>
    </svg>
)
