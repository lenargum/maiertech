const AreaPageHero = ({ heading = "", title = "", text = "", image = "" }: { heading: string, title: string, text: string, image: string }) => {
    return (
        <section className="py-20 lg:pt-64 lg:pb-35 relative ">
            <div className="container mx-auto flex flex-col-reverse lg:items-center lg:flex-row">
                <div className="flex flex-col flex-1 max-w-2xl">
                    <h3 className="text-gradient-2 mb-4">{heading}</h3>
                    <h1 className="mb-6">{title}</h1>
                    <span>{text}</span>
                </div>
                <div className="flex-1 flex justify-center items-center max-h-[30rem] min-h-[26.25rem] self-stretch relative">
                    <img src={image} alt={title} className="-z-1 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full h-full aspect-square object-cover overflow-visible drop-shadow-[0_0_300px_#0096ED]" />
                </div>
            </div>
        </section>
    )
}

export default AreaPageHero;
