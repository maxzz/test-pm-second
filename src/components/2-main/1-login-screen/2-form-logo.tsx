import { showBabbaAtom, ghostTargetAtom } from "@/store/store";
import { IconUser } from "@/ui/icons";
import { useSpring, a } from "@react-spring/web";
import { useAtomValue, useSetAtom } from "jotai";
import { useEffect } from "react";

export function FormLogo() {
    const showBabba = useAtomValue(showBabbaAtom);

    const [styles, api] = useSpring(() => ({
        from: { opacity: 0, },
        to: { opacity: 1, },
        delay: 100,
    }));

    useEffect(() => {
        if (showBabba) {
            api.start({ opacity: 1, delay: 1200 });
        }
    }, [showBabba]);

    const setGhostTarget = useSetAtom(ghostTargetAtom);

    return (
        <a.div ref={setGhostTarget} className="mb-4 pb-2 border-indigo-700 border-b" style={styles}>
            <IconUser className="w-16 h-16 mb-2 text-indigo-400" />
        </a.div>
    );
}
