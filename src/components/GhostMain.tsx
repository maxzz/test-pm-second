import React, { useState } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { ghostTargetAtom, loginStartedAtom, workingAreaAtom } from '../store/store';
import { IconGhost } from '../ui/icons';
import { a, easings, useSpring, useSpringRef } from '@react-spring/web';
import { ReloadButton } from '../ui/ReloadButton';

const GhostAnimatedIcon = a(IconGhost);

function getTargetPos(target: HTMLDivElement | null, def: { x: number; y: number; }) {
    const pos = target?.getBoundingClientRect() || def;
    pos.x -= 36; // Left edge of ghost SVG.
    pos.y -= 94; // App header height (64) and top edge of ghost SVG (30).
    return pos;
}

const animationProps = {
    from: {
        opacity: 0,
        scale: '0.5, 0.5',
        n: 0,
        fill: '#312e81',
    },
    to: [
        { n: 1, opacity: 1, config: { duration: 0, }, }, // skip all move transitions to test the rest of animation
        { n: 1, opacity: 1, config: { duration: 900, }, }, // #312e81 to have it flat

        { scale: '0.1, 1', config: { duration: 300, }, },
        { scale: '1, 0.5', config: { duration: 600, }, },
        { scale: '0.7, 1', config: { duration: 400, }, },
        { scale: '1.1, 0.9', config: { duration: 600, }, },
        { scale: '0.9, 1', config: { duration: 400, }, },
        { scale: '0, 0', },
        { scale: '-1, 1', opacity: 1, },

        { fill: '#ff0000', config: { duration: 1200, }, },
        { opacity: 0.5, fill: '#312e81', config: { duration: 500, }, },
        { opacity: 0, fill: '#00000000', config: { duration: 200, }, }, // from bkg #c7d2fe
    ]
};

const xPos = (pos: number, max: number) => ({
    range: [0, 0.25, 0.5, 0.75, 1],
    output: [100, max * 0.7, max * 0.1, max * 0.5, pos + 8],
});

const yPos = (pos: number, max: number) => ({
    range: [0, 0.5, 1],
    output: [100, pos / 2, pos],
});

export function GhostMain() {
    const ghostTarget = useAtomValue(ghostTargetAtom);
    const { width: wArea, height: hArea } = useAtomValue(workingAreaAtom);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    const api = useSpringRef();
    const ani = useSpring({ ref: api, from: animationProps.from });
    const { n, ...rest } = ani;

    const [loginStarted, setLoginStarted] = useAtom(loginStartedAtom);

    React.useEffect(
        () => {
            if (loginStarted) {
                api.stop(true); // if we started again by reseting loginStarted, i.e. loginStarted -> false -> true
                api.set(animationProps.from);
                start();
            }
        }, [loginStarted]
    );

    function start() {
        setPos(getTargetPos(ghostTarget, { x: wArea / 2, y: hArea / 2 }));
        api.start({
            ...animationProps,
            onRest: ({ finished }) => finished && setLoginStarted(false),
        });
    }

    return (
        <div>
            {/* <ReloadButton /> */}

            {loginStarted && (
                <GhostAnimatedIcon
                    data-n={n}
                    style={{
                        x: n.to(xPos(pos.x, wArea)),
                        y: n.to(yPos(pos.y, hArea)),
                        ...rest,
                    }}
                    className="absolute left-0 top-0 w-32 h-32 fill-slate-500 text-indigo-900" strokeWidth={.7}
                />
            )}
        </div>
    );
}
