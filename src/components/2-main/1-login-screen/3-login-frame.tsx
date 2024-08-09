import { HTMLAttributes, ReactNode } from "react";
import { useSpring, config, a } from "@react-spring/web";
import { classNames } from "@/utils";

const formStyles = {
    '--tw-ring-offset-color': '#fff',
    boxShadow: 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
};

const sectionClasses = "\
bg-indigo-200 overflow-hidden \
ring-indigo-500 ring-offset-indigo-600 ring-offset-1 ring-2 \
rounded-lg border shadow-sm";

export function LoginFrame({ className, children, ...rest }: { children: ReactNode; } & HTMLAttributes<HTMLTableSectionElement>) {

    const [ani, api] = useSpring(
        () => ({
            from: { scale: .2, },
            to: { scale: 1, },
            config: { ...config.wobbly },
        })
    );

    return (
        <a.div style={{ ...ani, ...{ boxShadow: '#fff1ce4a 0px 0px 15px 6px' } }}>

            <section className={classNames(sectionClasses, className)} style={formStyles} {...rest}>
                {children}
            </section>

        </a.div>
    );
}
