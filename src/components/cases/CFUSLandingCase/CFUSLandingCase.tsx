import React, { FC } from "react";
import Image from "next/image";
import CloseIcon from "../../../../public/images/close-icon.svg";

import ScreenOne from "../../../../public/images/cases/cfus-landing/1.webp";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../pages/_app";
import { CaseItem, toggleCase, toggleScroll } from "../../../slices/ui";

const CFUSLandingCase: FC = () => {
    const isOpen = useSelector<RootState, boolean>(state => state.ui.activeCase === CaseItem.CFUS);
    const dispatch = useDispatch();

    const onClose = () => {
        dispatch(toggleScroll());
        dispatch(toggleCase(null));
    };

    if (!isOpen) return null;

    return (
        <div className="fixed left-0 top-0 z-10 block h-full w-full overflow-x-auto bg-black px-6 pt-4 md:p-12 lg:px-12 lg:py-20 xl:grid">
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
            <div onClick={onClose} className="fixed right-12 z-10 cursor-pointer rounded-full bg-black p-2">
                <Image src={CloseIcon} alt="close" className="md:w-10" />
            </div>
            <Image src={ScreenOne} alt="First health care app screen" />
        </div>
    );
};

export default CFUSLandingCase;
