import { CSSProperties } from "react";
import { useAtomValue } from "jotai";
import { showBabbaAtom } from "../../../store/store";
import { LoginFrame } from "./3-login-frame";

export const formStyles = {
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
