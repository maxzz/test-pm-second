import { HTMLAttributes } from "react";

type InputFieldProps = HTMLAttributes<HTMLLabelElement> & {
    value: string;
    setValue: (v: string) => void;
    isPassword?: boolean;
};

const inputClasses = "\
px-2 py-1 text-base \
\
text-indigo-800 w-full border-indigo-300 \
\
focus:ring focus:ring-indigo-300 focus:ring-offset-1 outline-none \
\
border rounded shadow-inner";

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
        <label className="flex flex-col gap-y-0.5 text-xs text-indigo-800">

            {isPassword ? "Password" : "Username"}

            <input
                {...attrs}
                className={inputClasses}
                spellCheck={false}
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            
        </label>
    );
}
