import { HTMLAttributes } from "react";

type InputFieldProps = HTMLAttributes<HTMLLabelElement> & {
    value: string;
    setValue: (v: string) => void;
    isPassword?: boolean;
};

export function InputField({ value, setValue, isPassword = false }: InputFieldProps) {

    const attrs =
        isPassword
            ? {
                type: "password",
                autoComplete: "password",
            }
            : {
                type: "text",
                autoComplete: "email",
            };

    return (
        <label className="text-indigo-800">

            {isPassword ? "Password" : "Username"}

            <input
                {...attrs}
                className="inp"
                spellCheck={false}
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            
        </label>
    );
}
