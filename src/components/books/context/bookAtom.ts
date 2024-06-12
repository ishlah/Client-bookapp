import { IBook } from "@/types/entity";
import { atomWithStorage } from "jotai/utils";

export const bookAtomStorage = atomWithStorage<IBook|null>('book', null)