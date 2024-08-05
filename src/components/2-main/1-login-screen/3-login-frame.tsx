import { useSpring, config, a } from "@react-spring/web";
import { formStyles } from "./0-all";
import { LoginForm } from "./1-login-form";

export function LoginFrame() {
    const [styles, api] = useSpring(() => ({
        from: { scaleY: .7, },
        to: { scaleY: 1, },
        config: { ...config.wobbly },
    }));

    return (
        <a.div style={{ ...styles, ...{ boxShadow: '#fff1ce4a 0px 0px 15px 6px' } }}>
            <section className="bg-indigo-200 rounded-lg border shadow-sm ring-2 ring-indigo-500 ring-offset-1 ring-offset-indigo-600" style={formStyles}>
                <LoginForm />
            </section>
        </a.div>
    );
}
