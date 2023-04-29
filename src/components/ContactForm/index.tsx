import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/pages/_app";
import ContactFormContainer from "@/components/ContactForm/ContactFormContainer";

const ContactForm = () => {
    const isContactFormOpen = useSelector<RootState>(state => state.ui.isContactFormOpen);

    if (!isContactFormOpen) return null;

    return <ContactFormContainer />;
};

export default ContactForm;
