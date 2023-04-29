import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { toggleContactForm, toggleScroll } from "@/slices/ui";
import MainCover from "@/public/images/main-cover.webp";
import { OutlineButton } from "@/shared/uiKit/Button";
import ArrowUpRight from "@/shared/uiKit/icons/ArrowUpRight";

const Banner = () => {
    const dispatch = useDispatch();

    const onOpenForm = () => {
        dispatch(toggleScroll());
        dispatch(toggleContactForm());
    };

    return (
        <div className="relative grid min-h-screen w-full grid-rows-3 items-end">
            <Image
                src={MainCover}
                alt="main banner cover"
                className="banner-image absolute -z-10 w-full rounded-t-4xl object-cover object-[33%_50%] lg:top-16"
                priority
            />
            <div className="banner-description row-span-2 flex max-w-xs flex-col gap-3 self-center pl-6 pr-10 text-sm leading-snug sm:my-20 sm:max-w-lg md:text-xl lg:mt-40 lg:max-w-sm lg:text-sm xl:mt-60">
                <p>
                    4AK:Tech is a boutique digital product design and development studio. We have JS and design experts
                    on board and 7+ years of experience in building digital projects from scratch or refreshing existing
                    ones.
                </p>
                <p>
                    We transform ideas and metaphors into a visual language that works effectively and helps your brand
                    speak.
                </p>
                <p>
                    We provide our partners with unique digital and strategic solutions that unlock your business and
                    deliver value
                </p>
            </div>
            <div className="w-full px-6 pb-8 md:flex md:items-end md:justify-between md:pb-20">
                <div className="mb-6 md:mb-0">
                    <p className="banner-title text-4xl md:text-5xl xl:text-7xl">Design, Creativity</p>
                    <p className="banner-subtitle text-5xl font-light italic md:text-6xl xl:text-8xl">& Development</p>
                </div>
                <OutlineButton
                    text="Let's Connect"
                    className="w-full transition-colors md:w-auto md:px-8 md:py-4"
                    onClick={onOpenForm}
                    endIcon={
                        <ArrowUpRight className="h-7 w-7 stroke-slate transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:stroke-black" />
                    }
                />
            </div>
        </div>
    );
};

export default Banner;
