import { HTMLAttributes, useEffect, useState } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { a, easings, useSpring, useSpringRef } from '@react-spring/web';
import { ghostTargetElementAtom, loginStartedAtom, workingAreaAtom } from '@/store';
import { IconGhost } from '@/ui/icons';
import { classNames } from '@/utils';

const animationProps = {
    from: {
        opacity: 0,
        scale: '0.5, 0.5',
        nmb: 0,
        fill: '#312e81',
    },
    to: [
        { nmb: 1, opacity: 1,                       /**/ config: { duration: 0, }, }, // skip all move transitions to test the rest of animation
        { nmb: 1, opacity: 1,                       /**/ config: { duration: 900, }, }, // #312e81 to have it flat

        { scale: '0.1, 3',                          /**/ config: { duration: 300, }, },
        { scale: '2, 0.5',                          /**/ config: { duration: 600, }, },
        { scale: '0.7, 2',                          /**/ config: { duration: 400, }, },
        { scale: '1.1, 0.9',                        /**/ config: { duration: 600, }, },
        { scale: '0.9, 2',                          /**/ config: { duration: 400, }, },
        { scale: '0, 0', },
        { scale: '-1, 1', opacity: 1, },

        { scale: '-1.2, 1.2', fill: '#ff0000',  /**/ config: { duration: 1200, }, },
        { opacity: 0.5, fill: '#312e81',        /**/ config: { duration: 500, }, },
        { opacity: 0, fill: '#00000000',          /**/ config: { duration: 200, }, }, // from bkg #c7d2fe
    ]
};

function getTargetPosOffset(target: HTMLDivElement | null, def: { x: number; y: number; }) {
    const pos = target?.getBoundingClientRect() || def;
    pos.x -= 36; // Left edge of ghost SVG.
    pos.y -= 94; // App header height (64) and top edge of ghost SVG (30).
    return pos;
}

const xPos = (pos: number, max: number) => ({
    range: [0, 0.25, 0.5, 0.75, 1],
    output: [100, max * 0.7, max * 0.1, max * 0.5, pos + 8],
});

const yPos = (pos: number, max: number) => ({
    range: [0, 0.5, 1],
    output: [100, pos / 2, pos],
});

const GhostAnimatedIcon = a(IconGhost);

export function GhostMain({ className, ...rest }: HTMLAttributes<SVGSVGElement>) {
    const ghostTargetElement = useAtomValue(ghostTargetElementAtom);

    const { width: areaWidth, height: areaHeight } = useAtomValue(workingAreaAtom);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    const api = useSpringRef();
    const ani = useSpring({ ref: api, from: animationProps.from });
    const { nmb, ...restAni } = ani;

    const [loginStarted, setLoginStarted] = useAtom(loginStartedAtom);

    useEffect(
        () => {
            if (loginStarted) {
                api.stop(true); // if we started again by reseting loginStarted, i.e. loginStarted -> false -> true
                api.set(animationProps.from);
                start();
            }
        }, [loginStarted]
    );

    function start() {
        setPos(getTargetPosOffset(ghostTargetElement, { x: areaWidth / 2, y: areaHeight / 2 }));

        api.start({
            ...animationProps,
            onRest: ({ finished }) => finished && setLoginStarted(false),
        });
    }

    if (!loginStarted) {
        return null;
    }

    return (
        <GhostAnimatedIcon
            data-n={nmb}
            style={{
                x: nmb.to(xPos(pos.x, areaWidth)),
                y: nmb.to(yPos(pos.y, areaHeight)),
                ...restAni,
            }}
            className={classNames("stroke-[.7] fill-slate-500 text-indigo-900", className)}
            {...rest}
        />
    );
}
