import React, { HTMLAttributes } from "react";
import { useAtom } from "jotai";
import { showBabbaAtom } from "../store/store";
import { classNames } from "../utils/classnames";
import { LoginScreen } from "./LoginScreen";
import { GhostMain } from "./GhostMain";
import { GhostOld } from "./GhostOld";
import { IconGhostDirtyDeeds } from "./UI/Icons";
import { GhostBabbaWLengthCalc } from "./GhostBabbaWLengthCalc";

export function AppSection2_Main({className, ...rest}: HTMLAttributes<HTMLDivElement>) {
    const [showBabba, setShowBabba] = useAtom(showBabbaAtom);

    // useEffect(() => {
    //     if (showBabba) {
    //         let timeout = setTimeout(() => setShowBabba(false), 4000);
    //         return () => clearTimeout(timeout);
    //     }
    // }, [showBabba]);

    return (
        <div className={classNames("relative h-full flex items-center justify-center", className)} {...rest}>
            {/* {showBabba && <GhostBabbaWLengthCalc />} */}
            {/* {<GhostBabbaWLengthCalc />} */}
            {/* <IconGhostDirtyDeeds /> */}

            <GhostMain />

            {<GhostOld show={showBabba} onRest={() => setShowBabba(false)} />}
            {/* {<GhostOld show={true} />} */}

            {!showBabba &&
                <LoginScreen showBabba={showBabba} setShowBabba={setShowBabba} />
            }
        </div>
    );
}
