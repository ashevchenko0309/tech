import React from "react";
import Image from "next/image";
import DigitalVisionIcon from "../../../public/images/digital-vision-icon.svg";
import Digital from "../../../public/images/digital.webp";
import Parallax from "@/components/Parallax/Parallax";

const DigitalVision = () => {
    return (
        <div className="digital relative rounded-t-4xl px-8 pb-12 pt-6 md:pb-40 md:pt-20" id="about">
            <div className="flex flex-row justify-center gap-10 text-center xl:gap-20">
                <Image src={DigitalVisionIcon} alt="digital vision" className="hidden md:block md:w-24 xl:self-start" />
                <h2 className="flex flex-col text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                    <span className="digital-title">We bring your</span>
                    <span className="digital-subtitle font-light italic md:text-6xl lg:text-7xl xl:text-8xl">
                        vision digital
                    </span>
                </h2>
                <Image src={DigitalVisionIcon} alt="digital vision" className="hidden md:block md:w-24 xl:self-start" />
            </div>
            <div className="relative mt-40 sm:flex sm:justify-center">
                <div className="absolute -top-16 z-10 flex gap-2 sm:left-6 md:left-0">
                    <span className="vision-number text-xl font-light md:text-2xl">(01)</span>
                    <div>
                        <h3 className="vision-title text-4xl md:mb-6 md:text-5xl xl:text-6xl">Quality</h3>
                        <div className="vision-description hidden max-w-xs text-sm md:block">
                            <p>
                                Our philosophy is centered around the idea that form and function are equally important
                                in design and development. That&apos;s why we always pursue excellence and pay attention
                                to every detail, striving to surpass your expectations and create designs that are
                                exceptional in every way.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute right-12 top-1/3 z-10 flex gap-2 md:right-0">
                    <span className="vision-number text-xl font-light md:text-2xl">(02)</span>
                    <div>
                        <h3 className="vision-title text-4xl md:mb-6 md:text-5xl xl:text-6xl">Creativity</h3>
                        <div className="vision-description hidden max-w-xs text-sm md:block">
                            <p>
                                Our philosophy is centered around the idea that form and function are equally important
                                in design and development. That&apos;s why we always pursue excellence and pay attention
                                to every detail, striving to surpass your expectations and create designs that are
                                exceptional in every way.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2 md:-bottom-32 md:left-1/3 lg:left-1/2">
                    <span className="vision-number text-xl font-light md:text-2xl">(03)</span>
                    <div>
                        <h3 className="vision-title text-4xl md:mb-6 md:text-5xl xl:text-6xl">Future</h3>
                        <div className="vision-description hidden max-w-xs text-sm md:block">
                            <p>
                                We believe that every day we create the future together with our customers because we
                                believe that cooperation is the key to a brighter future. That&apos;s why we work
                                closely with our clients to understand their needs and goals, and ensure that the final
                                product meets their vision. Together, we bring your ideas to life.
                            </p>
                        </div>
                    </div>
                </div>
                <Image src={Digital} alt="Digital" width={375} height={558} />
            </div>
            <div className="digital-bottom absolute bottom-0 left-0 h-1/2 w-full" />
        </div>
    );
};

export default DigitalVision;
