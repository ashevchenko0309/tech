import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

import { toggleContactForm, toggleMenu, toggleScroll } from "@/slices/ui";
import { RootState } from "@/pages/_app";
import CloseIcon from "@/public/images/close-icon.svg";
import Burger from "@/public/images/burger.svg";

const MobileNavigation = () => {
    const isMenuOpen = useSelector<RootState>(state => state.ui.isMenuOpen);
    const dispatch = useDispatch();
    const onMenuToggle = () => {
        dispatch(toggleScroll());
        dispatch(toggleMenu());
    };

    const onContactsFormOpen = () => {
        dispatch(toggleMenu());
        dispatch(toggleContactForm());
    };

    return (
        <>
            <div className="col-start-5 cursor-pointer lg:hidden" onClick={onMenuToggle}>
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
                        <div onClick={onMenuToggle} className="cursor-pointer">
                            <Image src={CloseIcon} alt="close" className="md:w-10" />
                        </div>
                    </div>
                    <div>
                        <nav>
                            <ul className="text-xl">
                                <li className="border-b border-gray-100 py-5 md:text-3xl">
                                    <a href="#about" onClick={onMenuToggle}>
                                        About
                                    </a>
                                </li>
                                <li className="border-b border-gray-100 py-5 md:text-3xl">
                                    <a href="#works" onClick={onMenuToggle}>
                                        Work
                                    </a>
                                </li>
                                <li className="border-b border-gray-100 py-5 md:text-3xl">
                                    <a href="#services" onClick={onMenuToggle}>
                                        Services
                                    </a>
                                </li>
                                <li className="cursor-pointer py-5 md:text-3xl" onClick={onContactsFormOpen}>
                                    Contact
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default React.memo(MobileNavigation);
