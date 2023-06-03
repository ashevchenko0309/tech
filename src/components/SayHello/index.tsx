import React from "react";
import Image from "next/image";
import ActionArrow from "../../../public/images/action-arrow.svg";
import SayHelloImage from "../../../public/images/say-hello.webp";
import { useDispatch } from "react-redux";
import { toggleContactForm, toggleScroll } from "@/slices/ui";

const SayHello = () => {
    const dispatch = useDispatch();

    const onOpenForm = () => {
        dispatch(toggleScroll());
        dispatch(toggleContactForm());
    };

    return (
        <div className="relative mb-8 xl:mb-24">
            <Image
                src={SayHelloImage}
                alt="Say hello"
                className="h-[70vh] w-full object-cover xl:h-[90vh] xl:object-[50%_25%]"
            />
            <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center">
                <h2
                    className="say-hello-title inline-flex cursor-pointer items-center justify-center gap-6 text-5xl font-light italic transition-all hover:gap-12 md:text-7xl lg:text-9xl"
                    onClick={onOpenForm}
                >
                    Say Hello
                    <Image
                        src={ActionArrow}
                        alt="action arrow"
                        className="h-10 w-10 animate-action-arrow md:h-16 md:w-16 lg:self-start"
                    />
                </h2>
            </div>
        </div>
    );
};

export default SayHello;
