import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"
import { Textarea } from "@/components/ui/Textarea"
import { CardSpotlight } from "@/components/ui/CardSpotlight"
import { useTheme } from "@/contexts/ThemeContext"
import ContactSectionBgPattern from "@/components/svg-patterns/ContactSectionBgPattern"
import ContactSectionRotatedBgPattern from "@/components/svg-patterns/ContactSectionRotatedBgPattern"
export const ContactPageSection = () => {
    const { darkMode } = useTheme();

    return (
        <section className="py-30 lg:pb-30 lg:pt-50 relative flex flex-col items-center gap-15" style={{ zIndex: 1 }}>
            <ContactSectionBgPattern onlyLeftHalf className="hidden lg:flex" style={{ zIndex: -1 }} />
            <ContactSectionRotatedBgPattern className="block lg:hidden" style={{ zIndex: -1 }} />
            <div className="max-w-[44.5rem] flex flex-col items-center mx-auto text-center">
                <h2 className="text-gradient-2 mb-6">Kontakt & Beratung</h2>
                <span>
                    Ob individuelle Lösungen oder Großprojekte —
                    <br />
                    Wir beraten Sie persönlich und kompetent.
                </span>
            </div>

            <div className="container mx-auto flex flex-col lg:flex-row gap-2.5 max-w-5xl">
                <CardSpotlight className="flex-1 self-center p-0.5 rounded-4xl overflow-hidden dark:border-2 dark:border-gray-700/20"
                    style={{
                        background: `radial-gradient(50% 50% at 50% 50%, ${darkMode ? "#000000" : "#FFFFFF"} 0%, rgba(255, 255, 255, 0) 100%), rgba(255, 255, 255, 0.1)`,
                        boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.05), 0px 40px 60px rgba(0, 0, 0, 0.05)',
                        backdropFilter: "blur(5px)",
                    }}
                >
                    <div className="p-10 flex flex-col">
                        <h3 className="mb-1 drop-shadow-triple-white">
                            Direktes Kontaktformular
                        </h3>
                        <span className="mb-5 drop-shadow-triple-white">
                            Ob individuelle Lösungen oder Großprojekte —
                            <br />
                            wir beraten Sie persönlich und kompetent.
                        </span>
                        <form className="">
                            <Input
                                type="text"
                                placeholder="Ihr Name"
                                className="drop-shadow-triple-white mb-1"
                            />
                            <Input
                                type="email"
                                placeholder="Ihr e-mail"
                                className="drop-shadow-triple-white"
                            />
                            <Textarea
                                placeholder="message"
                                className="drop-shadow-triple-white resize-none"
                            />
                            <Button variant="filled" className="w-full mt-5">
                                Schicken
                            </Button>
                        </form>
                    </div>
                </CardSpotlight>

                <div className="flex-1 p-10 relative">
                    <h3 className="mb-4">
                        Unser Standort
                    </h3>

                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="flex-1 flex flex-col gap-5">
                            <h4>Deutschland</h4>
                            <span>
                                MaierTech Solutions GmbH
                                <br />
                                Messerschmittring 54,
                                <br />
                                86343 Königsbrunn,
                                <br />
                                Germany
                            </span>
                        </div>

                        <div className="flex-1 flex flex-col gap-5">
                            <h4>Türkei</h4>
                            <span>
                                MaierTech Solutions GmbH
                                <br />
                                Messerschmittring 54,
                                <br />
                                86343 Königsbrunn,
                                <br />
                                Türkei
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 mt-6">
                        <div className="flex-1 flex flex-col gap-2">
                            <h3>Email</h3>
                            <a href="mailto:info@maiertech.energy"><span className="font-semibold">info@maiertech.energy</span></a>
                        </div>

                        <div className="flex-1 flex flex-col gap-2">
                            <h3>Phone</h3>
                            <a href="tel:+491732845289"><span className="font-semibold">+49 173 28 45 289</span></a>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 mt-6">
                        <div className="flex-1 flex flex-col gap-2">
                            <h3>Socials</h3>
                            <div className="flex gap-2.5">
                                <a href="#" target="_blank" rel="noopener noreferrer"><LinkedInIcon className="hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer" /></a>
                                <a href="#" target="_blank" rel="noopener noreferrer"><FacebookIcon className="hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer" /></a>
                                <a href="#" target="_blank" rel="noopener noreferrer"><InstagramIcon className="hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const LinkedInIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M8.51607 28H5.25357C4.78214 28 4.39643 27.6143 4.39643 27.1429V12.8339C4.39643 12.3625 4.78214 11.9768 5.25357 11.9768H8.51607C8.9875 11.9768 9.37321 12.3625 9.37321 12.8339V27.1429C9.37321 27.6143 8.9875 28 8.51607 28ZM6.88214 9.79107C5.29107 9.79107 4 8.47321 4 6.88214C4 5.29107 5.29107 4 6.88214 4C8.47321 4 9.76429 5.29107 9.76429 6.88214C9.76429 8.47321 8.47321 9.79107 6.88214 9.79107ZM23.8857 28C23.4143 28 23.0286 27.6143 23.0286 27.1429V20.2C23.0286 18.3411 22.9911 15.9571 20.4411 15.9571C17.8536 15.9571 17.4571 17.9768 17.4571 20.0661V27.1429C17.4571 27.6143 17.0714 28 16.6 28H13.3429C12.8714 28 12.4857 27.6143 12.4857 27.1429V12.8339C12.4857 12.3625 12.8714 11.9768 13.3429 11.9768H16.4018C16.8732 11.9768 17.2589 12.3625 17.2589 12.8339V14.1625H17.3286C17.9929 12.9036 19.6161 11.575 22.0375 11.575C27.0732 11.575 28 14.8911 28 19.1982V27.1429C28 27.6143 27.6143 28 27.1429 28H23.8857Z" fill="currentColor" />
    </svg>
)

const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M20.6318 16.8638L21.0394 14.0235C21.1051 13.5681 20.7764 13.1596 20.3469 13.1596H17.2746V10.3427C17.2746 9.15493 17.818 7.9953 19.5624 7.9953H20.6318C21.0175 7.9953 21.333 7.65728 21.333 7.24413V4.94366C21.333 4.56808 21.0744 4.24883 20.7238 4.19718C20.119 4.11268 19.1416 4 18.1949 4C14.9911 4 12.8962 6.07981 12.8962 9.84507V13.1549H10.0342C9.64857 13.1549 9.33301 13.493 9.33301 13.9061V16.7465C9.33301 17.1596 9.64857 17.4977 10.0342 17.4977H12.8962V27.2488C12.8962 27.662 13.2118 28 13.5974 28H16.5777C16.9634 28 17.279 27.662 17.279 27.2488V17.4977H19.9481C20.2811 17.4977 20.5792 17.23 20.6318 16.8638Z" fill="currentColor" />
    </svg>
)

const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M15.9999 9.05984C12.1722 9.05984 9.0589 12.1738 9.0589 16.0023C9.0589 19.8307 12.1722 22.9447 15.9999 22.9447C19.8276 22.9447 22.941 19.8307 22.941 16.0023C22.941 12.1738 19.8276 9.05984 15.9999 9.05984ZM20.161 16.0023C20.161 18.2946 18.2978 20.1641 15.9999 20.1641C13.7021 20.1641 11.8389 18.3005 11.8389 16.0023C11.8389 13.704 13.7021 11.8404 15.9999 11.8404C18.2978 11.8404 20.161 13.7099 20.161 16.0023Z"
            fill="currentColor"
        />
        <path
            d="M29.2391 10.5781C29.1201 8.06552 28.4474 6.32693 27.0604 4.93964C25.6793 3.5583 23.9411 2.8855 21.423 2.76046C19.2443 2.63543 12.7556 2.63543 10.5769 2.76046C8.07072 2.87954 6.33248 3.55235 4.9395 4.93369C4.01086 5.86252 2.92148 7.33912 2.76075 10.5722C2.63574 12.7513 2.63574 19.2413 2.76075 21.4204C2.87981 23.933 3.55248 25.6776 4.94546 27.0589C6.33248 28.4402 8.07072 29.1131 10.5828 29.2381C11.6722 29.2976 13.8391 29.3334 16.0059 29.3334C18.1727 29.3334 20.3396 29.3036 21.429 29.2381C23.9411 29.119 25.6853 28.4462 27.0663 27.0589C28.4474 25.6776 29.1201 23.939 29.2451 21.4204C29.3642 19.2472 29.3642 12.7573 29.2391 10.5781ZM26.5484 16.937C26.5723 19.0388 26.602 22.2183 26.0305 23.6532C25.596 24.7428 24.7507 25.5883 23.6553 26.0289C22.2148 26.6004 19.0419 26.5707 16.9405 26.5469C16.5952 26.5409 16.2738 26.5409 16.0059 26.5409C15.738 26.5409 15.4285 26.5469 15.0892 26.5469C12.9818 26.5647 9.7911 26.6004 8.3505 26.0289C7.26113 25.5942 6.41582 24.7487 5.9753 23.6532C5.40383 22.2123 5.43359 19.0329 5.45741 16.937C5.46336 16.5917 5.46336 16.2702 5.46336 16.0023C5.46336 15.7343 5.45741 15.4247 5.45741 15.0853C5.43955 12.9776 5.40383 9.78623 5.9753 8.34536C6.40986 7.25577 7.25517 6.41029 8.3505 5.96969C9.7911 5.3981 12.9699 5.42787 15.0653 5.45169C15.4106 5.45764 15.7321 5.45764 15.9999 5.45764C16.2678 5.45764 16.5774 5.45764 16.9167 5.45169C19.024 5.43383 22.2148 5.3981 23.6553 5.96969C24.7447 6.40434 25.59 7.24981 26.0305 8.34536C26.602 9.78623 26.5723 12.9657 26.5484 15.0615C26.5425 15.4068 26.5425 15.7284 26.5425 15.9963C26.5425 16.2761 26.5484 16.5917 26.5484 16.937Z"
            fill="currentColor"
        />
        <path
            d="M23.0065 7.21409C22.0243 7.21409 21.2266 8.01193 21.2266 8.99435C21.2266 9.97676 22.0243 10.7746 23.0065 10.7746C23.9887 10.7746 24.7864 9.97676 24.7864 8.99435C24.7864 8.01193 23.9887 7.21409 23.0065 7.21409Z"
            fill="currentColor"
        />
        <path
            d="M15.9999 9.05984C12.1722 9.05984 9.0589 12.1738 9.0589 16.0023C9.0589 19.8307 12.1722 22.9447 15.9999 22.9447C19.8276 22.9447 22.941 19.8307 22.941 16.0023C22.941 12.1738 19.8276 9.05984 15.9999 9.05984ZM20.161 16.0023C20.161 18.2946 18.2978 20.1641 15.9999 20.1641C13.7021 20.1641 11.8389 18.3005 11.8389 16.0023C11.8389 13.704 13.7021 11.8404 15.9999 11.8404C18.2978 11.8404 20.161 13.7099 20.161 16.0023Z"
            stroke="currentColor"
            strokeWidth="0.3"
        />
        <path
            d="M29.2391 10.5781C29.1201 8.06552 28.4474 6.32693 27.0604 4.93964C25.6793 3.5583 23.9411 2.8855 21.423 2.76046C19.2443 2.63543 12.7556 2.63543 10.5769 2.76046C8.07072 2.87954 6.33248 3.55235 4.9395 4.93369C4.01086 5.86252 2.92148 7.33912 2.76075 10.5722C2.63574 12.7513 2.63574 19.2413 2.76075 21.4204C2.87981 23.933 3.55248 25.6776 4.94546 27.0589C6.33248 28.4402 8.07072 29.1131 10.5828 29.2381C11.6722 29.2976 13.8391 29.3334 16.0059 29.3334C18.1727 29.3334 20.3396 29.3036 21.429 29.2381C23.9411 29.119 25.6853 28.4462 27.0663 27.0589C28.4474 25.6776 29.1201 23.939 29.2451 21.4204C29.3642 19.2472 29.3642 12.7573 29.2391 10.5781ZM26.5484 16.937C26.5723 19.0388 26.602 22.2183 26.0305 23.6532C25.596 24.7428 24.7507 25.5883 23.6553 26.0289C22.2148 26.6004 19.0419 26.5707 16.9405 26.5469C16.5952 26.5409 16.2738 26.5409 16.0059 26.5409C15.738 26.5409 15.4285 26.5469 15.0892 26.5469C12.9818 26.5647 9.7911 26.6004 8.3505 26.0289C7.26113 25.5942 6.41582 24.7487 5.9753 23.6532C5.40383 22.2123 5.43359 19.0329 5.45741 16.937C5.46336 16.5917 5.46336 16.2702 5.46336 16.0023C5.46336 15.7343 5.45741 15.4247 5.45741 15.0853C5.43955 12.9776 5.40383 9.78623 5.9753 8.34536C6.40986 7.25577 7.25517 6.41029 8.3505 5.96969C9.7911 5.3981 12.9699 5.42787 15.0653 5.45169C15.4106 5.45764 15.7321 5.45764 15.9999 5.45764C16.2678 5.45764 16.5774 5.45764 16.9167 5.45169C19.024 5.43383 22.2148 5.3981 23.6553 5.96969C24.7447 6.40434 25.59 7.24981 26.0305 8.34536C26.602 9.78623 26.5723 12.9657 26.5484 15.0615C26.5425 15.4068 26.5425 15.7284 26.5425 15.9963C26.5425 16.2761 26.5484 16.5917 26.5484 16.937Z"
            stroke="currentColor"
            strokeWidth="0.3"
        />
        <path
            d="M23.0065 7.21409C22.0243 7.21409 21.2266 8.01193 21.2266 8.99435C21.2266 9.97676 22.0243 10.7746 23.0065 10.7746C23.9887 10.7746 24.7864 9.97676 24.7864 8.99435C24.7864 8.01193 23.9887 7.21409 23.0065 7.21409Z"
            stroke="currentColor"
            strokeWidth="0.3"
        />
    </svg>


)





