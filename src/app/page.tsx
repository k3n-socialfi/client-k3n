import HomeProvider from "@/layout/HomeProvider";
import Home from "@/modules/home/view/Home";

export default function HomePage() {
  return (
    <HomeProvider>
      <Home />
    </HomeProvider>
  );
}
