import { HTMLAttributes } from "react";
import { useAtom } from "jotai";
import { loginStartedAtom } from "../../../store";
import { classNames } from "../../../utils/classnames";

const buttonClasses = "self-center \
mr-2 px-2 py-1 text-xs \
\
text-indigo-100 border-indigo-400 hover:bg-indigo-800 shadow-indigo-950 \
\
border rounded shadow cursor-pointer \
active:scale-[.97]";

export function ReloadButton({ className }: HTMLAttributes<HTMLInputElement>) {
    const [loginStarted, setLoginStarted] = useAtom(loginStartedAtom);

    return (
        <input
            className={classNames(buttonClasses, className,)}
            type="button"
            value={loginStarted ? 'Stop' : 'Reload'}
            onClick={() => setLoginStarted((v) => !v)}
        />
    );
}
