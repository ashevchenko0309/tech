import React, { FC, PropsWithChildren, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import SliderArrow from "@/shared/uiKit/icons/SliderArrow";

enum SliderNavigationWay {
    LEFT,
    RIGHT,
}

const CaseSlider: FC<PropsWithChildren> = ({ children }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slides: {
            origin: "center",
            perView: 1,
            spacing: 15,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
    });

    const onArrowClick = (way: SliderNavigationWay) => () => {
        if (way === SliderNavigationWay.LEFT) {
            if (currentSlide === 0) return;
            return instanceRef.current?.prev();
        }

        if (currentSlide === instanceRef.current?.track?.details?.slides?.length ?? 0 - 1) return;
        return instanceRef.current?.next();
    };

    return (
        <div className="relative">
            <div
                className="absolute left-32 top-1/2 z-10 -translate-x-1/2 cursor-pointer rounded-full border border-gray p-3"
                onClick={onArrowClick(SliderNavigationWay.LEFT)}
            >
                <SliderArrow className="h-8 w-8 rotate-180 stroke-white" />
            </div>
            <div ref={sliderRef} className="keen-slider">
                {children}
            </div>
            <div
                className="absolute right-32 top-1/2 z-10 -translate-x-1/2 cursor-pointer rounded-full border border-gray p-3"
                onClick={onArrowClick(SliderNavigationWay.RIGHT)}
            >
                <SliderArrow className="h-8 w-8 stroke-white" />
            </div>
        </div>
    );
};

export default CaseSlider;
