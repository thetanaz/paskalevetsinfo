import Timeline from "@/components/Timeline";
import Title from "@/components/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Паскалевец - История",
};

const Page = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Title>История</Title>
      <Timeline />
    </div>
  );
};
export default Page;
