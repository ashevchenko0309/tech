import React from "react";

const ArrowDown = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M14.001 5.51472L14.001 22.4853"
                strokeWidth="2.27474"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M22.4863 14L14.001 22.4853L5.51577 14"
                strokeWidth="2.27474"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default React.memo(ArrowDown);
