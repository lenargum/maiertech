import React from 'react';

const KeypointsSection: React.FC = () => {
    return (
        <section className="container mx-auto flex flex-col py-20 lg:py-30 gap-15 relative">
            <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6">
                <h3 className="text-gradient-2 dark:text-gradient">Maiertech verbindet <br /> Innovation & Erfahrung</h3>
                <span className="max-w-[44rem]">MaierTech vereint das Beste aus zwei Welten: langjährige Erfahrung und zukunftsweisende Technologie. Durch unser technisches Know-how, starke Partnerschaften und den Ausbau neuer Technologien treiben wir die Energiewende aktiv voran.</span>
            </div>

            <div className="flex flex-col lg:flex-row gap-16 lg:gap-10 pt-10">
                <div className='flex gap-6 flex-1'>
                    <div className='shrink-0'>
                        <SvgPattern1 />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h4>Technologische Innovationen</h4>
                        <span>
                            Durch enge Zusammenarbeit mit AESOLAR und führenden Technologiepartnern entwickeln wir fortschrittliche PV-Lösungen.
                        </span>
                    </div>
                </div>

                <div className='w-full lg:w-px h-px lg:h-40 bg-[#EDE8FB] dark:bg-[#212121] shrink-0 self-center' />

                <div className='flex gap-6 flex-1'>
                    <div className='shrink-0'>
                        <SvgPattern2 />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h4>Langjährige Erfahrung im PV-Anlagenbau</h4>
                        <span>
                            Seit 20 Jahren realisieren wir Solar- und Hybridprojekte und verbessern kontinuierlich Energiesysteme.
                        </span>
                    </div>
                </div>

                <div className='w-full lg:w-px h-px lg:h-40 bg-[#EDE8FB] dark:bg-[#212121] shrink-0 self-center' />

                <div className='flex gap-6 flex-1'>
                    <div className='shrink-0'>
                        <SvgPattern3 />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h4>Globale Marktpräsenz & Systemintegration</h4>
                        <span>
                            Von der Projektplanung bis zur Netzanbindung — wir schaffen effiziente, nachhaltige Energielösungen.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default KeypointsSection;

const SvgPattern1 = () => {
    return (
        <svg
            width={100}
            height={100}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                opacity="0.5"
                d="M36.5853 22.1305L28.252 27.3023C24.1837 29.8273 21.5671 31.4604 19.6605 32.9206C17.8822 34.2825 17.1586 35.1764 16.7101 35.9958C16.3117 36.7235 16.0628 37.5159 15.8998 38.3335C15.5314 40.1801 14.0822 41.6667 12.1992 41.6667C10.1655 41.6667 8.50403 39.9558 8.80613 37.9447C9.11825 35.8668 9.63642 34.1663 10.4966 32.5948C12.66 28.6426 16.6122 26.1897 24.5168 21.2839L32.8501 16.112C41.2057 10.9262 45.3836 8.33337 50 8.33337C54.6164 8.33337 58.7942 10.9262 67.1498 16.112L75.4832 21.2839C83.3877 26.1897 87.34 28.6426 89.5033 32.5948C91.6666 36.547 91.6666 41.3146 91.6666 50.8497V57.1873C91.6666 73.4411 91.6666 81.5679 86.7851 86.6173C82.2855 91.2715 75.2583 91.6358 61.8804 91.6643C59.9244 91.6684 58.3333 90.081 58.3333 88.125C58.3333 86.169 59.9194 84.585 61.8754 84.5803C68.0037 84.5658 72.3157 84.4828 75.6455 84.0197C79.3539 83.504 80.7764 82.6416 81.6925 81.694C82.641 80.7129 83.5185 79.1428 84.0322 75.191C84.5692 71.0592 84.5833 65.508 84.5833 57.1873V50.8497C84.5833 45.951 84.5761 42.7619 84.3439 40.2913C84.1253 37.964 83.7449 36.827 83.2899 35.9958C82.8413 35.1764 82.1177 34.2825 80.3394 32.9206C78.4328 31.4604 75.8163 29.8273 71.7479 27.3023L63.4146 22.1304C59.1132 19.4609 56.3368 17.748 54.075 16.6481C51.9582 15.6187 50.8523 15.4167 50 15.4167C49.1476 15.4167 48.0418 15.6187 45.925 16.6481C43.6631 17.748 40.8867 19.4609 36.5853 22.1305Z"
                fill="url(#paint0_linear_358_6330)"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.33325 51.0416C8.33325 49.3157 9.73346 47.9166 11.4607 47.9166C33.9149 47.9166 52.1177 66.1051 52.1177 88.5416C52.1177 90.2675 50.7175 91.6666 48.9902 91.6666C47.263 91.6666 45.8628 90.2675 45.8628 88.5416C45.8628 69.5568 30.4604 54.1666 11.4607 54.1666C9.73346 54.1666 8.33325 52.7675 8.33325 51.0416ZM11.4607 60.4166C9.73346 60.4166 8.33325 61.8157 8.33325 63.5416C8.33325 65.2675 9.73346 66.6666 11.4607 66.6666C23.5515 66.6666 33.3529 76.4604 33.3529 88.5416C33.3529 90.2675 34.7531 91.6666 36.4804 91.6666C38.2076 91.6666 39.6079 90.2675 39.6079 88.5416C39.6079 73.0086 27.006 60.4166 11.4607 60.4166ZM8.33325 76.0416C8.33325 74.3157 9.73346 72.9166 11.4607 72.9166C20.097 72.9166 27.098 79.9122 27.098 88.5416C27.098 90.2675 25.6978 91.6666 23.9706 91.6666C22.2433 91.6666 20.8431 90.2675 20.8431 88.5416C20.8431 83.3639 16.6425 79.1666 11.4607 79.1666C9.73346 79.1666 8.33325 77.7675 8.33325 76.0416Z"
                fill="url(#paint1_linear_358_6330)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_358_6330"
                    x1="91.6666"
                    y1="8.33337"
                    x2="-7.62175"
                    y2="39.5849"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#0096ED" />
                    <stop offset={1} stopColor="#00DCBB" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_358_6330"
                    x1="52.1177"
                    y1="47.9166"
                    x2="-0.267703"
                    y2="64.5047"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#0096ED" />
                    <stop offset={1} stopColor="#00DCBB" />
                </linearGradient>
            </defs>
        </svg>
    )
}

const SvgPattern2 = () => {
    return (
        <svg
            width={101}
            height={100}
            viewBox="0 0 101 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g opacity="0.5">
                <path
                    d="M58.6665 11.4584C66.6116 11.4584 72.256 11.465 76.538 12.0407C80.73 12.6043 83.1452 13.6613 84.9086 15.4246C86.672 17.188 87.7289 19.6032 88.2925 23.7952C88.8682 28.0772 88.8748 33.7216 88.8748 41.6667C88.8748 43.3926 90.274 44.7917 91.9998 44.7917C93.7257 44.7917 95.1248 43.3926 95.1248 41.6667V41.4317C95.1249 33.7743 95.125 27.7092 94.4868 22.9625C93.83 18.0774 92.4462 14.1234 89.328 11.0052C86.2098 7.88704 82.2559 6.50322 77.3708 5.84644C72.6241 5.20826 66.5589 5.20831 58.9016 5.20838H58.6665C56.9406 5.20838 55.5415 6.60749 55.5415 8.33338C55.5415 10.0593 56.9406 11.4584 58.6665 11.4584Z"
                    fill="url(#paint0_linear_1974_1549)"
                />
                <path
                    d="M41.7648 5.20838H41.9998C43.7257 5.20838 45.1248 6.60749 45.1248 8.33338C45.1248 10.0593 43.7257 11.4584 41.9998 11.4584C34.0548 11.4584 28.4103 11.465 24.1284 12.0407C19.9363 12.6043 17.5211 13.6613 15.7578 15.4246C13.9944 17.188 12.9374 19.6032 12.3738 23.7952C11.7981 28.0772 11.7915 33.7216 11.7915 41.6667C11.7915 43.3926 10.3924 44.7917 8.66651 44.7917C6.94062 44.7917 5.54151 43.3926 5.54151 41.6667V41.4316C5.54144 33.7743 5.54139 27.7092 6.17957 22.9625C6.83635 18.0774 8.22017 14.1234 11.3384 11.0052C14.4565 7.88704 18.4105 6.50322 23.2956 5.84644C28.0423 5.20826 34.1075 5.20831 41.7648 5.20838Z"
                    fill="url(#paint1_linear_1974_1549)"
                />
                <path
                    d="M91.9998 55.2084C93.7257 55.2084 95.1248 56.6075 95.1248 58.3334V58.5684C95.1249 66.2258 95.125 72.2909 94.4868 77.0376C93.83 81.9227 92.4462 85.8767 89.328 88.9949C86.2098 92.1131 82.2559 93.4969 77.3708 94.1537C72.624 94.7918 66.5589 94.7918 58.9016 94.7917H58.6665C56.9406 94.7917 55.5415 93.3926 55.5415 91.6667C55.5415 89.9408 56.9406 88.5417 58.6665 88.5417C66.6116 88.5417 72.256 88.5351 76.538 87.9594C80.73 87.3958 83.1452 86.3388 84.9086 84.5755C86.672 82.8121 87.7289 80.3969 88.2925 76.2048C88.8682 71.9229 88.8748 66.2785 88.8748 58.3334C88.8748 56.6075 90.274 55.2084 91.9998 55.2084Z"
                    fill="url(#paint2_linear_1974_1549)"
                />
                <path
                    d="M11.7915 58.3334C11.7915 56.6075 10.3924 55.2084 8.66651 55.2084C6.94062 55.2084 5.54151 56.6075 5.54151 58.3334V58.5685C5.54144 66.2258 5.54139 72.2909 6.17957 77.0376C6.83635 81.9227 8.22017 85.8767 11.3384 88.9949C14.4565 92.1131 18.4105 93.4969 23.2956 94.1537C28.0423 94.7918 34.1075 94.7918 41.7648 94.7917H41.9998C43.7257 94.7917 45.1248 93.3926 45.1248 91.6667C45.1248 89.9408 43.7257 88.5417 41.9998 88.5417C34.0548 88.5417 28.4103 88.5351 24.1284 87.9594C19.9363 87.3958 17.5211 86.3388 15.7578 84.5755C13.9944 82.8121 12.9374 80.3969 12.3738 76.2048C11.7981 71.9229 11.7915 66.2785 11.7915 58.3334Z"
                    fill="url(#paint3_linear_1974_1549)"
                />
            </g>
            <path
                d="M23.3632 23.0301C21.1665 25.2268 21.1665 28.7623 21.1665 35.8334C21.1665 40.5474 21.1665 42.9044 22.631 44.3689C24.0954 45.8334 26.4525 45.8334 31.1665 45.8334H36.1665C40.8806 45.8334 43.2376 45.8334 44.702 44.3689C46.1665 42.9044 46.1665 40.5474 46.1665 35.8334V30.8334C46.1665 26.1193 46.1665 23.7623 44.702 22.2978C43.2376 20.8334 40.8806 20.8334 36.1665 20.8334C29.0954 20.8334 25.5599 20.8334 23.3632 23.0301Z"
                fill="url(#paint4_linear_1974_1549)"
            />
            <path
                d="M23.3632 76.97C21.1665 74.7733 21.1665 71.2378 21.1665 64.1667C21.1665 59.4527 21.1665 57.0956 22.631 55.6312C24.0954 54.1667 26.4525 54.1667 31.1665 54.1667H36.1665C40.8806 54.1667 43.2376 54.1667 44.702 55.6312C46.1665 57.0956 46.1665 59.4527 46.1665 64.1667V69.1667C46.1665 73.8808 46.1665 76.2378 44.702 77.7022C43.2376 79.1667 40.8806 79.1667 36.1666 79.1667C29.0956 79.1667 25.5599 79.1667 23.3632 76.97Z"
                fill="url(#paint5_linear_1974_1549)"
            />
            <path
                d="M54.4998 30.8334C54.4998 26.1193 54.4998 23.7623 55.9643 22.2978C57.4288 20.8334 59.7858 20.8334 64.4998 20.8334C71.5709 20.8334 75.1064 20.8334 77.3031 23.0301C79.4998 25.2268 79.4998 28.7623 79.4998 35.8334C79.4998 40.5474 79.4998 42.9044 78.0354 44.3689C76.5709 45.8334 74.2139 45.8334 69.4998 45.8334H64.4998C59.7858 45.8334 57.4288 45.8334 55.9643 44.3689C54.4998 42.9044 54.4998 40.5474 54.4998 35.8334V30.8334Z"
                fill="url(#paint6_linear_1974_1549)"
            />
            <path
                d="M55.9643 77.7022C54.4998 76.2378 54.4998 73.8808 54.4998 69.1667V64.1667C54.4998 59.4527 54.4998 57.0956 55.9643 55.6312C57.4288 54.1667 59.7858 54.1667 64.4998 54.1667H69.4998C74.2139 54.1667 76.5709 54.1667 78.0354 55.6312C79.4998 57.0956 79.4998 59.4527 79.4998 64.1667C79.4998 71.2377 79.4998 74.7733 77.3031 76.97C75.1064 79.1667 71.5709 79.1667 64.4999 79.1667C59.7859 79.1667 57.4288 79.1667 55.9643 77.7022Z"
                fill="url(#paint7_linear_1974_1549)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_1974_1549"
                    x1="95.1248"
                    y1="5.20837"
                    x2="-12.0715"
                    y2="39.126"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#0096ED" />
                    <stop offset={1} stopColor="#00DCBB" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_1974_1549"
                    x1="95.1248"
                    y1="5.20837"
                    x2="-12.0715"
                    y2="39.126"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#0096ED" />
                    <stop offset={1} stopColor="#00DCBB" />
                </linearGradient>
                <linearGradient
                    id="paint2_linear_1974_1549"
                    x1="95.1248"
                    y1="5.20837"
                    x2="-12.0715"
                    y2="39.126"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#0096ED" />
                    <stop offset={1} stopColor="#00DCBB" />
                </linearGradient>
                <linearGradient
                    id="paint3_linear_1974_1549"
                    x1="95.1248"
                    y1="5.20837"
                    x2="-12.0715"
                    y2="39.126"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#0096ED" />
                    <stop offset={1} stopColor="#00DCBB" />
                </linearGradient>
                <linearGradient
                    id="paint4_linear_1974_1549"
                    x1="79.4998"
                    y1="20.8334"
                    x2="9.69758"
                    y2="42.9192"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#0096ED" />
                    <stop offset={1} stopColor="#00DCBB" />
                </linearGradient>
                <linearGradient
                    id="paint5_linear_1974_1549"
                    x1="79.4998"
                    y1="20.8334"
                    x2="9.69758"
                    y2="42.9192"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#0096ED" />
                    <stop offset={1} stopColor="#00DCBB" />
                </linearGradient>
                <linearGradient
                    id="paint6_linear_1974_1549"
                    x1="79.4998"
                    y1="20.8334"
                    x2="9.69758"
                    y2="42.9192"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#0096ED" />
                    <stop offset={1} stopColor="#00DCBB" />
                </linearGradient>
                <linearGradient
                    id="paint7_linear_1974_1549"
                    x1="79.4998"
                    y1="20.8334"
                    x2="9.69758"
                    y2="42.9192"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#0096ED" />
                    <stop offset={1} stopColor="#00DCBB" />
                </linearGradient>
            </defs>
        </svg>
    )
}

const SvgPattern3 = () => {
    return (
        <svg width="101" height="100" viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
                <path d="M30.6858 31.5096C31.9798 30.3675 32.1029 28.3927 30.9609 27.0988C29.8188 25.8048 27.844 25.6816 26.55 26.8237C18.9862 33.4996 14.208 43.2771 14.208 54.1668C14.208 55.8927 15.6071 57.2918 17.333 57.2918C19.0589 57.2918 20.458 55.8927 20.458 54.1668C20.458 45.1447 24.4092 37.0494 30.6858 31.5096Z" fill="url(#paint0_linear_1974_6251)" />
                <path d="M74.7827 26.8237C73.4887 25.6816 71.5139 25.8048 70.3718 27.0988C69.2297 28.3927 69.3529 30.3675 70.6469 31.5096C76.9235 37.0494 80.8747 45.1447 80.8747 54.1668C80.8747 55.8927 82.2738 57.2918 83.9997 57.2918C85.7256 57.2918 87.1247 55.8927 87.1247 54.1668C87.1247 43.2771 82.3465 33.4996 74.7827 26.8237Z" fill="url(#paint1_linear_1974_6251)" />
                <path d="M43.1119 83.4236C41.4405 82.9934 39.7368 83.9996 39.3066 85.671C38.8765 87.3424 39.8827 89.0461 41.5541 89.4763C44.4699 90.2268 47.5239 90.6251 50.6663 90.6251C53.8088 90.6251 56.8628 90.2268 59.7786 89.4763C61.45 89.0461 62.4562 87.3424 62.026 85.671C61.5958 83.9996 59.8922 82.9934 58.2207 83.4236C55.8096 84.0442 53.2789 84.3751 50.6663 84.3751C48.0538 84.3751 45.5231 84.0442 43.1119 83.4236Z" fill="url(#paint2_linear_1974_6251)" />
            </g>
            <path d="M38.1663 25C38.1663 31.9036 43.7628 37.5 50.6663 37.5C57.5699 37.5 63.1663 31.9036 63.1663 25C63.1663 18.0964 57.5699 12.5 50.6663 12.5C43.7628 12.5 38.1663 18.0964 38.1663 25Z" fill="url(#paint3_linear_1974_6251)" />
            <path d="M11.083 75C11.083 81.9036 16.6794 87.5 23.583 87.5C30.4866 87.5 36.083 81.9036 36.083 75C36.083 68.0964 30.4866 62.5 23.583 62.5C16.6794 62.5 11.083 68.0964 11.083 75Z" fill="url(#paint4_linear_1974_6251)" />
            <path d="M77.7497 87.5C70.8461 87.5 65.2497 81.9036 65.2497 75C65.2497 68.0964 70.8461 62.5 77.7497 62.5C84.6532 62.5 90.2497 68.0964 90.2497 75C90.2497 81.9036 84.6532 87.5 77.7497 87.5Z" fill="url(#paint5_linear_1974_6251)" />
            <defs>
                <linearGradient id="paint0_linear_1974_6251" x1="87.1247" y1="26.0416" x2="1.99989" y2="56.4509" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0096ED" />
                    <stop offset="1" stopColor="#00DCBB" />
                </linearGradient>
                <linearGradient id="paint1_linear_1974_6251" x1="87.1247" y1="26.0416" x2="1.99989" y2="56.4509" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0096ED" />
                    <stop offset="1" stopColor="#00DCBB" />
                </linearGradient>
                <linearGradient id="paint2_linear_1974_6251" x1="87.1247" y1="26.0416" x2="1.99989" y2="56.4509" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0096ED" />
                    <stop offset="1" stopColor="#00DCBB" />
                </linearGradient>
                <linearGradient id="paint3_linear_1974_6251" x1="90.2497" y1="12.5" x2="-3.50761" y2="43.8135" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0096ED" />
                    <stop offset="1" stopColor="#00DCBB" />
                </linearGradient>
                <linearGradient id="paint4_linear_1974_6251" x1="90.2497" y1="12.5" x2="-3.50761" y2="43.8135" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0096ED" />
                    <stop offset="1" stopColor="#00DCBB" />
                </linearGradient>
                <linearGradient id="paint5_linear_1974_6251" x1="90.2497" y1="12.5" x2="-3.50761" y2="43.8135" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0096ED" />
                    <stop offset="1" stopColor="#00DCBB" />
                </linearGradient>
            </defs>
        </svg>

    )
}

