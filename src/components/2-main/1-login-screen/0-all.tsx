import { useAtomValue } from "jotai";
import { showBubbaAtom } from "../../../store";
import { LoginFrame } from "./3-login-frame";
import { LoginForm } from "./1-login-form";

export function LoginScreen() {
    const showBabba = useAtomValue(showBubbaAtom);
    return (<>
        {!showBabba && (
            <LoginFrame>
                <LoginForm />
            </LoginFrame>
        )}
    </>);
}
