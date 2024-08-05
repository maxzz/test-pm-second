import { CSSProperties, HTMLAttributes, useEffect } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { a, config, useSpring } from "@react-spring/web";
import { useLocalStorage } from "use-hooks";
import { IconUser } from "../../ui/icons";
import { ghostTargetAtom, loginStartedAtom, showBabbaAtom } from "../../store/store";

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

function FormLogo() {
    const showBabba = useAtomValue(showBabbaAtom);

    const [styles, api] = useSpring(() => ({
        from: { opacity: 0, },
        to: { opacity: 1, },
        delay: 100,
    }));

    useEffect(() => {
        if (showBabba) {
            api.start({ opacity: 1, delay: 1200 });
        }
    }, [showBabba]);

    const setGhostTarget = useSetAtom(ghostTargetAtom);

    return (
        <a.div ref={setGhostTarget} className="mb-4 pb-2 border-indigo-700 border-b" style={styles}>
            <IconUser className="w-16 h-16 mb-2 text-indigo-400" />
        </a.div>
    );
}

function LoginForm() {
    //const setShowBabba = useSetAtom(showBabbaAtom);
    const setLoginStarted = useSetAtom(loginStartedAtom);

    const [username, setUsername] = useLocalStorage('pm-test-2-username', 'maxzz');
    const [password, setPassword] = useLocalStorage('pm-test-2-password', '123456');

    return (
        <form id="test" className="w-64 px-4 py-8 text-sm">
            <FormLogo />

            <InputField value={username} setValue={setUsername} />
            <InputField value={password} setValue={setPassword} isPassword={true} />

            {/* Submit */}
            <div className="flex justify-end">
                <button className="btn"
                    onClick={(e) => {
                        e.preventDefault();
                        // api.start({
                        //     opacity: 0,
                        //     config: { duration: 200, },
                        //     onRest: onLogin
                        // });
                        //setShowBabba(v => !v);
                        setLoginStarted((v) => !v);
                    }}
                >
                    Login
                </button>
            </div>
        </form>
    );
}

function LoginFrame() {
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

const formStyles = {
    '--tw-ring-offset-color': '#fff',
    boxShadow: 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
} as CSSProperties;

export function LoginScreen() {
    const showBabba = useAtomValue(showBabbaAtom);
    return (<>
        {!showBabba && (
            <LoginFrame />
        )}
    </>);
}
