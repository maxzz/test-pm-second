import { useSpring, config, a } from "@react-spring/web";
import { LoginForm } from "./1-login-form";

const formStyles = {
    '--tw-ring-offset-color': '#fff',
    boxShadow: 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
};

const sectionClasses = "bg-indigo-200 rounded-lg border shadow-sm ring-2 ring-indigo-500 ring-offset-1 ring-offset-indigo-600";

export function LoginFrame() {

    const [ani, api] = useSpring(
        () => ({
            from: { scale: .2, },
            to: { scale: 1, },
            config: { ...config.wobbly },
        })
    );

    return (
        <a.div style={{ ...ani, ...{ boxShadow: '#fff1ce4a 0px 0px 15px 6px' } }}>

            <section className={sectionClasses} style={formStyles}>
                <LoginForm />
            </section>

        </a.div>
    );
}
