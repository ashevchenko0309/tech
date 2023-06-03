import React, { FC } from "react";
import Image from "next/image";

import ScreenOne from "@/public/images/cases/e-learning-app/1.webp";
import ScreenTwo from "@/public/images/cases/e-learning-app/2.webp";
import ScreenThree from "@/public/images/cases/e-learning-app/3.webp";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/pages/_app";
import { CaseItem, toggleCase, toggleScroll } from "@/slices/ui";
import CaseContainer from "@/components/cases/components/CaseContainer";
import CaseSlider from "@/components/cases/components/CaseSlider";
import CaseTitle from "@/components/cases/components/CaseTitle/CaseTitle";

const ELearningAppCase: FC = () => {
    const isOpen = useSelector<RootState, boolean>(state => state.ui.activeCase === CaseItem.E_LEARNING_APP);
    const dispatch = useDispatch();

    const onClose = () => {
        dispatch(toggleScroll());
        dispatch(toggleCase(null));
    };

    if (!isOpen) return null;

    return (
        <CaseContainer className="h-screen">
            <div className="grid h-full grid-rows-4 lg:grid-rows-6">
                <CaseTitle title="e-Learning Web app" description="Web Design & Development" onClose={onClose} />
                <div className="row-span-2 overflow-hidden lg:row-span-5">
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
                    </CaseSlider>
                </div>
            </div>
        </CaseContainer>
    );
};

export default ELearningAppCase;
