import React, { HTMLAttributes } from "react";
import { a, config, useSpring } from "@react-spring/web";
import { useLocalStorage } from "use-hooks";
import { IconUser } from "./UI/Icons";

function InputField({ value, setValue, isPassword = false }: { value: string; setValue: (v: string) => void; isPassword?: boolean; } & HTMLAttributes<HTMLLabelElement>) {
    const attrs = isPassword ? {
        className: "inp",
        spellCheck: false,
        autoComplete: "password",
        type: "password",
    } : {
        className: "inp",
        spellCheck: false,
        autoComplete: "email",
    };
    return (
        <label className="text-indigo-800">
            {isPassword ? "Password" : "Username"}
            <input {...attrs} value={value} onChange={e => setValue(e.target.value)} />
        </label>
    );
}

function LoginForm({ logged, onLogin }: { logged: boolean; onLogin: () => void; }) {
    const [username, setUsername] = useLocalStorage('pm-test-2-username', 'maxzz');
    const [password, setPassword] = useLocalStorage('pm-test-2-password', '123456');
    const [styles, api] = useSpring(() => ({
        from: { opacity: 0, },
        to: { opacity: 1, },
        delay: 100,
    }));
    React.useEffect(() => {
        if (logged) {
            api.start({ opacity: 1, delay: 1200 });
        }
    }, [logged]);
    return (
        <form id="test" className="px-4 py-8 text-sm w-56">
            <a.div className="mb-4 pb-2 border-indigo-700 border-b" style={styles}>
                <IconUser className="w-16 h-16 mb-2 text-indigo-400" />
            </a.div>

            <InputField value={username} setValue={setUsername} />
            <InputField value={username} setValue={setUsername} isPassword={true} />

            {/* Username */}
            {/* <div className="text-indigo-800">Username</div>
            <input className="inp" spellCheck="false" autoComplete="email" value={username} onChange={e => setUsername(e.target.value)} /> */}

            {/* Password */}
            {/* <div className="text-indigo-800">Password</div>
            <input className="inp" spellCheck="false" autoComplete="password" value={password} onChange={e => setPassword(e.target.value)} type="password" /> */}

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
        from: { scaleX: 0, },
        to: { scaleX: 1, },
        config: { ...config.wobbly },
    }));
    return (
        <a.div style={{ ...styles, ...{ boxShadow: '#fff1ce4a 0px 0px 15px 6px' } }}>
            <section
                className="bg-indigo-200 rounded-lg border shadow-sm ring-2 ring-indigo-900 ring-offset-1 ring-offset-indigo-600"
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
