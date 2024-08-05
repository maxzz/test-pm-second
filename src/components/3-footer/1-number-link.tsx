import { classNames } from "@/utils/classnames";
import { AnchorHTMLAttributes } from "react";

export function NumberLink({ label, className, ...rest }: { label: string; } & AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
        <a
            className={classNames(
                "px-2 mt-1 w-6 h-6 text-xs border-current border rounded grid place-items-center",
                "hover:text-indigo-200 hover:bg-indigo-700 hover:scale-[1.2] transition-transform",
                className
            )}
            {...rest}
        >
            {label}
        </a>
    );
}
