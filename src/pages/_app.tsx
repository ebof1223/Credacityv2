import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ClerkProvider } from "@clerk/nextjs";
import { useEffect, useState } from "react";

import { api } from "~/utils/api";

import "~/styles/globals.css";

import { AppData } from "~/context/AppData";

import defaults from "~/data/filters";
import cards__mock from "~/data/cards__mock";
import type { CardData } from "~/interface";
import { getKeyValueStorage, isHighestOffer } from "~/functions";
import dp__mock from "~/data/dp__mock";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [display, setDisplay] = useState<CardData[]>([...cards__mock]);
  const [results, setResults] = useState<CardData[]>([]);
  const [filters, setFilters] = useState(defaults);
  const [reapply, setReapply] = useState(false);
  const [current, setCurrent] = useState<CardData | null>(null);
  const [breadcrumbs, setBreadcrumbs] = useState<CardData[]>([]);
  const datapoints = getKeyValueStorage(dp__mock);

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
        filters.misc.highestoffer
      )
        continue;
      displayCopy = [...displayCopy, card];
    }
    setDisplay(displayCopy);
  }, [filters]);

  const globals = {
    display,
    setDisplay,
    filters,
    setFilters,
    results,
    setResults,
    reapply,
    setReapply,
    current,
    setCurrent,
    datapoints,
    breadcrumbs,
    setBreadcrumbs,
  };

  return (
    <ClerkProvider {...pageProps}>
      <SessionProvider session={session}>
        <AppData.Provider value={{ ...globals }}>
          <Component {...pageProps} />
        </AppData.Provider>
      </SessionProvider>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
