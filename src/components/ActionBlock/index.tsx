import React, { FC, PropsWithChildren } from "react";

interface ActionBlockProps extends PropsWithChildren {
    onClick?: () => void;
    className?: string;
}

const ActionBlock: FC<ActionBlockProps> = ({ children, onClick, className = "" }) => {
    return (
        <div
            className={`${
                onClick ? "cursor-pointer" : ""
            } ${className} services-list-gradient rounded-2xl p-6 hover:ring-1 hover:ring-gray active:text-white`}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default ActionBlock;
