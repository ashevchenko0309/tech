import React, { FC } from "react";
import Image from "next/image";

import ScreenOne from "@/public/images/cases/cfus-landing/1.webp";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/pages/_app";
import { CaseItem, toggleCase, toggleScroll } from "@/slices/ui";
import CaseContainer from "@/components/cases/components/CaseContainer";
import CaseTitle from "@/components/cases/components/CaseTitle/CaseTitle";

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
                <CaseTitle title="Crowdfunding Landing page" description="Web Design & Development" onClose={onClose} />
            </div>
            <Image src={ScreenOne} alt="First health care app screen" />
        </CaseContainer>
    );
};

export default CFUSLandingCase;
