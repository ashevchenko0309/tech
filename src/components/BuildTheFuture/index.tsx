import React from "react";
import Image from "next/image";
import Crystal from "@/public/images/crystal.webp";
import { useDispatch } from "react-redux";
import ArrowUpRight from "@/shared/uiKit/icons/ArrowUpRight";
import { OutlineButton } from "@/shared/uiKit/Button";
import { toggleContactForm, toggleScroll } from "@/slices/ui";

const BuildTheFuture = () => {
    const dispatch = useDispatch();

    const onOpenForm = () => {
        dispatch(toggleScroll());
        dispatch(toggleContactForm());
    };

    return (
        <div className="mb-8 px-6 md:pb-10 xl:mb-20 xl:px-8">
            <h2 className="build-future-title px-4 text-center text-5xl font-light leading-tight md:text-7xl lg:text-9xl xl:text-[180px]">
                Build the <br className="md:hidden" /> Future
            </h2>
            <Image src={Crystal} alt="Crustal" className="mx-auto md:w-3/4 xl:max-w-4xl" />
            <div className="grid gap-y-6 lg:grid-cols-3">
                <div className="md:flex md:h-auto md:w-auto md:items-center md:justify-center lg:order-2 lg:text-center">
                    <div>
                        <OutlineButton
                            text="Contact us"
                            className="w-full text-lg transition-colors lg:w-auto lg:px-8 lg:text-left"
                            onClick={onOpenForm}
                            endIcon={
                                <ArrowUpRight className="h-7 w-7 stroke-slate transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:stroke-black" />
                            }
                        />
                    </div>
                </div>
                <div className="build-future-description md:order-1 lg:text-sm xl:max-w-xs">
                    <p>
                        Creating solutions for advanced industries, implementing projects that help create the future,
                        improving the user experience based on best practices and technology is our mission, our
                        contribution to the future.
                    </p>
                </div>
                <div className="build-future-description md:order-3 lg:text-sm xl:ml-auto xl:max-w-xs xl:text-right">
                    <p>
                        Design creates culture. Culture shapes values. Values determine the future. We believe that the
                        future is built through these phases. That&apos;s why we work closely with our clients to
                        understand their needs and create something special.{" "}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BuildTheFuture;
