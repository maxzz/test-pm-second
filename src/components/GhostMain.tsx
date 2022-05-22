import React from 'react';
import { useAtomValue } from 'jotai';
import { ghostTargetAtom, workingAreaAtom } from '../store/store';
import { IconGhost } from './UI/Icons';
import { a, easings, useSpring } from '@react-spring/web';

const AIconGhost = a(IconGhost);

// 1. Don't use short number notation like .5 use only 0.5.
// 2. animated param should be defined in 'from' before appearing into 'to'.

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

    /*OK* /
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

    const [styles, api] = useSpring({
        //from: { opacity: 1, scale: '1, 1', n: 0, fill: '#312e8180', },
        from: { opacity: .25, scale: '0.5, 0.5', n: 0, fill: '#00000000', },
        to: [
            { n: 1, fill: '#00000000', config: { duration: 900, }, }, // #312e81 to have it flat
            { scale: '0.1, 1', config: { duration: 300, }, },
            { scale: '1, 0.5', config: { duration: 600, }, },
            { scale: '0.7, 1', config: { duration: 600, }, },
            { scale: '1.1, 0.9', config: { duration: 300, }, },
            { scale: '0.9, 1', config: { duration: 600, }, },
            { scale: '0, 0', },
            { scale: '-1, 1', opacity: 1, fill: '#ff0000', },
        ],
        reset: true,
        //config: { easings: easings.easeOutBounce, duration: 400, },
    }, [open]);

    const { n, ...rest } = styles;

    const {width: wArea, height: hArea} = useAtomValue(workingAreaAtom);
    const ghostTarget = useAtomValue(ghostTargetAtom);

    const pos = ghostTarget?.getBoundingClientRect() || { x: wArea / 2, y: hArea / 2 };
    pos.x -= 36; // Left edge of ghost SVG.
    pos.y -= 94; // App header height (64) and top edge of ghost SVG (30).

    console.log('ghostTarget', ghostTarget ? {x: pos.x, y: pos.y} : '-------------null', {wArea, hArea});

    return (
        <div>
            <input
                className="self-center mr-2 px-2 py-1 text-xs text-yellow-100 border-yellow-100 hover:bg-slate-900/50 border rounded active:scale-[.97] cursor-pointer"
                type="button"
                value="Reload"
                onClick={() => {
                    setOpen((v) => !v);
                    //console.log('click', open);
                    //api.start();
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
