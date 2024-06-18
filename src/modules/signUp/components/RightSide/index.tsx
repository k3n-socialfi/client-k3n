import { useMemo } from "react";
import { useMyProfileContext } from "@/contexts/MyProfileContext";
import { useRouter } from "next/navigation";
import UnAuthenticated from "./UnAuthenticated";
import Authenticated from "./Authenticated";

function RightSide() {
  const { dataPersonal } = useMyProfileContext();
  const router = useRouter();

  const renderStep = useMemo(() => {
    if (dataPersonal) {
      if (dataPersonal?.isUpdated) {
        router.push("/");
      }

      return (
        <Authenticated shillScore={dataPersonal?.twitterInfo?.totalPoints} />
      );
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
