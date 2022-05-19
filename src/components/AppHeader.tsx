import React, { AnchorHTMLAttributes, HTMLAttributes } from "react";

function NumberLink({ label, title, ...rest }: { label: string; } & AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
        <a {...rest} >
            <div className="px-2 mt-1 w-6 h-6 text-xs text-gray-100 border-gray-100 border rounded grid place-items-center" title={title}>
                {label}
            </div>
        </a>
    );
}

function GithubLink(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
        <a className="p-1 pt-2 pb-0 border rounded-full text-gray-100 border-gray-100" target="_blank" {...props}>
            <div className="w-5 h-5">
                <svg className="stroke-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
            </div>
        </a>
    );
}

export function AppHeader() {
    return (
        <header
            className="p-4 flex items-center justify-between bg-indigo-900"
            style={{ boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.2)' }}
        >
            <div className="ml-2 pb-1 text-[1.4rem] font-thin text-white" style={{ textShadow: '2px 3px #735bbf' }}>
                Password Manager Another Test
            </div>
            <div className="flex items-center">

                <div className="mr-2 flex space-x-2">
                    <NumberLink label="1" href="https://maxzz.github.io/test-pm" title="Open original pm-test" />
                    <NumberLink label="2" href="https://maxzz.github.io/test-pm-second" title="Reload this page" />
                    <NumberLink label="3" href="https://maxzz.github.io/test-pm-domain-logins" title="Open test-pm-domain-logins" />
                    <NumberLink label="4" href="https://maxzz.github.io/test-pm-domain-logins22" title="Open test-pm-domain-logins" />
                </div>

                {/* <div className="mr-2 flex space-x-2">
                    <a href="https://maxzz.github.io/test-pm">
                        <div className="px-2 mt-1 w-6 h-6 text-xs text-gray-100 border-gray-100 border rounded grid place-items-center" title="Open original pm-test">1</div>
                    </a>
                    <a href="https://maxzz.github.io/test-pm-second">
                        <div className="px-2 mt-1 w-6 h-6 text-xs text-gray-100 border-gray-100 border rounded grid place-items-center" title="Reload this page">2</div>
                    </a>
                    <a href="https://maxzz.github.io/test-pm-domain-logins">
                        <div className="px-2 mt-1 w-6 h-6 text-xs text-gray-100 border-gray-100 border rounded grid place-items-center" title="Open test-pm-domain-logins">3</div>
                    </a>
                    <a href="https://maxzz.github.io/test-pm-domain-logins22">
                        <div className="px-2 mt-1 w-6 h-6 text-xs text-gray-100 border-gray-100 border rounded grid place-items-center" title="Open test-pm-domain-logins">4</div>
                    </a>
                </div> */}

                <GithubLink href="https://github.com/maxzz/test-pm-second/#other-test-pages" title="Open GitHub source code" />
                {/* <a
                    className="p-1 pt-2 pb-0 border rounded-full text-gray-100 border-gray-100"
                    href="https://github.com/maxzz/test-pm-second/#other-test-pages" target="_blank"
                    title="Open GitHub source code"
                >
                    <div className="w-5 h-5">
                        <svg className="stroke-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                    </div>
                </a> */}
            </div>
        </header>
    );
}
