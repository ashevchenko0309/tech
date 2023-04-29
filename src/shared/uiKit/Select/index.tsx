import React, { FC, useEffect, useRef, useState } from "react";
import SelectArrow from "@/shared/uiKit/icons/SelectArrow";
import Checkbox from "@/shared/uiKit/Select/components/Checkbox";

type Option = { value: string | number; label: string };

interface SelectProps {
    options: Option[];
    placeholder?: string;
}

const Select: FC<SelectProps> = ({ options, placeholder }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

    const selectedOptionsStringify = selectedOptions.map(option => option.label).join(", ");
    const isValue = Boolean(selectedOptions.length);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.value = selectedOptionsStringify;
        }
    }, [selectedOptionsStringify]);

    useEffect(() => {
        const onDocumentClick = (event: MouseEvent) => {
            const targetNode = event.target as Node;
            if (containerRef.current && containerRef.current?.contains(targetNode) && isOptionsOpen) {
                return;
            }

            setIsOptionsOpen(false);
        };

        document.addEventListener("mousedown", onDocumentClick);
        return () => {
            document.removeEventListener("mousedown", onDocumentClick);
        };
    }, [isOptionsOpen]);

    const onOptionClick = (option: Option) => () => {
        setSelectedOptions(prevState => {
            if (prevState.find(selected => selected.value === option.value)) {
                return prevState.filter(s => s.value !== option.value);
            }

            return [...prevState, option];
        });
    };

    const onOptionsToggle = () => {
        setIsOptionsOpen(prev => !prev);
    };

    return (
        <>
            <div className="relative" ref={containerRef}>
                <div
                    className={`${
                        isValue ? "text-white" : "text-gray-100"
                    } flex w-full cursor-pointer justify-between rounded-lg border border-gray-100 bg-black p-5`}
                    onClick={onOptionsToggle}
                >
                    {isValue ? selectedOptionsStringify : placeholder}
                    <SelectArrow className="h-6 w-6 fill-white" />
                </div>
                {isOptionsOpen && (
                    <div className="absolute top-20 w-full rounded-lg border border-gray-100 bg-black p-6">
                        <ul className="[&>*:not(:first-child)]:pt-4">
                            {options.map(option => (
                                <li
                                    key={option.value}
                                    onClick={onOptionClick(option)}
                                    className="flex cursor-pointer items-center justify-between border-b border-gray-100 pb-4 text-2xl"
                                >
                                    {option.label}
                                    <Checkbox
                                        isSelected={selectedOptions.some(({ value }) => value === option.value)}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <input type="hidden" ref={inputRef} name="Services" />
        </>
    );
};

export default Select;
