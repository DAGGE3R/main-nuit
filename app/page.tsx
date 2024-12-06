import { BodyContainer } from "@/components/body-container";
import { SheetContainer } from "@/components/sheet-container";
import Background from "@/public/images/background.png";
import Wave from "@/public/images/wave.png";
import Logo from "@/public/images/logo.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center w-full relative">
      <Image src={Background} alt={"background_image"} className="w-full h-full object-contain scale-105 -z-10 absolute overflow-auto" />
      <Image src={Wave} alt="wave" className="absolute bottom-0 left-0" />
      <Image src={Logo} alt="logo" className="absolute top-8 left-8 w-24" />
      <div className="h-full w-full flex flex-col justify-center items-center space-y-6">
        <span className="font-extrabold text-5xl mr-28">BODY WAVE</span>
        <BodyContainer />
        <p className="font-bold text-2xl mr-28 flex flex-col items-center">
          <span>Cliquez sur les organes</span>
          <span>pour passer un quiz</span>
        </p>
      </div>

      <SheetContainer />
    </div>
  );
}
