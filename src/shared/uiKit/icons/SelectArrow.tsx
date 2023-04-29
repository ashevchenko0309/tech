import React from "react";

const SelectArrow = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
    return (
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M9.88 11.4531L16 17.5598L22.12 11.4531L24 13.3331L16 21.3331L8 13.3331L9.88 11.4531Z" />
        </svg>
    );
};

export default React.memo(SelectArrow);
