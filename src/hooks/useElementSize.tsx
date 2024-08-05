import { RefObject, useEffect, useState } from "react";

export function useElementSize(parentRef: RefObject<Element>): { width: number; height: number; } {
    const [size, setSize] = useState({ width: 0, height: 0 });

    useEffect(
        () => {
            if (!parentRef.current?.nodeType) {
                return;
            }

            function resizerCb([entry]: ResizeObserverEntry[]) {
                setSize({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                });
            }

            const observer = new window.ResizeObserver(resizerCb);
            observer.observe(parentRef.current);

            return () => observer.disconnect();
        }, [parentRef]
    );

    return size;
}
