import React, { useState } from 'react';
import { useAtomValue } from 'jotai';
import { ghostTargetAtom, workingAreaAtom } from '../store/store';
import { IconGhost } from './UI/Icons';
import { a, easings, useSpring, useSpringRef } from '@react-spring/web';

const AIconGhost = a(IconGhost);

const animationProps = {
    from: { opacity: .25, scale: '0.5, 0.5', n: 0, fill: '#312e81', },
    to: [
        { n: 1, opacity: 1, config: { duration: 900, }, }, // #312e81 to have it flat
        { scale: '0.1, 1', config: { duration: 300, }, },
        { scale: '1, 0.5', config: { duration: 600, }, },
        { scale: '0.7, 1', config: { duration: 400, }, },
        { scale: '1.1, 0.9', config: { duration: 600, }, },
        { scale: '0.9, 1', config: { duration: 400, }, },
        { scale: '0, 0', },
        { scale: '-1, 1', opacity: 1, fill: '#ff0000', },
    ]
};

const xPos = (pos: number, max: number) => ({ range: [0, 0.25, 0.5, 0.75, 1], output: [100, max * 0.7, max * 0.1, max * 0.5, pos + 8] });
const yPos = (pos: number, max: number) => ({ range: [0, 0.5, 1], output: [100, pos / 2, pos] });

const getTargetPos = (target: HTMLDivElement | null, def: { x: number; y: number; }) => {
    const pos = target?.getBoundingClientRect() || def;
    pos.x -= 36; // Left edge of ghost SVG.
    pos.y -= 94; // App header height (64) and top edge of ghost SVG (30).
    return pos;
};

export function GhostMain() {
    const ghostTarget = useAtomValue(ghostTargetAtom);
    const { width: wArea, height: hArea } = useAtomValue(workingAreaAtom);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    const api = useSpringRef();
    const styles = useSpring({
        ref: api,
        from: { opacity: 0, scale: '0.5, 0.5', n: 0, fill: '#312e81', },
    });

    const { n, ...rest } = styles;
    return (
        <div>
            <input
                className="self-center mr-2 px-2 py-1 text-xs text-yellow-100 border-yellow-100 hover:bg-slate-900/50 border rounded active:scale-[.97] cursor-pointer"
                type="button"
                value="Reload"
                onClick={() => {
                    setPos(getTargetPos(ghostTarget, { x: wArea / 2, y: hArea / 2 }));
                    api.start(animationProps);
                }}
            />

            {/* <AIconGhost style={styles} className="absolute left-0 top-0 w-32 h-32 text-indigo-900" strokeWidth={.7} /> */}

            <AIconGhost
                data-n={n}
                style={{
                    x: n.to(xPos(pos.x, wArea)),
                    y: n.to(yPos(pos.y, hArea)),
                    ...rest,
                }}
                className="absolute left-0 top-0 w-32 h-32 fill-slate-500 text-indigo-900" strokeWidth={.7}
            />
        </div>
    );
}
