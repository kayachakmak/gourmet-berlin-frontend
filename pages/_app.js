import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import "leaflet/dist/leaflet.css";
import { SWRConfig } from "swr";
import Profile from "@/components/Profile Banner/Profile";
import Footer from "@/components/Footer/Footer";
import Banner from "@/components/Banner/Banner";
import { UserProvider } from "@/components/UserContext/UserContext";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <UserProvider>
      <SWRConfig value={{ fetcher }}>
        <Banner />
        <Profile />
        <Component {...pageProps} />
        <Footer />
      </SWRConfig>
    </UserProvider>
  );
}
