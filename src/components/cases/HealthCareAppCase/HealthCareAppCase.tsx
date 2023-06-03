import React, { FC } from "react";
import Image from "next/image";
import CloseIcon from "../../../../public/images/close-icon.svg";

import ScreenOne from "@/public/images/cases/health-care-app/1.webp";
import ScreenTwo from "@/public/images/cases/health-care-app/2.webp";
import ScreenThree from "@/public/images/cases/health-care-app/3.webp";
import ScreenFour from "../../../../public/images/cases/health-care-app/4.webp";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/pages/_app";
import { CaseItem, toggleCase, toggleScroll } from "@/slices/ui";
import CaseContainer from "@/components/cases/components/CaseContainer";
import CaseSlider from "@/components/cases/components/CaseSlider";

const HealthCareAppCase: FC = () => {
    const isOpen = useSelector<RootState, boolean>(state => state.ui.activeCase === CaseItem.HEALTHCARE_APP);
    const dispatch = useDispatch();

    const onClose = () => {
        dispatch(toggleScroll());
        dispatch(toggleCase(null));
    };

    if (!isOpen) return null;

    return (
        <CaseContainer className="h-screen">
            <div className="grid h-full grid-rows-4 md:grid-rows-2">
                <div className="mb-6 flex items-start justify-between">
                    <div>
                        <p className="text-3xl">Health care app</p>
                        <p className="text-lg text-gray-100">UI/UX Design & Development</p>
                    </div>
                    <div onClick={onClose} className="cursor-pointer">
                        <Image src={CloseIcon} alt="close" className="md:w-10" />
                    </div>
                </div>
                <div className="row-span-2 overflow-hidden">
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
        </CaseContainer>
    );
};

export default HealthCareAppCase;
