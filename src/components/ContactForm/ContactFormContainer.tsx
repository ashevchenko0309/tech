import React, { FC, FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import CloseIcon from "../../../public/images/close-icon.svg";
import { useDispatch } from "react-redux";
import { toggleContactForm, toggleScroll } from "@/slices/ui";
import Select from "@/shared/uiKit/Select";
import { CLOSE_SUBMITTED_FORM_TIMEOUT, SERVICES_OPTIONS } from "@/components/ContactForm/constants";

let submitTimeoutId: ReturnType<typeof setTimeout> | number | null = null;

const ContactFormContainer: FC = () => {
    const dispatch = useDispatch();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onCloseForm = () => {
        dispatch(toggleScroll());
        dispatch(toggleContactForm());
    };

    const onSuccessSubmit = () => {
        submitTimeoutId = setTimeout(
            () => {
                onCloseForm();
            },
            CLOSE_SUBMITTED_FORM_TIMEOUT,
            []
        );
    };

    const onSubmitForm = (event: FormEvent) => {
        event.preventDefault();
        const { elements } = event.target as HTMLFormElement;

        const formData: Record<string, string> = {};

        for (const element of elements) {
            const el = element as HTMLInputElement | HTMLTextAreaElement;
            if (!el.name) continue;
            formData[el.name] = el.value;
        }

        setIsSubmitted(true);
        onSuccessSubmit();
    };

    useEffect(() => {
        return () => {
            submitTimeoutId && clearTimeout(submitTimeoutId);
            setIsSubmitted(false);
        };
    }, []);

    return (
        <div
            className={`fixed left-0 top-0 z-30 block h-full w-full overflow-x-auto bg-black px-6 pt-4 md:p-12 lg:px-12 lg:py-20 xl:grid`}
        >
            <div className="mb-20 flex items-start justify-between">
                <div>
                    <p className="text-3xl md:text-6xl">Let&apos;s build the</p>
                    <p className="text-4xl font-light italic md:text-6xl">future together</p>
                </div>
                <div onClick={onCloseForm} className="cursor-pointer">
                    <Image src={CloseIcon} alt="close" className="md:w-10" />
                </div>
            </div>
            <div className={isSubmitted ? "hidden" : "block"}>
                <form action="" className="grid gap-6 md:grid-cols-2" onSubmit={onSubmitForm}>
                    <div className="flex flex-col gap-6">
                        <input
                            name="Name"
                            type="text"
                            required
                            placeholder="Your name"
                            className="w-full rounded-lg border border-gray-100 bg-black p-5 placeholder:text-gray-100"
                        />
                        <Select options={SERVICES_OPTIONS} placeholder="Select service" />
                    </div>
                    <div className="flex flex-col gap-6">
                        <input
                            name="Email"
                            type="email"
                            required
                            placeholder="E-mail"
                            className="w-full rounded-lg border border-gray-100 bg-black p-5 placeholder:text-gray-100"
                        />
                        <textarea
                            name="Description"
                            maxLength={2000}
                            placeholder="Project Description"
                            className="min-h-[100px] w-full rounded-lg border border-gray-100 bg-black p-5 placeholder:text-gray-100"
                        />
                    </div>
                    {/* TODO: Attachment */}
                    <button className="w-full rounded-lg bg-white py-5 text-black md:col-span-2 md:mt-10">
                        Submit
                    </button>
                </form>
            </div>
            <div
                className={
                    isSubmitted ? "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2" : "hidden"
                }
            >
                <p className="text-center text-6xl">
                    Thank you! Your submission <br /> has been received!
                </p>
            </div>
        </div>
    );
};

export default ContactFormContainer;
