import React from 'react';
import { a, useSpring } from '@react-spring/web';
import { easeCubicOut } from 'd3-ease';

export function calcAllLength<T extends SVGGeometryElement>(selector: string, root: T | undefined): number[] {
    return [...(root || document).querySelectorAll<SVGGeometryElement>(selector)].map((el) => Math.ceil(el.getTotalLength()));
}

// export function quadInOut(t: number) {
//     return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
// }

// export function cubicOut(t: number) {
//     return --t * t * t + 1;
// }

const PATHS = [
    "M441.75 319.28c-19.43-6.8-33.65-23.62-44.16-41.32s-18.39-37-30.51-53.62-29.88-30.84-50.43-32c-12.39-.7-24.56 3.39-35.87 8.51-60.48 27.39-104.84 87.62-113 153.51-1.26 10.14-1.72 20.52.46 30.51 1.05 4.82 3 9.86 7.12 12.54 3.94 2.55 9 2.39 13.66 1.64 29.57-4.81 48.84-39.29 80.52-38.28 2.46.08 5.09.5 6.88 2.19s2.45 4.7 2.34 7.35c-.59 14.39-14.58 25.93-21.4 37.65-6.42 11-9.31 25.15 2.23 33.66a33.81 33.81 0 0 0 4.81 2.94c3.15 1.6 6.86 2.81 10.42 2 5.3-1.15 9.68-7.17 12.7-11.29 3.61-4.93 6.58-10.28 9.77-15.48 1.07-1.74 2.26-3.55 4.1-4.45 3.17-1.55 7.17.33 9.13 3.26 6.09 9.13 3.4 27.66 3 38.06-.33 9.5 4.4 37.25 20.33 24.41 3.67-2.95 5.7-7.75 8-11.73L350.3 455a20.9 20.9 0 0 1 3.61-5 2.48 2.48 0 0 1 1.45-.76c1-.05 1.72 1 2.18 1.91l.66 1.33c9.1 19.11 2 41.72 8.9 61.62 6.21 17.89 25.62 24.47 41.35 31.81A172.2 172.2 0 0 1 480 608.59c6.78 10.57 13.69 22.91 25.85 26 11.62 3 23.86-4.13 30.92-13.82s10.23-21.59 14.09-33a251.35 251.35 0 0 1 14.68-34.56c3.12-6 7.34-13.75 14.76-14.72 5.34-.7 8.73-2.85 13.41-5.82 15.8-10 31.32-22.19 39.25-39.61 3.22-7.09 4.81-15.9 9.17-22.38 1.75-2.58 4.53-4.66 7.65-4.75 5.29-.16 9.92 5.49 14.38 7.89a53.23 53.23 0 0 0 17.41 5.63 54.39 54.39 0 0 0 35.48-6.61c12-7.12 22.75-19.39 36.72-18.59 8.15.48 15.21 5.46 22.49 9.15a12.15 12.15 0 0 0 5.13 1.62c5.45.1 8.61-6 10.18-11.24 9.82-32.57 9.15-67.24 8.4-101.24-.93-42.39-2.25-86.39-21.27-124.28-4.89-9.74-12.28-19.84-23.09-21.25-15.51-2-35.08 13.34-47.91 20.46-12.32 6.85-24.45 14-36.56 21.24-8.11 4.83-16.47 9.78-24.72 14.6-8.79 5.14-18.9 8.84-27.19 15",
    "M376 276.16c10.45.86 20.6-4.43 29-10.16 13-8.83 24.41-20.21 36.46-30.27 12.6-10.52 25.66-20.6 40-28.61 15.59-8.68 34.71-17.61 52.75-18.63A76.64 76.64 0 0 1 585.38 204a79.64 79.64 0 0 1 19.92 22c23.72 38.94 13.59 84.93 3.53 126.31",
    "M520.11 306.55c-1.51 6.91-3.48 13.84-8.94 18.38-1.83 1.53-3.87 2.95-6.08 3.21-4.11.48-7.58-3.41-8.32-7.84-1.13-6.71 2.12-16.9 5.67-22.73a14.67 14.67 0 0 1 13.39-6.49c6.57.75 5.44 10.19 4.28 15.47ZM537.27 330.64c-2-7.44.3-20.32 7.47-24.57 5.06-3 12-.45 14.8 4.43 2.58 4.41 0 9.49-2.23 13.49-2.1 3.77-4.4 8.14-8.27 10.51-4.38 2.69-10.3 1.62-11.77-3.86Z",
    "M540.06 308.36a64.08 64.08 0 0 1 27.7-21l2.29 6.53A53.79 53.79 0 0 0 542 310ZM500.51 271.36c16.91 1.31 24.62 19.67 21.38 34.57L519 306c2-14-4.13-28.55-18.87-29.36Z",
    "M499.34 362.09c-17.53-5.38-29-19.13-31.29-35-11.31 27.47-2.26 55.24 20.38 62.19s50.66-9.75 62.29-37.39l.48-1.21c-13.65 12.02-33.59 17.01-51.86 11.41ZM715.14 425.93a348.48 348.48 0 0 0 32.13-155.72M312.29 246.06a162 162 0 0 0-26.39 96.58M349.09 415.26q-4.41-6.88-8.47-14a248.3 248.3 0 0 1-17.37-36.41c-12.34-33.15-13.56-70.11-5.22-104.36a173.81 173.81 0 0 1 6.69-21.43M738.38 268.66c-.79 4.4-1.2 8.48-3.37 12.33a34.59 34.59 0 0 0-2.49 6.8q-2.32 7.36-5 14.62-5.35 14.49-12 28.44A337.85 337.85 0 0 1 643 430.12a327 327 0 0 1-47.11 36.94",
];

const LENS = [1924, 399, 185, 172, 957];

export function CharacterGhostBabba({ show, onRest }: { show: boolean; onRest?: () => void; }) {

    const styles = useSpring({
        from: { o: 1, stroke: 'red', transform: 'scale(1)' },

        //to: { o: show ? 0 : 1 },

        // to: React.useCallback(async (next) => {
        //     await next({ o: show ? 0 : 1, config: { easing: cubicOut, duration: show ? 600 : 300, }, });
        //     await next({ stroke: show ? 'red' : 'rgb(76, 29, 149)', delay: 200 });
        //     await next({ transform: `scale(${show ? 0 : 1})`, config: { easing: cubicOut, duration: 1000 } });
        // }, [show]),

        to: [
            { o: show ? 0 : 1, config: { easing: easeCubicOut, duration: show ? 600 : 300, }, },
            { stroke: show ? 'red' : 'rgb(76, 29, 149)', delay: 200 },
            { transform: `scale(${show ? 0 : 1})`, config: { easing: easeCubicOut, duration: 1000 } },
            { delay: 300 },
        ],

        // to: [
        //     { o: show ? 0 : 1 },
        //     { color: show ? 'red' : 'white' },
        // ],

        //config: { easing: cubicOut, duration: show ? 600 : 300, },
        //delay: show ? 200 : 400,
        onRest: () => show && onRest && onRest()
    });

    return (
        <div className="relative z-10">
            <div className="absolute top-4 right-64 w-32 h-32 text-purple-900">
                <svg viewBox="0 0 680 478" stroke="currentColor" strokeWidth="7" className="transform scale-x-[-1] fill-[none]" >
                    {console.log('st', styles)}
                    <a.g style={{ transform: styles.transform, transformOrigin: 'bottom right' }}>
                        <g transform="translate(-150 -167)">
                            <a.path stroke={styles.stroke} style={{ strokeDashoffset: styles.o.to({ range: [0, 1], output: [0, LENS[0]] }), strokeDasharray: LENS[0], }} d={PATHS[0]} />
                            <a.path stroke={styles.stroke} style={{ strokeDashoffset: styles.o.to({ range: [0, 1], output: [0, LENS[1]] }), strokeDasharray: LENS[1], }} d={PATHS[1]} />
                            <a.path stroke={styles.stroke} style={{ strokeDashoffset: styles.o.to({ range: [0, 1], output: [0, LENS[2]] }), strokeDasharray: LENS[2], }} d={PATHS[2]} />
                            <a.path stroke={styles.stroke} style={{ strokeDashoffset: styles.o.to({ range: [0, 1], output: [0, LENS[3]] }), strokeDasharray: LENS[3], }} d={PATHS[3]} />
                            <a.path stroke={styles.stroke} style={{ strokeDashoffset: styles.o.to({ range: [0, 1], output: [0, LENS[4]] }), strokeDasharray: LENS[4], }} d={PATHS[4]} />
                        </g>
                    </a.g>
                </svg>
            </div>
        </div>
    );
}
