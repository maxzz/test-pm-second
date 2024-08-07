import { a, useSpring, config } from "@react-spring/web";
import { IconGhost } from '@/ui/icons/IconGhost';

const AIconGhost = a(IconGhost);
const color = '#e0e7ff80'; //text-indigo-100/50

export function HeaderGhost() {
    const styles = useSpring({
        from: {
            x: 1000,
            opacity: 0,
            scale: 1,
            color,
        },
        to: [
            { opacity: 1, x: 0,         /**/ config: config.default, },
            { opacity: 1, x: -400,      /**/ config: config.default, },
            { opacity: 1, x: 0,         /**/ config: config.default, },
            { scale: 2, color: 'white', /**/ config: { duration: 700, }, },
            { scale: 1, },
            { scale: 2, color: 'white', /**/ config: { duration: 400, }, },
            { scale: 1, color, x: -50 },
            { opacity: 0, scale: 0,     /**/ config: config.default, },
        ],
        config: { duration: 600, },
    });

    return (
        <AIconGhost style={styles} className="size-8 text-indigo-100/50" />
    );
}
