import { useAtomValue } from "jotai";
import { showBubbaAtom } from "../../../store/store";
import { LoginFrame } from "./3-login-frame";

export function LoginScreen() {
    const showBabba = useAtomValue(showBubbaAtom);
    return (<>
        {!showBabba && (
            <LoginFrame />
        )}
    </>);
}
