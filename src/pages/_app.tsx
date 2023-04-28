import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ClerkProvider } from "@clerk/nextjs";

import { api } from "~/utils/api";

import "~/styles/globals.css";

import { useEffect, useState } from "react";

import cards__mock from "~/data/cards__mock";
import { AppData } from "~/context/AppData";
import type { CardData } from "~/interface";
import defaults from "~/data/filters";
import { isHighestOffer } from "~/functions";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  //initiall displays all cards all boxes are checked
  const [display, setDisplay] = useState<CardData[]>([...cards__mock]);
  const [results, setResults] = useState<CardData[]>([]);
  const [filters, setFilters] = useState(defaults);

  useEffect(() => {
    const cardsCopy = [...cards__mock];
    let displayCopy: CardData[] = [];
    for (const card of cardsCopy) {
      //type
      if (!card.isBusiness && !filters.type.personal) continue;
      if (card.isBusiness && !filters.type.business) continue;
      //network
      if (
        !filters.network[
          card.network.toLowerCase().replace(/\s+/g, "") as keyof boolean
        ]
      )
        continue;

      //utility
      if (card.currency == "USD" && !filters.utility.cashback) continue;
      if (card.currency !== "USD" && !filters.utility.travel) continue;

      //isuers
      if (
        !filters.issuer[
          card.issuer.toLowerCase().replace(/\s+/g, "") as keyof boolean
        ]
      ) {
        continue;
      }
      if (
        !isHighestOffer(card.offers, card.historicalOffers) &&
        !filters.misc.highestoffer
      )
        continue;
      displayCopy = [...displayCopy, card];
    }

    setDisplay(displayCopy);
  }, [filters]);

  // console.log("DISPLAY", display);
  // console.log("RESULTS", results);
  return (
    <ClerkProvider {...pageProps}>
      <SessionProvider session={session}>
        <AppData.Provider
          value={{
            display,
            setDisplay,
            filters,
            setFilters,
            results,
            setResults,
          }}
        >
          <Component {...pageProps} />
        </AppData.Provider>
      </SessionProvider>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
