import React from "react";
import Menu from "../Menu/Menu";
import { useScroll } from "framer-motion";

const Header = () => {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = React.useState(false);

    function update() {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (scrollY?.current < scrollY?.prev) {
            setHidden(false);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
        } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
            setHidden(true);
        }
    }

    /** update the onChange callback to call for `update()` **/
    React.useEffect(() => {
        return scrollY.on("change", () => update());
    });

    return (
        <header className="header">
            <div
                className={`${
                    hidden ? "text-xl md:text-4xl lg:top-2 xl:text-6xl" : "text-3xl md:text-6xl lg:top-6 xl:text-8xl"
                } transition-all duration-300 lg:absolute`}
            >
                <p className="logo">4K:Tech</p>
            </div>
            <Menu />
        </header>
    );
};

export default React.memo(Header);
