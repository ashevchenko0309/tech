import React, { FC, useState } from "react";
import Image from "next/image";
import CloseIcon from "../../../public/images/close-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/pages/_app";
import { toggleContactForm, toggleScroll } from "@/slices/ui";

const ContactForm: FC = () => {
    const isContactFormOpen = useSelector<RootState>(state => state.ui.isContactFormOpen);
    const dispatch = useDispatch();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onCloseForm = () => {
        dispatch(toggleScroll());
        dispatch(toggleContactForm());
    };

    if (!isContactFormOpen) return null;

    return (
        <div
            className={`fixed left-0 top-0 z-10 block h-full w-full overflow-x-auto bg-black px-6 pt-4 md:p-12 lg:px-12 lg:py-20 xl:grid`}
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
                <form action="" className="grid gap-6 md:grid-cols-2">
                    <div className="flex flex-col gap-6">
                        <input
                            type="text"
                            required
                            placeholder="Your name"
                            className="w-full rounded-lg border border-gray-100 bg-black p-5"
                        />
                        <input
                            type="text"
                            placeholder="Select service"
                            className="w-full rounded-lg border border-gray-100 bg-black p-5"
                        />
                    </div>
                    <div className="flex flex-col gap-6">
                        <input
                            type="email"
                            required
                            placeholder="E-mail"
                            className="w-full rounded-lg border border-gray-100 bg-black p-5"
                        />
                        <textarea
                            maxLength={2000}
                            placeholder="Project Description"
                            className="min-h-[100px] w-full rounded-lg border border-gray-100 bg-black p-5"
                        />
                    </div>
                    {/* TODO: Attachment */}
                    <button className="w-full rounded-lg bg-white py-5 text-black md:col-span-2 md:mt-10">
                        Submit
                    </button>
                </form>
            </div>
            <div className={isSubmitted ? "block" : "hidden"}>
                <p className="text-6xl">
                    Thank you! Your submission <br /> has been received!
                </p>
            </div>
        </div>
    );
};

export default ContactForm;
