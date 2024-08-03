import { useEffect, useRef, useState } from "react";
import { IconGhostBubba } from '@/ui/icons';

export function GhostBabbaWLengthCalc() {
    const pathRef = useRef<SVGPathElement>(null);
    const [pathLen, setPathLen] = useState(0);

    useEffect(() => {
        if (pathRef.current) {
            setPathLen(pathRef.current.getTotalLength()); //console.log({pathLen: pathLen});
        }
    }, [pathRef.current]);

    return (
        <div className="relative z-10">
            <div className="absolute top-4 right-64 w-32 h-32 text-indigo-900">
                <IconGhostBubba ref={pathRef} className="transform scale-x-[-1] fill-[red]" />
            </div>
        </div>
    );
}
