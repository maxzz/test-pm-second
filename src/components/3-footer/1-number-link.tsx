import { classNames } from "@/utils/classnames";
import { AnchorHTMLAttributes } from "react";

const numLinkClasses = "\
px-2 mt-1 size-6 text-xs \
hover:text-indigo-200 hover:bg-indigo-700 hover:scale-[1.2] transition-transform \
border-current border rounded \
grid place-items-center \
";

export function NumberLink({ label, className, ...rest }: { label: string; } & AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
        <a className={classNames(numLinkClasses, className)} {...rest}>
            {label}
        </a>
    );
}
