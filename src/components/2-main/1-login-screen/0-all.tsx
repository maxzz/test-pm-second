import { useAtomValue } from "jotai";
import { showBubbaAtom } from "../../../store";
import { LoginFrame } from "./2-login-frame";
import { LoginFormBody } from "./1-login-form-body";

export function LoginScreen() {
    const showBabba = useAtomValue(showBubbaAtom);
    return (<>
        {!showBabba && (
            <LoginFrame>
                <LoginFormBody />
            </LoginFrame>
        )}
    </>);
}
