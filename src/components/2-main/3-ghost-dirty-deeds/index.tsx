import { HTMLAttributes } from "react";
import { useAtomValue } from "jotai";
import { a, useSpring } from "@react-spring/web";
import { workingAreaAtom } from "@/store";
import { IconGhostDirtyDeeds } from "@/ui/icons";
import { classNames } from "@/utils";

export function GhostDirtyDeeds({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {

    const setWorkingArea = useAtomValue(workingAreaAtom);

    const [ani, api] = useSpring(
        () => ({
            from: {
                opacity: 1,
                nmb: 1,
            },
            to: async (next, cancel) => {
                await next({ nmb: 0, opacity: 0, config: { duration: 2200 } });
                await next({ nmb: 1, opacity: 1, config: { duration: 2900 } });
                await next({ opacity: 0, config: { duration: 2900 } });
            },
            // config: { duration: 2000 },
            // onRest: () => api.start({ opacity: 0 }),
        })
    );

    return (
        <a.div
            style={{
                ...ani,
                // width: ani.nmb.to((n) => setWorkingArea.width * (1 - n)),
                transform: ani.nmb.to((nmb) => `scaleY(${nmb})`),
                // transform: ani.nmb.to((nmb) => `scaleX(${1 - nmb}) scaleY(${nmb})`), <- Not working
            }}
            className={classNames("text-red-400/20 scale-[.5]", className)}
            {...rest}
        >
            <IconGhostDirtyDeeds className="" />
        </a.div>
    );
}
