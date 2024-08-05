import { useSetAtom } from "jotai";
import { useLocalStorage } from "use-hooks";
import { loginStartedAtom } from "@/store";
import { FormAnimatedLogo } from "./2-form-animated-logo";
import { InputField } from "./4-input-field";

export function LoginForm() {
    const setLoginStarted = useSetAtom(loginStartedAtom);

    const [username, setUsername] = useLocalStorage('pm-test-2-username', 'maxzz');
    const [password, setPassword] = useLocalStorage('pm-test-2-password', '123456');

    return (
        <form id="test" className="w-64 text-sm">
            <div className="p-4 text-indigo-400 border-indigo-700/50 border-b">
                <FormAnimatedLogo />
            </div>

            <div className="px-4 py-4 flex flex-col">
                <InputField value={username} setValue={setUsername} />
                <InputField value={password} setValue={setPassword} isPassword={true} />

                <button className="btn self-end"
                    onClick={(e) => {
                        e.preventDefault();
                        setLoginStarted((v) => !v);
                    }}
                >
                    Login
                </button>
            </div>

        </form>
    );
}
