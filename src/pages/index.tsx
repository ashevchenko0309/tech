import React, { useEffect } from "react";
import Head from "next/head";
import { useSelector } from "react-redux";

import { RootState } from "./_app";

import Header from "../components/Header";
import Banner from "../components/Banner";
import DigitalVision from "../components/DigitalVision";
import ServicesBarrel from "../components/ServicesBarrel";
import Works from "../components/Works";
import BuildTheFuture from "../components/BuildTheFuture";
import ServiceCases from "../components/ServiceCases";
import Footer from "../components/Footer";
import dynamic from "next/dynamic";
import SayHello from "../components/SayHello";

const DynamicContactForm = dynamic(() => import("../components/ContactForm/ContactForm"));
const DynamicCFUSLandingCase = dynamic(() => import("../components/cases/CFUSLandingCase/CFUSLandingCase"));

export default function Home() {
    const isBodyScrollable = useSelector<RootState>(state => state.ui.isScrollable);

    useEffect(() => {
        document.body.classList[isBodyScrollable ? "remove" : "add"]("overflow-hidden");
    }, [isBodyScrollable]);

    return (
        <div>
            <Head>
                <title>4k:Tech | Expert Development Agency | Custom Software Solutions</title>
                <meta
                    name="description"
                    content="We are a leading development agency offering custom software solutions that are tailored to your business needs. Our top developers provide expert services to help your company succeed."
                />
                <meta
                    name="keywords"
                    content="development agency, software development, custom software, web development, mobile development, top developers"
                />
                <meta name="author" content="4k:Tech" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="#000000" />
                <meta property="og:title" content="4k:Tech | Expert Development Agency | Custom Software Solutions" />
                <meta
                    property="og:description"
                    content="We are a leading development agency offering custom software solutions that are tailored to your business needs. Our top developers provide expert services to help your company succeed."
                />
                <meta property="og:type" content="website" />
                {/* TODO: Change url */}
                <meta property="og:url" content="https://www.yourdevelopmentagency.com" />
                {/* TODO: Change url */}
                <meta property="og:image" content="https://www.yourdevelopmentagency.com/images/logo.png" />
                <meta property="og:image:alt" content="4k:Tech" />
                <meta property="og:site_name" content="4k:Tech" />
                <meta name="twitter:title" content="4k:Tech | Expert Development Agency | Custom Software Solutions" />
                <meta
                    name="twitter:description"
                    content="We are a leading development agency offering custom software solutions that are tailored to your business needs. Our top developers provide expert services to help your company succeed."
                />
                <meta name="twitter:image" content="https://www.yourdevelopmentagency.com/images/logo.png" />
                <meta name="twitter:card" content="summary_large_image" />
                {/* TODO: Change twitter */}
                <meta name="twitter:site" content="@yourhandle" />
                <meta name="twitter:creator" content="@yourhandle" />
            </Head>
            <Header />
            <main>
                <Banner />
                <DigitalVision />
                <ServicesBarrel />
                <Works />
                <BuildTheFuture />
                <ServiceCases />
                <SayHello />
                <Footer />
                <DynamicCFUSLandingCase />
                <DynamicContactForm />
            </main>
        </div>
    );
}
