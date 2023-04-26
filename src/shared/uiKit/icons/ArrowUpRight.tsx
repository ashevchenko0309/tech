import React from "react";

const ArrowUpRight = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
    return (
        <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M20.5715 51.4284L51.4287 20.5713" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.5715 20.5713H51.4287V51.4284" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default React.memo(ArrowUpRight);
