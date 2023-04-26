import React, { FC } from "react";
import Image from "next/image";
import CloseIcon from "../../../../public/images/close-icon.svg";

import ScreenOne from "../../../../public/images/cases/health-care-admin-app/1.webp";
import ScreenTwo from "../../../../public/images/cases/health-care-admin-app/2.webp";
import ScreenThree from "../../../../public/images/cases/health-care-admin-app/3.webp";
import ScreenFour from "../../../../public/images/cases/health-care-admin-app/4.webp";

const HealthCareAdminCase: FC<{ onToggle: () => void; isOpen: boolean }> = ({ isOpen, onToggle }) => {
    return (
        <div
            className={`fixed left-0 top-0 z-10 h-full w-full overflow-x-auto bg-black px-6 pt-4 md:p-12 lg:px-12 lg:py-20 ${
                isOpen ? "block xl:grid" : "hidden"
            }`}
        >
            <div className="mb-20 flex items-start justify-between">
                <div>
                    <p className="text-3xl">Laboratory Management System</p>
                    <p className="text-lg text-gray">Web Design & Development</p>
                </div>
                <div onClick={onToggle} className="cursor-pointer">
                    <Image src={CloseIcon} alt="close" className="md:w-10" />
                </div>
            </div>
            {/* TODO: Slider */}
            <Image src={ScreenOne} alt="First health care app screen" />
            <Image src={ScreenTwo} alt="Second health care app screen" />
            <Image src={ScreenThree} alt="Third health care app screen" />
            <Image src={ScreenFour} alt="Fourth health care app screen" />
        </div>
    );
};

export default HealthCareAdminCase;
