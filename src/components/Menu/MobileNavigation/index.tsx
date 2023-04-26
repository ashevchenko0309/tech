import React from "react";
import Image from "next/image";
import Burger from "../../../../public/images/burger.svg";
import CloseIcon from "../../../../public/images/close-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../../slices/ui";
import { RootState } from "../../../pages/_app";

const MobileNavigation = () => {
    const isMenuOpen = useSelector<RootState>(state => state.ui.isMenuOpen);
    const dispatch = useDispatch();
    const onMenuToggle = () => {
        dispatch(toggleMenu());
    };

    return (
        <>
            <div className="col-start-5 lg:hidden" onClick={onMenuToggle}>
                <Image src={Burger} alt="burger-menu" className="ml-auto md:w-10" />
            </div>
            <nav
                className={`${
                    isMenuOpen ? "z-10 block" : "-z-10 hidden"
                } fixed left-0 top-0 h-full w-full bg-black lg:hidden`}
            >
                <div className={`${isMenuOpen ? "block" : "hidden"} px-6 pt-4`}>
                    <div className="mb-10 flex items-center justify-between">
                        <p className="text-3xl md:text-6xl">4K:Tech</p>
                        <div onClick={onMenuToggle}>
                            <Image src={CloseIcon} alt="close" className="md:w-10" />
                        </div>
                    </div>
                    <div>
                        <nav>
                            <ul className="text-xl">
                                <li className="border-b border-gray py-5 md:text-3xl">Services</li>
                                <li className="border-b border-gray py-5 md:text-3xl">Work</li>
                                <li className="border-b border-gray py-5 md:text-3xl">About</li>
                                <li className="py-5 md:text-3xl">Contact</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default React.memo(MobileNavigation);
