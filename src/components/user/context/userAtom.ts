import { IUser } from "@/types/entity";
import { atomWithStorage } from "jotai/utils";

export const userAtomStorage = atomWithStorage<IUser | null>("user", null);
