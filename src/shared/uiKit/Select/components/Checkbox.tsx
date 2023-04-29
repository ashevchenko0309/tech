import React, { FC } from "react";
import CheckboxActive from "@/shared/uiKit/icons/checkbox/CheckboxActive";
import CheckboxInactive from "@/shared/uiKit/icons/checkbox/CheckboxInactive";

interface CheckboxProps {
    isSelected?: boolean;
}

const Checkbox: FC<CheckboxProps> = ({ isSelected = false }) => {
    return isSelected ? <CheckboxActive className="h-5 w-5" /> : <CheckboxInactive className="h-5 w-5" />;
};

export default Checkbox;
