import React from "react";
import Menu from "../Menu/Menu";

const Header = () => {
    return (
        <header className="header fixed top-0">
            <div className="text-3xl md:text-6xl lg:absolute lg:top-6 xl:text-8xl">
                <p className="logo">4K:Tech</p>
            </div>
            <Menu />
        </header>
    );
};

export default React.memo(Header);
