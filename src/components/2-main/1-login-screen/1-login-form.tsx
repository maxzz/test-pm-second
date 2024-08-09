import { useSetAtom } from "jotai";
import { useLocalStorage } from "use-hooks";
import { loginStartedAtom } from "@/store";
import { FormAnimatedLogo } from "./2-form-animated-logo";
import { InputField } from "./4-input-field";
import { classNames } from "@/utils";

const buttonClasses = "\
px-4 py-2 text-sm \
\
text-indigo-800 bg-indigo-300/50 border-indigo-100 shadow-indigo-400 \
\
focus:ring-indigo-300 focus:ring-offset-1 focus:ring-1 \
\
transform active:scale-y-95 \
\
border rounded shadow-sm outline-none select-none";

export function LoginForm() {
    const setLoginStarted = useSetAtom(loginStartedAtom);

    const [username, setUsername] = useLocalStorage('pm-test-2-username', 'maxzz');
    const [password, setPassword] = useLocalStorage('pm-test-2-password', '123456');

    return (
        <form id="test" className="w-72 text-sm">

            <div className="p-4 text-indigo-400 bg-indigo-300 border-indigo-700/50 border-b">
                <FormAnimatedLogo />
            </div>

            <div className="px-4 py-4 flex flex-col gap-y-3">
                <InputField value={username} setValue={setUsername} />
                <InputField value={password} setValue={setPassword} isPassword={true} />

                <button
                    className={classNames("mt-3 self-end", buttonClasses)}
                    onClick={(e) => {
                        e.preventDefault();
                        setLoginStarted((v) => !v);
                    }}
                    type="button"
                >
                    Login
                </button>
            </div>

        </form>
    );
}
