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

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  //initiall displays all cards all boxes are checked
  const [display, setDisplay] = useState<CardData[]>([]);

  const [filters, setFilters] = useState({
    type: { personal: true, business: true },
    issuer: {
      amex: true,
      chase: true,
      bofa: true,
      usb: true,
      cap1: true,
      citi: true,
      barclays: true,
      wellsfargo: true,
      discover: true,
    },
    network: {
      americanexpress: true,
      visa: true,
      mastercard: true,
      discover: true,
    },
    utility: { cashback: true, travel: true },
    misc: { 524: true, highestoffer: true },
  });

  useEffect(() => {
    //type
    const cardsCopy = [...cards__mock];
    let displayCopy: CardData[] = [];
    for (const card of cardsCopy) {
      // if (card.network == "American Express")
      //   console.log(card.network.toLowerCase().trim());
      //type
      if (!card.isBusiness && !filters.type.personal) continue;
      if (card.isBusiness && !filters.type.business) continue;
      //network
      //condition for amex abbr.
      if (
        !filters.network[
          card.network.toLowerCase().replace(/\s+/g, "") as keyof boolean
        ]
      )
        continue;

      displayCopy = [...displayCopy, card];
      // }
    }

    setDisplay(displayCopy);
  }, [filters]);

  console.log(display);
  return (
    <ClerkProvider {...pageProps}>
      <SessionProvider session={session}>
        <AppData.Provider value={{ display, setDisplay, filters, setFilters }}>
          <Component {...pageProps} />
        </AppData.Provider>
      </SessionProvider>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
