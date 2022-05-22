import React from 'react';
import { useAtomValue } from 'jotai';
import { ghostTargetAtom, workingAreaAtom } from '../store/store';
import { IconGhost } from './UI/Icons';
import { a, easings, useSpring, useSpringRef } from '@react-spring/web';

const AIconGhost = a(IconGhost);

export function GhostMain() {
    // const [show, setShowBabba] = useAtom(showBabbaAtom2);

    const [open, setOpen] = React.useState(false);

    const api = useSpringRef();
    const styles = useSpring({
        //from: { opacity: 1, scale: '1, 1', n: 0, fill: '#312e8180', },
        ref: api,
        //from: { n: 0, opacity: 0 },
        from: { opacity: 0, scale: '0.5, 0.5', n: 0, fill: '#312e81', },
        //reset: true,
        //config: { easings: easings.easeOutBounce, duration: 400, },
    });

    const { n, ...rest } = styles;

    const { width: wArea, height: hArea } = useAtomValue(workingAreaAtom);
    const ghostTarget = useAtomValue(ghostTargetAtom);

    const pos = ghostTarget?.getBoundingClientRect() || { x: wArea / 2, y: hArea / 2 };
    pos.x -= 36; // Left edge of ghost SVG.
    pos.y -= 94; // App header height (64) and top edge of ghost SVG (30).

    //console.log('ghostTarget', ghostTarget ? {x: pos.x, y: pos.y} : '-------------null', {wArea, hArea});

    return (
        <div>
            <input
                className="self-center mr-2 px-2 py-1 text-xs text-yellow-100 border-yellow-100 hover:bg-slate-900/50 border rounded active:scale-[.97] cursor-pointer"
                type="button"
                value="Reload"
                onClick={() => {
                    setOpen((v) => !v);
                    //console.log('click', open);
                    api.start({
                        from: { opacity: .25, scale: '0.5, 0.5', n: 0, fill: '#312e81', },
                        to: [
                            { n: 1, opacity: 1, config: { duration: 900, }, }, // #312e81 to have it flat
                            { scale: '0.1, 1', config: { duration: 300, }, },
                            { scale: '1, 0.5', config: { duration: 600, }, },
                            { scale: '0.7, 1', config: { duration: 600, }, },
                            { scale: '1.1, 0.9', config: { duration: 300, }, },
                            { scale: '0.9, 1', config: { duration: 600, }, },
                            { scale: '0, 0', },
                            { scale: '-1, 1', opacity: 1, fill: '#ff0000', },
                        ]
                    }
                    );
                }}
            />

            {/* <AIconGhost style={styles} className="absolute left-0 top-0 w-32 h-32 text-indigo-900" strokeWidth={.7} /> */}

            <AIconGhost data-n={n} style={{
                x: n.to({ range: [0, 0.25, 0.5, 0.75, 1], output: [100, wArea * 0.7, wArea * 0.1, wArea * 0.5, pos.x + 8] }),
                y: n.to({ range: [0, 0.5, 1], output: [100, pos.y / 2, pos.y] }),
                ...rest,
            }} className="absolute left-0 top-0 w-32 h-32 fill-slate-500 text-indigo-900" strokeWidth={.7} />
        </div>
    );
}
