import React from "react";

const SliderArrow = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
    return (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g>
                <path
                    d="M11.3135 19.7988L28.2841 19.7988"
                    strokeWidth="2.27474"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M19.7988 11.3135L28.2841 19.7988L19.7988 28.284"
                    strokeWidth="2.27474"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    );
};

export default React.memo(SliderArrow);
