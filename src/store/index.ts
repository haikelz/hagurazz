import { atom } from "jotai";

export const loadingAtom = atom<boolean>(true);
export const mountedAtom = atom<boolean>(false);
export const languageAtom = atom<boolean>(true);
export const scrollAtom = atom<number>(0);
export const isShowedAtom = atom<boolean>(false);
export const isLoadingAtom = atom<boolean>(true);
export const isCopiedAtom = atom<boolean>(false);
export const messageAtom = atom<string>("");
