import { BodyContainer } from "@/components/body-container";
import { SheetContainer } from "@/components/sheet-container";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center w-full">
      <BodyContainer />
      <SheetContainer />
    </div>
  );
}
