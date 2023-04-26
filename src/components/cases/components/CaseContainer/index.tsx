import React, { FC, PropsWithChildren } from "react";

const CaseContainer: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="fixed left-0 top-0 z-10 block h-full w-full overflow-x-auto bg-black px-6 pt-4 md:p-12 lg:px-12 lg:py-20">
            {children}
        </div>
    );
};

export default CaseContainer;
