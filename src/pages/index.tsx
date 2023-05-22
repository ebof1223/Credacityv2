import { type NextPage } from "next";
import Head from "next/head";
import { useContext } from "react";

import DatapointsModal from "~/components/DatapointsModal";
import Form from "~/components/Form";
import Grid from "~/components/Grid";
import List from "~/components/List";
import Navbar from "~/components/Navbar";
import Sidebar from "~/components/Sidebar";
import { AppData } from "~/context/AppData";

const Home: NextPage = () => {
  const { grid } = useContext(AppData);
  return (
    <>
      <Head>
        <title>Churn.io</title>
        <meta name="Churn.io" content="Credit card datapoints" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <main className="drawer-mobile drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <Navbar />
          {grid ? <Grid /> : <List />}
        </div>
        <Sidebar />
      </main>
      <DatapointsModal />
      <Form />
    </>
  );
};

export default Home;

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();

// const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//   undefined, // no input
//   { enabled: sessionData?.user !== undefined }
// );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };
