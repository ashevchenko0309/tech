import React, { FC, MouseEventHandler } from "react";

interface ButtonProps {
    className?: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    text?: string;
    endIcon?: JSX.Element;
    startIcon?: JSX.Element;
}

const Button: FC<ButtonProps> = ({ className, onClick, startIcon, text, endIcon, disabled }) => {
    return (
        <button className={`${className} group flex items-center justify-center`} disabled={disabled} onClick={onClick}>
            {startIcon && <span className="mr-7">{startIcon}</span>}
            {text}
            {endIcon && <span className="ml-7">{endIcon}</span>}
        </button>
    );
};

export const OutlineButton: FC<ButtonProps> = ({ className = "", ...props }) => {
    return (
        <Button
            {...props}
            className={`${className} cursor-pointer rounded-full border border-slate px-8 py-4 hover:bg-slate hover:text-black active:bg-white`}
        />
    );
};
export const SolidButton: FC<ButtonProps> = ({ className = "", ...props }) => {
    return (
        <Button
            {...props}
            className={`${className} rounded-xl border border-slate bg-slate py-5 text-center font-medium text-black hover:bg-transparent hover:text-slate active:border-white active:text-white`}
        />
    );
};
