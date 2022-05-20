import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { showBabbaAtom } from '../store/store';
import { IconGhost } from './UI/Icons';
import { a, easings, useSpring } from '@react-spring/web';

const AIconGhost = a(IconGhost);

export function GhostMain() {
    // const [show, setShowBabba] = useAtom(showBabbaAtom2);

    const [open, setOpen] = React.useState(true);

    // const [show, setShowBabba] = useState(false);
    // const [styles, api] = useSpring(() => ({
    //     from: { opacity: 0, scaleX: 1, },
    //     to: [
    //         { opacity: 1, scaleX: -1, },
    //         { opacity: 1, scaleX: 1, },
    //         { opacity: 1, scaleX: -1, },
    //     ],
    //     reset: open,
    //     config: { easings: easings.easeOutBounce, duration: 200, },
    //     //
    // }));
    // React.useEffect(() => setShowBabba(true));

    const styles = useSpring({
        from: { opacity: 0, scaleX: 1, },
        to: [
            { opacity: 1, scaleX: -1, },
            { opacity: 1, scaleX: 1, },
            { opacity: 1, scaleX: -1, },
        ],
        reset: open,
        config: { easings: easings.easeOutBounce, duration: 200, },
        //
    });

    return (
        <div>
            <input
                className="self-center mr-2 px-2 py-1 text-xs text-yellow-100 border-yellow-100 hover:bg-slate-900/50 border rounded active:scale-[.97] cursor-pointer"
                type="button"
                value="Reload"
                onClick={() => {
                    setOpen((v) => !v);
                    //api.start();
                }}
            />

            <AIconGhost style={styles} className="absolute left-0 top-0 w-32 h-32 text-indigo-900" strokeWidth={.7} />
        </div>
    );
}
