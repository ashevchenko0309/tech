import React from "react";

const Footer = () => {
    return (
        <>
            {/* TODO: fix text size */}
            <div className="footer-logo mb-10 flex items-center justify-center px-4 text-[calc(1em_+_20vw)] leading-none sm:text-[calc(1em_+_24vw)] xl:text-[calc(1em_+_25vw)]">
                <div className="footer-logo-bottom-gradient">4</div>
                <div className="footer-logo-top-gradient">K</div>
                <div className="footer-logo-bottom-gradient">:</div>
                <div className="footer-logo-bottom-gradient">T</div>
                <div className="footer-logo-top-gradient">e</div>
                <div className="footer-logo-bottom-gradient">c</div>
                <div className="footer-logo-top-gradient">h</div>
            </div>
            <div className="mb-8 flex items-center justify-between px-6 text-xs text-gray md:text-base xl:px-8">
                <p>4K:Tech. All Rights Reserved.</p>
                <p>©{new Date().getFullYear()}</p>
            </div>
        </>
    );
};

export default Footer;
