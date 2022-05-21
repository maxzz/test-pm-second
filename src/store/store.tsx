import { atom } from "jotai";

export const showLoginAtom = atom(true);
export const showBabbaAtom = atom(false);

export const workingAreaAtom = atom({ width: 0, height: 0 });
//export const targetAreaAtom = atom({ width: 0, height: 0 });
export const ghostTargetAtom = atom<HTMLDivElement | null>(null);

