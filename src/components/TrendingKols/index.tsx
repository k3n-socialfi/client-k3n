import { ITrendingKols } from "@/interface/trendingKols.interface";
import UserData from "./UserData";


function TredingKols({data}:{data: ITrendingKols[]}) {
  return (
    <div className="w-full overflow-x-scroll">
      <table className="w-full">
        <tbody>
          {data?.map((item:any, index:any) => (
            <UserData key={index} userInfo={item} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TredingKols;
