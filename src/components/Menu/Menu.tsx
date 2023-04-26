import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { toggleContactForm, toggleScroll } from "../../slices/ui";
import MobileNavigation from "./MobileNavigation";

const Menu: FC = () => {
    const dispatch = useDispatch();

    const onContact = () => {
        dispatch(toggleScroll());
        dispatch(toggleContactForm());
    };

    return (
        <>
            <nav className="col-span-4 ml-auto hidden pr-8 text-lg lg:block">
                <ul className="menu-list flex items-center gap-8">
                    <li className="cursor-pointer">Work</li>
                    <li className="cursor-pointer">Services</li>
                    <li className="cursor-pointer">About</li>
                    <li className="ml-20 cursor-pointer" onClick={onContact}>
                        Contact
                    </li>
                </ul>
            </nav>
            <MobileNavigation />
        </>
    );
};

export default React.memo(Menu);
