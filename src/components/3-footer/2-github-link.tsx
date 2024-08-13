import { AnchorHTMLAttributes } from "react";
import { classNames } from "@/utils";

const githubOuterClasses = "\
p-1 pt-2 pb-0 \
\
text-indigo-400 hover:bg-indigo-700 border-indigo-400 drop-shadow-[0_1px_1px_#020636eb] \
opacity-25 hover:opacity-100 \
hover:scale-[1.1] \
transition-transform \
border rounded-full \
";

export function GithubLink({ className, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
        <a className={classNames(githubOuterClasses, className)} target="_blank" {...rest}>
            <IconGithubInner />
        </a>
    );
}

function IconGithubInner() {
    return (
        <svg className="size-5 stroke-1 fill-transparent stroke-current" viewBox="0 0 24 24">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
    );
}
