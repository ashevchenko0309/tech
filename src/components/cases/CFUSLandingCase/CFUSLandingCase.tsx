import React, { FC } from "react";
import Image from "next/image";
import CloseIcon from "@/public/images/close-icon.svg";

import ImageOne from "@/public/images/crus.webp";
import ImageTwo from "@/public/images/digital.webp";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/pages/_app";
import { CaseItem, toggleCase, toggleScroll } from "@/slices/ui";
import CaseSlider from "../components/CaseSlider";
import CaseContainer from "@/components/cases/components/CaseContainer";

const CFUSLandingCase: FC = () => {
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
                <div className="grid grow grid-cols-5 items-end">
                    <div>
                        <p className="text-3xl">
                            Crowdfunding <br /> Landing page
                        </p>
                        <p className="text-lg text-gray">Web Design & Development</p>
                    </div>
                    <div className="col-start-3">
                        <div className="rounded-full border border-gray px-8 py-5">Scroll</div>
                    </div>
                </div>
            </div>
            <div>
                <CaseSlider>
                    <div className="keen-slider__slide px-32">
                        <Image src={ImageOne} alt="slider image" className="mx-auto" />
                    </div>
                    <div className="keen-slider__slide px-32">
                        <Image src={ImageTwo} alt="slider image" className="mx-auto" />
                    </div>
                </CaseSlider>
            </div>

            <div onClick={onClose} className="fixed top-0 right-12 z-10 cursor-pointer rounded-full bg-black p-2">
                <Image src={CloseIcon} alt="close" className="md:w-10" />
            </div>
            {/*<Image src={ScreenOne} alt="First health care app screen" />*/}
        </CaseContainer>
    );
};

export default CFUSLandingCase;
