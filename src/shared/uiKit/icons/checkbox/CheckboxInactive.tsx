import React from "react";

const CheckboxInactive = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
    return (
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M25.3333 4H6.66667C5.18667 4 4 5.18667 4 6.66667V25.3333C4 26.0406 4.28095 26.7189 4.78105 27.219C5.28115 27.719 5.95942 28 6.66667 28H25.3333C26.0406 28 26.7189 27.719 27.219 27.219C27.719 26.7189 28 26.0406 28 25.3333V6.66667C28 5.95942 27.719 5.28115 27.219 4.78105C26.7189 4.28095 26.0406 4 25.3333 4ZM25.3333 6.66667V25.3333H6.66667V6.66667H25.3333Z"
                fill="#F1F1F1"
            />
        </svg>
    );
};

export default React.memo(CheckboxInactive);
