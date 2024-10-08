import { HTMLAttributes, useEffect } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { useSpring, a } from "@react-spring/web";
import { showBubbaAtom, ghostTargetElementAtom } from "@/store";
import { IconUser } from '@/ui/icons';

export function FormAnimatedLogo({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {

    const showBubba = useAtomValue(showBubbaAtom);
    const setGhostTargetElement = useSetAtom(ghostTargetElementAtom);

    const [ani, api] = useSpring(
        () => ({
            from: { opacity: 0, },
            to: { opacity: 1, },
            delay: 100,
        })
    );

    useEffect(
        () => {
            if (showBubba) {
                api.start({
                    opacity: 1,
                    delay: 1200,
                });
            }
        }, [showBubba]
    );

    return (
        <a.div ref={setGhostTargetElement} className={className} style={ani} {...rest}>
            <IconUser className="size-16" />
        </a.div>
    );
}
