import React from "react";
import Image from "next/image";
import ActionArrow from "../../../public/images/action-arrow.svg";
import ActionBlock from "../ActionBlock";
import { useDispatch } from "react-redux";
import { toggleContactForm, toggleScroll } from "@/slices/ui";

const ServiceCases = () => {
    const dispatch = useDispatch();
    const onOpenContactForm = () => {
        dispatch(toggleScroll());
        dispatch(toggleContactForm());
    };

    return (
        <div className="mb-8 cursor-default px-6 xl:mb-40 xl:px-8">
            <h2 className="services-list-title mb-10 text-4xl md:text-5xl lg:text-6xl xl:mb-14 xl:text-7xl">
                Services
            </h2>
            <div className="flex flex-col xl:gap-14">
                <div className="mb-8 grid gap-6 xl:gap-8">
                    <div className="px-6">
                        <h3 className="services-list-subtitle text-3xl italic text-gray-100 md:text-4xl lg:text-5xl xl:text-6xl">
                            Design
                        </h3>
                    </div>
                    <ActionBlock>
                        <h4 className="service-list-item-title mb-8 text-3xl xl:text-4xl">
                            UX/UI Design & <br className="md:hidden" />
                            Web Design
                        </h4>
                        <div className="flex flex-wrap">
                            <div className="service-list-item-direction mb-3 mr-2 rounded-md border border-gray-100 px-3 py-2 text-xs">
                                Prototyping
                            </div>
                            <div className="service-list-item-direction mb-3 mr-2 rounded-md border border-gray-100 px-3 py-2 text-xs">
                                Wireframes
                            </div>
                            <div className="service-list-item-direction mb-3 mr-2 rounded-md border border-gray-100 px-3 py-2 text-xs">
                                UX Analytics
                            </div>
                            <div className="service-list-item-direction mb-3 mr-2 rounded-md border border-gray-100 px-3 py-2 text-xs">
                                Adaptive
                            </div>
                            <div className="service-list-item-direction mb-3 mr-2 rounded-md border border-gray-100 px-3 py-2 text-xs">
                                Style Guide
                            </div>
                            <div className="service-list-item-direction mb-3 mr-2 rounded-md border border-gray-100 px-3 py-2 text-xs">
                                Webflow
                            </div>
                            <div className="service-list-item-direction mb-3 mr-2 rounded-md border border-gray-100 px-3 py-2 text-xs">
                                Transfer to Development
                            </div>
                        </div>
                    </ActionBlock>
                    <ActionBlock>
                        <h4 className="service-list-item-title mb-8 text-3xl xl:text-4xl">Apps Design</h4>
                        <div className="flex flex-wrap">
                            <div className="service-list-item-direction mb-3 mr-2 rounded-md border border-gray-100 px-3 py-2 text-xs">
                                UX Analytics
                            </div>
                            <div className="service-list-item-direction mb-3 mr-2 rounded-md border border-gray-100 px-3 py-2 text-xs">
                                Design All Screens
                            </div>
                            <div className="service-list-item-direction mb-3 mr-2 rounded-md border border-gray-100 px-3 py-2 text-xs">
                                Design Concept
                            </div>
                            <div className="service-list-item-direction mb-3 mr-2 rounded-md border border-gray-100 px-3 py-2 text-xs">
                                Motion Design
                            </div>
                            <div className="service-list-item-direction mb-3 mr-2 rounded-md border border-gray-100 px-3 py-2 text-xs">
                                Style Guide
                            </div>
                            <div className="service-list-item-direction mb-3 mr-2 rounded-md border border-gray-100 px-3 py-2 text-xs">
                                Transfer to Development
                            </div>
                        </div>
                    </ActionBlock>
                    <ActionBlock onClick={onOpenContactForm} className="group">
                        <h4 className="service-list-item-title flex items-center justify-between text-3xl xl:text-4xl">
                            Explore <br className="md:hidden" /> All Services
                            <Image
                                src={ActionArrow}
                                alt="action arrow"
                                width={32}
                                height={32}
                                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                            />
                        </h4>
                    </ActionBlock>
                </div>
                <div className="grid gap-6 xl:gap-8">
                    <div className="px-6">
                        <h3 className="services-list-subtitle text-3xl italic text-gray-100 md:text-4xl lg:text-5xl xl:text-6xl">
                            Development
                        </h3>
                    </div>
                    <ActionBlock>
                        <h4 className="service-list-item-title mb-8 text-3xl xl:text-4xl">
                            Corporate Websites <br className="md:hidden" />& Landing Pages{" "}
                        </h4>
                        <div className="flex flex-wrap">
                            <div className="service-list-item-direction mb-3 mr-2 rounded-md border border-gray-100 px-3 py-2 text-xs">
                                Webflow
                            </div>
                            <div className="service-list-item-direction mb-3 mr-2 rounded-md border border-gray-100 px-3 py-2 text-xs">
                                Valid Code
                            </div>
                            <div className="service-list-item-direction mb-3 mr-2 rounded-md border border-gray-100 px-3 py-2 text-xs">
                                CMS
                            </div>
                            <div className="service-list-item-direction mb-3 mr-2 rounded-md border border-gray-100 px-3 py-2 text-xs">
                                Easy to Manage
                            </div>
                            <div className="service-list-item-direction mb-3 mr-2 rounded-md border border-gray-100 px-3 py-2 text-xs">
                                Style Guide
                            </div>
                            <div className="service-list-item-direction mb-3 mr-2 rounded-md border border-gray-100 px-3 py-2 text-xs">
                                Creative Interactions
                            </div>
                        </div>
                    </ActionBlock>

                    <ActionBlock>
                        <h4 className="service-list-item-title mb-8 text-3xl xl:text-4xl">
                            e-Commerce <br className="md:hidden" /> Web Apps
                        </h4>
                        <div className="flex flex-wrap">
                            <div className="service-list-item-direction mb-3 mr-2 rounded-md border border-gray-100 px-3 py-2 text-xs">
                                Webflow
                            </div>
                            <div className="service-list-item-direction mb-3 mr-2 rounded-md border border-gray-100 px-3 py-2 text-xs">
                                Square Space
                            </div>
                            <div className="service-list-item-direction mb-3 mr-2 rounded-md border border-gray-100 px-3 py-2 text-xs">
                                Valid Code
                            </div>
                            <div className="service-list-item-direction mb-3 mr-2 rounded-md border border-gray-100 px-3 py-2 text-xs">
                                Adaptive
                            </div>
                            <div className="service-list-item-direction mb-3 mr-2 rounded-md border border-gray-100 px-3 py-2 text-xs">
                                Shopify
                            </div>
                            <div className="service-list-item-direction mb-3 mr-2 rounded-md border border-gray-100 px-3 py-2 text-xs">
                                Easy to manage
                            </div>
                            <div className="service-list-item-direction mb-3 mr-2 rounded-md border border-gray-100 px-3 py-2 text-xs">
                                Usability
                            </div>
                            <div className="service-list-item-direction mb-3 mr-2 rounded-md border border-gray-100 px-3 py-2 text-xs">
                                Style Guide
                            </div>
                        </div>
                    </ActionBlock>

                    <ActionBlock onClick={onOpenContactForm} className="group">
                        <h4 className="service-list-item-title flex items-center justify-between text-3xl xl:text-4xl">
                            Explore <br className="md:hidden" /> All Services
                            <Image
                                src={ActionArrow}
                                alt="action arrow"
                                width={32}
                                height={32}
                                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                            />
                        </h4>
                    </ActionBlock>
                </div>
            </div>
        </div>
    );
};

export default ServiceCases;
