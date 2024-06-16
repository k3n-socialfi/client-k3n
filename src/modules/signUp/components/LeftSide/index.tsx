import square from "@/assets/svgs/common/square.svg";
import vline from "@/assets/svgs/common/vline.svg";
import dotted from "@/assets/svgs/common/dotted.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

function LeftSide({ img }: { img: string }) {
  const router = useRouter();

  return (
    <div className="w-full lg:flex-grow flex-grow-0 lg:flex items-center hidden bg-darkblack-600 p-20 relative min-h-screen text-white">
      <ul>
        <li className="absolute top-10 left-8 animate-spinThenBounce">
          <Image src={square} alt="" width={115} height={115} />
        </li>
        <li className="absolute right-12 top-14 animate-pulse">
          <Image src={vline} alt="" width={27} height={143} />
        </li>
        <li className="absolute bottom-20 left-8 animate-zoomThenSpin">
          <Image src={dotted} alt="" width={81} height={81} />
        </li>
      </ul>
      <div className="flex flex-col items-center w-max mx-auto justify-center">
        <Image
          src={img}
          alt=""
          width={800}
          height={682}
          className="animate-slideFromTop"
          onClick={() => router.push("/")}
        />
        <div>
          <h3 className="animate-slideFromBottom text-white text-center px-1.5 mx-auto font-semibold font-popins text-4xl">
            The #1 KOL platform in web3
          </h3>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
