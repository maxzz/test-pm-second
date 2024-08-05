import { useAtomValue } from "jotai";
import { showBabbaAtom } from "../../../store/store";
import { LoginFrame } from "./3-login-frame";

export function LoginScreen() {
    const showBabba = useAtomValue(showBabbaAtom);
    return (<>
        {!showBabba && (
            <LoginFrame />
        )}
    </>);
}
