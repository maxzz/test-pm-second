import { HTMLAttributes } from "react";
import { useSpring } from "@react-spring/web";
import { IconGhostDirtyDeeds } from "@/ui/icons";
import { classNames } from "@/utils";

export function GhostDirtyDeeds({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    const [ani, api] = useSpring(
        () => ({
            from: { opacity: 0 },
            to: { opacity: 1 },
            config: { duration: 2000 },
            onRest: () => api.start({ opacity: 0 }),
        })
    );

    return (
        <div className={classNames("text-red-400/20 1scale-y-[1]", className)} {...rest}>
            <IconGhostDirtyDeeds className="" />
        </div>
    );
}