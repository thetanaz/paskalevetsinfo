import { LoaderCircle } from "lucide-react";

export default function EmblaFallback() {
  return (
    <div className="flex flex-col  w-[350px] sm:w-[400px] h-[250px] rounded-xl border-2  border-green-200">
      <div className="place-self-center m-auto w-[150px] h-[100px]">
        <LoaderCircle className="m-auto w-[50px] h-[50px]  animate-spin" />
        <p className="m-auto text-center">Зареждане..</p>
      </div>
    </div>
  );
}
