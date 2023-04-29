import React, { FC } from "react";

interface DotProps {
    isActive: boolean;
    onClick: () => void;
}

const Dot: FC<DotProps> = ({ isActive = false, onClick }) => {
    return <button onClick={onClick} className={`h-2 w-2 rounded-full ${isActive ? "bg-gray-100" : "bg-gray-50"}`} />;
};

export default Dot;
