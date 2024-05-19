import HomeProvider from "@/layout/HomeProvider";
import Home from "@/modules/home/view";
import { ServicesContextProvider } from "@/modules/services/context/ServicesContext";

export default function HomePage() {
  return (
    <HomeProvider>
      <ServicesContextProvider>
        <Home />
      </ServicesContextProvider>
    </HomeProvider>
  );
}
