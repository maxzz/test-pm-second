import { HTMLAttributes, useEffect, useRef } from "react";
import { useSetAtom } from "jotai";
import { classNames } from "@/utils";
import { LoginScreen } from "../1-login-screen";
import { GhostMain, GhostOld } from "../2-ghost";
import { useElementSize } from "../../../hooks/useElementSize";
import { workingAreaAtom } from "@/store";
import { GhostDirtyDeeds } from "../3-ghost-dirty-deeds";

export function App_Main({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    const setWorkingArea = useSetAtom(workingAreaAtom);
    
    const containerRef = useRef<HTMLDivElement>(null);
    const { width, height } = useElementSize(containerRef);

    useEffect(() => {
        setWorkingArea({ width, height });
    }, [width, height]);

    return (
        <div ref={containerRef} className={classNames("relative h-full flex items-center justify-center overflow-hidden", className)} {...rest}>
            <GhostMain className="absolute left-6 top-16 size-64" />
            <GhostDirtyDeeds />
            <GhostOld />
            <LoginScreen />
        </div>
    );
}
