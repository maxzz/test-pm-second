import React from "react";
import { a, config, useSpring } from "@react-spring/web";
import { useLocalStorage } from "use-hooks";
import { PhUserCircleDuotone } from "./Icons";

function LoginForm({ logged, onLogin }: { logged: boolean; onLogin: () => void; }) {
    const [username, setUsername] = useLocalStorage('pm-test-2-username', 'maxzz');
    const [password, setPassword] = useLocalStorage('pm-test-2-password', '123456');
    const [styles, api] = useSpring(() => ({
        from: { opacity: 0, },
        to: { opacity: 1, },
        config: { ...{ duration: 600 }, ...config.wobbly },
    }));
    React.useEffect(() => {
        if (logged) {
            api.start({ opacity: 1, delay: 1200 });
        }
    }, [logged]);
    return (
        <form id="test" className="pt-6 pb-4 text-sm">
            <a.div style={styles}>
                <PhUserCircleDuotone className="w-16 h-16 mb-2 text-purple-400" />
            </a.div>

            {/* Username */}
            <div className="text-purple-800">Username</div>
            <input className="inp" spellCheck="false" autoComplete="email" value={username} onChange={e => setUsername(e.target.value)} />

            {/* Password */}
            <div className="text-purple-800">Password</div>
            <input className="inp" spellCheck="false" autoComplete="password" value={password} onChange={e => setPassword(e.target.value)} type="password" />

            {/* Submit */}
            <div className="flex justify-end">
                <button className="btn" onClick={(e) => {
                    e.preventDefault();
                    api.start({
                        opacity: 0,
                        config: { duration: 200, },
                        onRest: onLogin
                    });
                }}
                >Login</button>
            </div>
        </form>
    );
}

export function LoginScreen({ showBabba, setShowBabba }: { showBabba: boolean; setShowBabba: React.Dispatch<React.SetStateAction<boolean>>; }) {
    const [styles, api] = useSpring(() => ({
        from: { transform: 'scaleX(0)' },
        to: { transform: 'scaleX(1)' },
        config: { ...config.wobbly },
    }));
    return (
        <a.div
            className="max-w-xs mx-auto"
            style={{ ...styles, ...{ boxShadow: '0 0 20px 7px rgba(255, 255, 255, .3)' } }}
        >
            <section
                className="px-4 py-3 mt-4 bg-purple-200 rounded-lg border shadow-sm ring-2 ring-purple-900 ring-offset-1 ring-offset-purple-600"
                style={{
                    '--tw-ring-offset-color': '#fff',
                    boxShadow: 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
                } as any}
            >
                <LoginForm logged={showBabba} onLogin={() => setShowBabba((prev) => !prev)} />
            </section>
        </a.div>
    );
}
