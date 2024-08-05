import { HTMLAttributes } from "react";

export function InputField({ value, setValue, isPassword = false }: { value: string; setValue: (v: string) => void; isPassword?: boolean; } & HTMLAttributes<HTMLLabelElement>) {
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
