import React, { FC } from "react";
import Image from "next/image";
import CloseIcon from "@/public/images/close-icon.svg";

interface CaseTitleProps {
    title: string;
    description: string;
    onClose: () => void;
}

const CaseTitle: FC<CaseTitleProps> = ({ title, description, onClose }) => {
    return (
        <div className="mb-6 flex items-start justify-between">
            <div>
                <p className="text-3xl">{title}</p>
                <p className="text-lg text-gray-100">{description}</p>
            </div>
            <div onClick={onClose} className="w-10 shrink-0 cursor-pointer">
                <Image src={CloseIcon} alt="close" className="md:w-10" />
            </div>
        </div>
    );
};

export default CaseTitle;
