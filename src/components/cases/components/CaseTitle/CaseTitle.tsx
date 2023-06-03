import React, { FC } from "react";
import Image from "next/image";
import CloseIcon from "@/public/images/close-icon.svg";
import ArrowDown from "@/shared/uiKit/icons/ArrowDown";

interface CaseTitleProps {
    title: string;
    description: string;
    onClose: () => void;
    isScrollable?: boolean;
}

const CaseTitle: FC<CaseTitleProps> = ({ title, description, onClose, isScrollable = false }) => {
    return (
        <div className="relative mb-6 flex w-full items-start justify-between">
            <div className="max-w-sm">
                <p className="text-3xl lg:text-5xl">{title}</p>
                <p className="text-lg text-gray-100">{description}</p>
            </div>
            {isScrollable && (
                <div className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 items-center gap-7 rounded-full border border-gray-100 px-6 py-4 lg:flex">
                    Scroll <ArrowDown className="stroke-slate" />
                </div>
            )}
            <div onClick={onClose} className="w-10 shrink-0 cursor-pointer">
                <Image src={CloseIcon} alt="close" className="md:w-10" />
            </div>
        </div>
    );
};

export default CaseTitle;
