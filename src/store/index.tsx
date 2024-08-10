import { atom } from "jotai";

export const loginStartedAtom = atom(false);
export const showBubbaAtom = atom(false);

export const workingAreaAtom = atom({ width: 0, height: 0 });
//export const targetAreaAtom = atom({ width: 0, height: 0 });
export const ghostTargetElementAtom = atom<HTMLDivElement | null>(null);

