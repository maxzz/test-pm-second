import React, { HTMLAttributes } from "react";
import { classNames } from "../utils/classnames";
import { LoginScreen } from "./LoginScreen";
import { GhostMain } from "./GhostMain";
import { GhostOld } from "./GhostOld";

export function AppSection2_Main({className, ...rest}: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={classNames("relative h-full flex items-center justify-center", className)} {...rest}>
            <GhostMain />
            <GhostOld />
            <LoginScreen />
        </div>
    );
}
