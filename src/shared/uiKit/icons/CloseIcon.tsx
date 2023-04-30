import React from "react";

const CloseIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
    return (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M38 12.82L35.18 10L24 21.18L12.82 10L10 12.82L21.18 24L10 35.18L12.82 38L24 26.82L35.18 38L38 35.18L26.82 24L38 12.82Z" />
        </svg>
    );
};

export default React.memo(CloseIcon);
