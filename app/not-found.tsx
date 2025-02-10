"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="flex flex-col text-center h-[80vh] content-center justify-center m-auto items-center gap-y-3 text-2xl">
      <p>404 | Страницата не е намерена</p>
      <Button
        variant="secondary"
        onClick={() => {
          router.back();
        }}
      >
        <ArrowLeft className="mr-2" /> Върни ме назад
      </Button>
    </div>
  );
}
