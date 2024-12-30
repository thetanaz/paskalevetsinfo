import { ReactNode } from "react";

export default function Title({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-3xl font-bold ml-4 mb-5 sm:mt-2  bg-green-100 text-green-900 rounded-lg flex w-fit p-2">
      {children}
    </h1>
  );
}
