import { Dispatch, SetStateAction, createContext } from "react";
import type { CardData } from "~/interface";

interface Display {
  display: CardData[];
  setDisplay: (value: CardData[]) => void;
}
export const DataContext = createContext<Display>({} as Display);
