export const menuBackground = {
    open: (height = 1000) => ({
        clipPath: `circle(9999px at 100% 0px)`,
        transition: {
            type: "tween",
            duration: 4,
        },
    }),
    closed: {
        clipPath: "circle(0px at 100% 0px)",
        transition: {
            type: "spring",
        },
    },
};

export const title = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            // y: { stiffness: 1000, velocity: -100 },
            delay: 0.5,
            staggerChildren: 1000,
            delayChildren: 1000,
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            delay: 0.5,
            // y: { stiffness: 1000 },
            staggerChildren: 10,
            delayChildren: 10,
        },
    },
};
