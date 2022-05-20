import React, { useState } from "react";
import { CharacterGhostBabba } from "./CharacterGhostBabba";
import { LoginScreen } from "./LoginScreen";
import { GhostDeartyDeeds } from "./UI/Icons";

export function AppSection2_Main() {
    const [showBabba, setShowBabba] = useState(false);

    // useEffect(() => {
    //     if (showBabba) {
    //         let timeout = setTimeout(() => setShowBabba(false), 4000);
    //         return () => clearTimeout(timeout);
    //     }
    // }, [showBabba]);

    return (<>
        {/* {showBabba && <GhostBubba />} */}
        {/* {<GhostBabba />} */}

        {<CharacterGhostBabba show={showBabba} onRest={() => setShowBabba(false)} />}
        {/* {<CharacterGhostBabba show={true} />} */}

        {!showBabba &&
            <LoginScreen showBabba={showBabba} setShowBabba={setShowBabba} />
        }
        {/* <GhostDeartyDeeds /> */}
    </>);
}
