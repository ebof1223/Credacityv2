import { createContext } from "react";
import type { CardData } from "~/interface";

type Display = {
  display: {
    cards: CardData[];
    selected: CardData[];
    results: CardData[];
    suggested: CardData[];
  };
  setDisplay: (value: {
    cards: [];
    selected: [];
    results: [];
    suggested: [];
  }) => void;
};

export const DataContext = createContext<Display | null>(null);
