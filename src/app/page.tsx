import HomeProvider from "@/layout/HomeProvider";
import Home from "@/modules/home/view";

export default function HomePage() {
  return (
    <HomeProvider>
      <Home />
    </HomeProvider>
  );
}
