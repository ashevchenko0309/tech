import React from "react";

const ServicesBarrel = () => {
    return (
        <div className="flex flex-col md:py-16">
            <div className="services-barrel relative max-h-96 overflow-hidden text-center text-4xl md:order-2 md:text-6xl xl:my-24 xl:max-h-[70vh] xl:text-9xl">
                <div className="services-barrel-top-gradient absolute left-0 top-0 h-1/3 w-full" />
                <p>Web Design</p>
                <p>Web Development</p>
                <p>Concept Design</p>
                <p>Interface Development</p>
                <p>Integrations</p>
                <p>Strategy</p>
                <p>Web Design</p>
                <div className="services-barrel-bottom-gradient absolute bottom-0 left-0 h-1/3 w-full" />
            </div>
            <div className="grid gap-y-8 px-6 py-8 md:order-1 lg:grid-cols-2 lg:gap-x-5">
                <div className="lg:pr-10 xl:max-w-xl">
                    <p className="services-main-desciption text-xl leading-snug xl:text-2xl">
                        We believe that great products cannot happen without passion, intelligence, and personal
                        commitment and it is demonstrated by our portfolio that spans different customers, industries,
                        and target audiences.
                    </p>
                </div>
                <div className="grid gap-y-8 md:grid-cols-2 md:gap-x-10 md:py-4 lg:py-0 xl:gap-x-0">
                    <div className="xl:ml-auto xl:max-w-xs">
                        <p className="services-title mb-6  text-xl text-gray xl:text-3xl">Design</p>
                        <p className="services-description text-sm  leading-snug">
                            Establishing the right visual connection with your customers and users by creating
                            eye-catching and memorable designs as well as meaningful user experience.
                        </p>
                    </div>
                    <div className="xl:ml-auto xl:max-w-xs">
                        <p className="services-title mb-6 text-xl text-gray xl:text-3xl">Development</p>
                        <p className="services-description text-sm leading-snug">
                            Implementing your project with scalable architecture design, modern technology, and an
                            excellent level of data security.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesBarrel;
