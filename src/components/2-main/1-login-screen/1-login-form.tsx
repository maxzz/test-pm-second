import { loginStartedAtom } from "@/store/store";
import { useSetAtom } from "jotai";
import { useLocalStorage } from "use-hooks";
import { InputField } from "./4-input-field";
import { FormLogo } from "./2-form-logo";

export function LoginForm() {
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
