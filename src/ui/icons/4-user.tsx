import { SVGProps } from "react";

export function IconUser(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
            <path d="M97.16 50a47.08 47.08 0 01-15.33 34.81 47 47 0 01-31.87 12.38A46.97 46.97 0 0118.09 84.8 47.2 47.2 0 1197.16 50z" />
            <path d="M81.82 84.81a47 47 0 01-31.87 12.38A46.97 46.97 0 0118.08 84.8c7.5-11.62 18.99-19.06 31.87-19.06s24.37 7.44 31.87 19.06z" />
            <circle className="b" cx="49.96" cy="46.1" r="19.21" />
        </svg>
    );
}
