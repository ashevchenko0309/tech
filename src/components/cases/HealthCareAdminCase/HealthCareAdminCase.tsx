import React, { FC } from "react";
import Image from "next/image";
import CloseIcon from "../../../../public/images/close-icon.svg";

import ScreenOne from "../../../../public/images/cases/health-care-admin-app/1.webp";
import ScreenTwo from "../../../../public/images/cases/health-care-admin-app/2.webp";
import ScreenThree from "../../../../public/images/cases/health-care-admin-app/3.webp";
import ScreenFour from "../../../../public/images/cases/health-care-admin-app/4.webp";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/pages/_app";
import { CaseItem, toggleCase, toggleScroll } from "@/slices/ui";
import CaseContainer from "@/components/cases/components/CaseContainer";
import CaseSlider from "@/components/cases/components/CaseSlider";
import ImageOne from "@/public/images/crus.webp";
import ImageTwo from "@/public/images/digital.webp";

const HealthCareAdminCase: FC = () => {
    const isOpen = useSelector<RootState, boolean>(state => state.ui.activeCase === CaseItem.CFUS);
    const dispatch = useDispatch();

    const onClose = () => {
        dispatch(toggleScroll());
        dispatch(toggleCase(null));
    };

    if (!isOpen) return null;

    return (
        <CaseContainer>
            <div className="mb-20 flex items-start justify-between">
                <div>
                    <p className="text-3xl">Laboratory Management System</p>
                    <p className="text-lg text-gray">Web Design & Development</p>
                </div>
                <div onClick={onClose} className="cursor-pointer">
                    <Image src={CloseIcon} alt="close" className="md:w-10" />
                </div>
            </div>
            <CaseSlider>
                <div className="keen-slider__slide px-32">
                    <Image src={ScreenOne} alt="First health care app screen" className="mx-auto" />
                </div>
                <div className="keen-slider__slide px-32">
                    <Image src={ScreenTwo} alt="Second health care app screen" className="mx-auto" />
                </div>
                <div className="keen-slider__slide px-32">
                    <Image src={ScreenThree} alt="Third health care app screen" className="mx-auto" />
                </div>
                <div className="keen-slider__slide px-32">
                    <Image src={ScreenFour} alt="Fourth health care app screen" className="mx-auto" />
                </div>
            </CaseSlider>
        </CaseContainer>
    );
};

export default HealthCareAdminCase;
