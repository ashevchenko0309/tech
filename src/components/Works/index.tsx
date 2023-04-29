import React from "react";
import Image from "next/image";
import { works } from "./constants";
import { useDispatch } from "react-redux";
import { CaseItem, toggleCase, toggleScroll } from "@/slices/ui";

const Works = () => {
    const dispatch = useDispatch();
    const onOpenCase = (selectedCase: CaseItem) => () => {
        dispatch(toggleScroll());
        dispatch(toggleCase(selectedCase));
    };

    return (
        <div className="mb-8 px-6 md:py-10 xl:mb-20 xl:px-8" id="works">
            <h2 className="works-title mb-6 text-4xl md:text-5xl xl:mb-20 xl:text-7xl">Work</h2>
            <div className="grid gap-y-6 md:grid-cols-2 md:gap-10">
                {works.map(({ image, description, app, title }) => (
                    <div key={title} className="cursor-pointer" onClick={onOpenCase(app)}>
                        <Image src={image} alt="Health Care app" className="mb-3 w-full rounded-2xl" />
                        <div className="text-center">
                            <h3 className="case-title text-base mb-1.5 leading-none md:text-2xl">{title}</h3>
                            <p className="case-description text-xs leading-none text-gray-100 md:text-base">
                                {description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Works;
