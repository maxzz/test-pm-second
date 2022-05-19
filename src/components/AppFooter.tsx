import React, { AnchorHTMLAttributes } from 'react';
import { classNames } from '../utils/classnames';

function NumberLink({ label, className, ...rest }: { label: string; } & AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
        <a
            className={classNames(
                "px-2 mt-1 w-6 h-6 text-xs border-current border rounded grid place-items-center",
                "hover:text-indigo-200 hover:bg-indigo-700",
                className,
            )}
            {...rest}
        >
            {label}
        </a>
    );
}

function GithubLink({ className, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
        <a
            className={classNames(
                "p-1 pt-2 pb-0 border-current border rounded-full",
                "hover:text-indigo-200 hover:bg-indigo-700",
                className,
            )}
            target="_blank"
            {...rest}
        >
            <svg className="w-5 h-5 stroke-1 fill-transparent stroke-current" viewBox="0 0 24 24">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
        </a>
    );
}

export function AppFooter() {
    return (
        <footer className="p-4 flex items-center justify-between bg-indigo-900 text-indigo-600">
            <GithubLink href="https://github.com/maxzz/test-pm-second/#other-test-pages" title="Open GitHub source code" />

            <div className="flex items-center space-x-2">
                <NumberLink label="1" href="https://maxzz.github.io/test-pm" title="Open 5 logins test" />
                <NumberLink label="2" href="https://maxzz.github.io/test-pm-second" title="Reload this page" />
                <NumberLink label="3" href="https://maxzz.github.io/test-pm-domain-logins" title="Open domain A/B tests" />
                <NumberLink label="4" href="https://maxzz.github.io/test-pm-domain-logins22" title="Open page reloads new test" />
            </div>
        </footer>
    );
}
