import React, { FC, PropsWithChildren, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import SliderArrow from "@/shared/uiKit/icons/SliderArrow";
import Dot from "@/components/cases/components/CaseSlider/components/Dot";

enum SliderNavigationWay {
    LEFT,
    RIGHT,
}

const CaseSlider: FC<PropsWithChildren> = ({ children }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isSliderLoaded, setIsSliderLoaded] = useState(false);

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slides: {
            origin: "center",
            perView: 1,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setIsSliderLoaded(true);
        },
    });

    const slidesCount = instanceRef.current?.track?.details?.slides?.length ?? 0;
    const isFirstSlide = currentSlide === 0;
    const isLastSlide = currentSlide == slidesCount - 1;
    const dots = new Array(slidesCount).fill(null).map((_, index) => index);

    const onArrowClick = (way: SliderNavigationWay) => () => {
        if (way === SliderNavigationWay.LEFT) {
            if (isFirstSlide) return;
            return instanceRef.current?.prev();
        }

        if (isLastSlide) return;
        return instanceRef.current?.next();
    };

    return (
        <div className="relative flex h-full cursor-grab flex-col">
            <div
                className="absolute left-8 top-1/2 z-10 hidden lg:block -translate-x-1/2 cursor-pointer rounded-full border border-gray-100 p-3"
                onClick={onArrowClick(SliderNavigationWay.LEFT)}
            >
                <SliderArrow className={`h-8 w-8 rotate-180 ${isFirstSlide ? "stroke-gray-100" : "stroke-white"}`} />
            </div>
            <div ref={sliderRef} className="keen-slider mb-10 h-full">
                {children}
            </div>
            <div
                className="absolute right-8 top-1/2 z-10 hidden lg:block translate-x-1/2 cursor-pointer rounded-full border border-gray-100 p-3"
                onClick={onArrowClick(SliderNavigationWay.RIGHT)}
            >
                <SliderArrow className={`h-8 w-8 ${isLastSlide ? "stroke-gray-100" : "stroke-white"}`} />
            </div>
            {isSliderLoaded && (
                <div className="flex w-full items-center justify-between lg:justify-center">
                    <div
                        className="flex h-10 w-10 lg:hidden cursor-pointer items-center justify-center rounded-full border border-gray-100"
                        onClick={onArrowClick(SliderNavigationWay.LEFT)}
                    >
                        <SliderArrow
                            className={`h-6 w-6 rotate-180 ${isFirstSlide ? "stroke-gray-100" : "stroke-white"}`}
                        />
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        {dots.map(idx => {
                            return (
                                <Dot
                                    key={idx}
                                    onClick={() => {
                                        instanceRef.current?.moveToIdx(idx);
                                    }}
                                    isActive={currentSlide === idx}
                                />
                            );
                        })}
                    </div>
                    <div
                        className="flex h-10 w-10 lg:hidden cursor-pointer items-center justify-center rounded-full border border-gray-100"
                        onClick={onArrowClick(SliderNavigationWay.RIGHT)}
                    >
                        <SliderArrow className={`h-6 w-6 ${isLastSlide ? "stroke-gray-100" : "stroke-white"}`} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CaseSlider;
