import HomeProvider from "@/layout/HomeProvider";
import Home from "@/modules/home/view/home";

export default function HomePage() {
  return (
    <HomeProvider>
      <Home />
    </HomeProvider>
  );
}
