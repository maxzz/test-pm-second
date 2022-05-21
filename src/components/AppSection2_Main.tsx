import React, { HTMLAttributes, useEffect, useRef } from "react";
import { classNames } from "../utils/classnames";
import { LoginScreen } from "./LoginScreen";
import { GhostMain } from "./GhostMain";
import { GhostOld } from "./GhostOld";
import { useElementSize } from "../hooks/useElementSize";
import { useUpdateAtom } from "jotai/utils";
import { workingAreaAtom } from "../store/store";

export function AppSection2_Main({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    const setWorkingArea = useUpdateAtom(workingAreaAtom);
    const containerRef = useRef<HTMLDivElement>(null);
    const { width, height } = useElementSize(containerRef);

    useEffect(() => {
        console.log('width, height', width, height);
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
