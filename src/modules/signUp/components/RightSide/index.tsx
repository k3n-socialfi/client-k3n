import { useMemo } from "react";
import { useMyProfileContext } from "@/contexts/MyProfileContext";
import { useRouter } from "next/navigation";
import UnAuthenticated from "./UnAuthenticated";
import Authenticated from "./Authenticated";

function RightSide() {
  const { dataPersonal, isLoading } = useMyProfileContext();
  const router = useRouter();

  const renderStep = useMemo(() => {
    if (dataPersonal) {
      if (
        dataPersonal?.isUpdated ||
        dataPersonal?.twitterInfo?.totalPoints < 30
      ) {
        router.push("/");
      }
      if (dataPersonal?.twitterInfo?.totalPoints > 30) {
        router.push("/login/individual");
      }
      return <Authenticated />;
    }
    return <UnAuthenticated />;
  }, [dataPersonal, router]);

  return (
    <div className="w-full lg:flex-grow flex-grow-0 px-5 xl:pl-12 pt-10 h-full min-h-screen flex items-center">
      {renderStep}
    </div>
  );
}

export default RightSide;
