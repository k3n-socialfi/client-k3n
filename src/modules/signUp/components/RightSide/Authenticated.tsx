import { IconIndividual, IconProjectSignUp } from "@/assets/icons";
import CardChoose from "../CardChoose";

export default function Authenticated() {
  return (
    <div className="w-full h-full items-center justify-center flex flex-col gap-4">
      <p className="text-4xl">Welcome to </p>
      <p className="text-2xl">Connect to K3N using the options below</p>
      <div className="flex flex-col flex-wrap gap-10 md:flex-row">
        <CardChoose
          icon={<IconIndividual size={72} />}
          name="Individual"
          //   onClick={handleCheckPoint}
        />
        <CardChoose
          icon={<IconProjectSignUp size={72} />}
          name="Project"
          //   onClick={() => push("/login/project")}
        />
      </div>
    </div>
  );
}
