import { createContext } from "react";
import type { CardData, Filters } from "~/interface";

interface AppData {
  display: CardData[];
  setDisplay: (value: CardData[]) => void;
  filters: Filters;
  setFilters: (value: Filters) => void;
  results: CardData[];
  setResults: (value: CardData[]) => void;
  reapply: boolean;
  setReapply: (value: boolean) => void;
}
export const AppData = createContext<AppData>({} as AppData);
