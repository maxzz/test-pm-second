import React, { HTMLAttributes, useEffect, useRef } from "react";
import { classNames } from "../../utils/classnames";
import { LoginScreen } from "./1-login-screen";
import { GhostMain } from "./2-ghost-main";
import { GhostOld } from "./3-ghost-old";
import { useElementSize } from "../../hooks/useElementSize";
import { useSetAtom } from "jotai";
import { workingAreaAtom } from "../../store/store";

export function App_Main({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    const setWorkingArea = useSetAtom(workingAreaAtom);
    const containerRef = useRef<HTMLDivElement>(null);
    const { width, height } = useElementSize(containerRef);

    useEffect(() => {
        setWorkingArea({ width, height });
    }, [width, height]);

    return (
        <div ref={containerRef} className={classNames("relative h-full flex items-center justify-center", className)} {...rest}>
            <GhostMain />
            <GhostOld />
            <LoginScreen />
        </div>
    );
}
