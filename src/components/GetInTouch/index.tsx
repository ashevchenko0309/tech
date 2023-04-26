import React from "react";
import Image from "next/image";
import ActionArrow from "../../../public/images/action-arrow.svg";

const GetInTouch = () => {
    return (
        <div className="mb-14 px-6 xl:px-8">
            <h2 className="get-in-touch mb-8 text-center text-sm md:text-lg">Get in touch</h2>
            {/* TODO: Change email */}
            <a href="mailto:chychelo1408@gmail.com">
                <div className="services-list-gradient group flex cursor-pointer items-center justify-between rounded-2xl px-6 py-8">
                    <span className="contact text-xl md:text-2xl lg:text-3xl">4k.tech@gmail.com</span>
                    <Image
                        src={ActionArrow}
                        alt="action arrow"
                        width={32}
                        height={32}
                        className="transition-all group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                </div>
            </a>
        </div>
    );
};

export default React.memo(GetInTouch);
