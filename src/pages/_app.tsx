import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ClerkProvider } from "@clerk/nextjs";

import { api } from "~/utils/api";

import "~/styles/globals.css";

import { useState } from "react";

import cards__mock from "~/data/cards__mock";
import { DataContext } from "~/context/DataContext";
import type { CardData } from "~/interface";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  //initiall displays all cards all boxes are checked
  const [display, setDisplay] = useState<CardData[]>([...cards__mock]);
  return (
    <ClerkProvider {...pageProps}>
      <SessionProvider session={session}>
        <DataContext.Provider value={{ display, setDisplay }}>
          <Component {...pageProps} />
        </DataContext.Provider>
      </SessionProvider>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
