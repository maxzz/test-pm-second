import React, { HTMLAttributes } from "react";
import { useAtom } from "jotai";
import { loginStartedAtom } from "../../store/store";

export function ReloadButton({className}: HTMLAttributes<HTMLInputElement>) {
    const [loginStarted, setLoginStarted] = useAtom(loginStartedAtom);
    return (
        <input
            className="self-center mr-2 px-2 py-1 text-xs text-yellow-100 border-yellow-100 hover:bg-slate-900/50 border rounded active:scale-[.97] cursor-pointer"
            type="button"
            value={loginStarted ? 'Stop' : 'Reload'}
            onClick={() => setLoginStarted((v) => !v)}
        />
    );
}
