import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { showBabbaAtom } from '../store/store';
import { IconGhost } from './UI/Icons';
import { a, easings, useSpring, useSpringRef } from '@react-spring/web';

const AIconGhost = a(IconGhost);

export function GhostMain() {
    // const [show, setShowBabba] = useAtom(showBabbaAtom2);

    const [open, setOpen] = React.useState(false);

    /*NO* /
    const [styles, api] = useSpring(() => ({
        from: { opacity: 0, scaleX: 1, },
        to: [
            { opacity: 1, scaleX: -1, },
            { opacity: 1, scaleX: 1, },
            { opacity: 1, scaleX: -1, },
        ],
        reset: open,
        config: { easings: easings.easeOutBounce, duration: 200, },
    }));
    /**/

    /*OK* /
    const styles = useSpring({
        from: { opacity: 0, scale: [1, 0.5], },
        to: [
            { opacity: 1, scale: [2.5, 0.5], },
            { opacity: 1, scale: [0.3, 1.3], },
            { opacity: 1, scale: [1.5, 0.5], },
            { opacity: 1, scale: [0.3, 1], },
            { opacity: 1, scale: [1.5, 0.5], },
            { opacity: 1, scale: [0.2, 0.5], config: { easings: easings.easeOutBounce, duration: 600, }, },
            { opacity: 1, scale: [-0.2, 0.5], config: { easings: easings.easeOutBounce, duration: 100, }, },
            { opacity: 1, scale: [-1, 1], config: { easings: easings.easeOutBounce, duration: 600, }, },
        ],
        reset: open,
        //config: { easings: easings.easeOutBounce, duration: 200, },
    });
    /**/

    /*OK* /
    const [styles, api] = useSpring({
        //ref: springRef,
        from: { opacity: 0, x: 0, y: 0, scale: [1, 1] },
        to: [
            { opacity: 1, scale: [0.2, 0.2], },
            { opacity: 1, scale: [1.5, 1], },
            { opacity: 1, scale: [0.3, 1.3], },
            { opacity: 1, scale: [1.5, 0.5], },
            { opacity: 1, scale: [0.3, 1], },
            { opacity: 1, scale: [1.5, 0.5], },
            { x: 100, y: 500, },
            { opacity: 1, scale: [0.2, 0.5], config: { easings: easings.easeOutBounce, duration: 600, }, },
            { opacity: 1, scale: [-0.2, 0.5], config: { easings: easings.easeOutBounce, duration: 100, }, },
            { opacity: 1, scale: [-1, 1], config: { easings: easings.easeOutBounce, duration: 600, }, },
            { opacity: 0, x: 0, y: 0, },
        ],
        reset: true,
        //config: { easings: easings.easeOutBounce, duration: 200, },
    }, [open]);
    /**/

    /*OK* /
    //const springRef = useSpringRef();
    const [styles, api] = useSpring({
        //ref: springRef,
        from: { opacity: 0, x: 0, y: 0, scale: '1, 1' },
        to: [
            { x: 0, y: 0, },
            { opacity: 1, scale: '0.5, 1', config: { easings: easings.easeOutBounce, duration: 2200, }, },
            { scale: '0.2, 0.5', config: { easings: easings.easeOutBounce, duration: 2200, }, },
            { x: 100, y: 500, },
        ],
        reset: true,
        config: { easings: easings.easeOutBounce, duration: 1000, },
    }, [open]);
    /**/

    /*OK*/
    const springRef = useSpringRef();
    const styles = useSpring({
        ref: springRef,
        from: { opacity: 0, x: 0, y: 0, scale: '1, 1' },
        to: [
            { opacity: 1, scale: '0.5, 1', config: { easings: easings.easeOutBounce, duration: 2200, }, },
            { scale: '0.2, 0.5', config: { easings: easings.easeOutBounce, duration: 2200, }, },
            { x: 100, y: 500, },
        ],
        reset: true,
        config: { easings: easings.easeOutBounce, duration: 1000, },
    });
    useEffect(() => { springRef.start(); }, [open]);
    /**/

    return (
        <div>
            <input
                className="self-center mr-2 px-2 py-1 text-xs text-yellow-100 border-yellow-100 hover:bg-slate-900/50 border rounded active:scale-[.97] cursor-pointer"
                type="button"
                value="Reload"
                onClick={() => {
                    setOpen((v) => !v);
                    console.log('click', open);
                    //api.start();
                }}
            />

            <AIconGhost style={styles} className="absolute left-0 top-0 w-32 h-32 text-indigo-900" strokeWidth={.7} />
        </div>
    );
}
