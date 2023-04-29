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

const HealthCareAdminCase: FC = () => {
    const isOpen = useSelector<RootState, boolean>(state => state.ui.activeCase === CaseItem.HEALTHCARE_ADMIN);
    const dispatch = useDispatch();

    const onClose = () => {
        dispatch(toggleScroll());
        dispatch(toggleCase(null));
    };

    if (!isOpen) return null;

    return (
        <CaseContainer className="h-screen">
            <div className="grid h-full">
                <div className="mb-20 flex items-start justify-between">
                    <div>
                        <p className="text-3xl">Laboratory Management System</p>
                        <p className="text-lg text-gray-100">Web Design & Development</p>
                    </div>
                    <div onClick={onClose} className="cursor-pointer">
                        <Image src={CloseIcon} alt="close" className="md:w-10" />
                    </div>
                </div>
                <div className="flex overflow-hidden">
                    <div className="overflow-hidden">
                        <CaseSlider>
                            <div className="keen-slider__slide">
                                <Image
                                    src={ScreenOne}
                                    alt="First health care app screen"
                                    className="mx-auto h-full w-auto"
                                />
                            </div>
                            <div className="keen-slider__slide">
                                <Image
                                    src={ScreenTwo}
                                    alt="Second health care app screen"
                                    className="mx-auto h-full w-auto"
                                />
                            </div>
                            <div className="keen-slider__slide">
                                <Image
                                    src={ScreenThree}
                                    alt="Third health care app screen"
                                    className="mx-auto h-full w-auto"
                                />
                            </div>
                            <div className="keen-slider__slide">
                                <Image
                                    src={ScreenFour}
                                    alt="Fourth health care app screen"
                                    className="mx-auto h-full w-auto"
                                />
                            </div>
                        </CaseSlider>
                    </div>
                </div>
            </div>
        </CaseContainer>
    );
};

export default HealthCareAdminCase;
