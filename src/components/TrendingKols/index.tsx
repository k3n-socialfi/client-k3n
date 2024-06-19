import { ITrendingKols } from "@/interface/trendingKols.interface";
import UserData from "./UserData";

function TredingKols({ data }: { data: ITrendingKols[] }) {
  return (
    <table className="w-full">
      <tbody>
        {data?.length > 0 &&
          data?.map((item: any, index: any) => (
            <UserData key={index} userInfo={item} index={index} />
          ))}
      </tbody>
    </table>
  );
}

export default TredingKols;
