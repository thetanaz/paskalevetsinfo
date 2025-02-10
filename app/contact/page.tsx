import Title from "@/components/Title";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Паскалевец - Контакти",
};

const Page = () => {
  return (
    <>
      <Title>Контакти</Title>
      <div className="flex flex-col my-2 gap-y-5 items-center xl:flex-row xl:gap-x-5 xl:justify-center xl:items-end">
        <div className="flex p-2 flex-col gap-y-4 border rounded-md w-[400px]">
          <img
            src="https://res.cloudinary.com/dwshro2zn/image/upload/v1739190318/kmetstvo_inftvx.jpg"
            alt="building"
            className="rounded-md max-w-[400px]"
          />
          <h2 className="text-xl flex flex-col font-bold">
            Кметство <p>тел. 061395220</p>
          </h2>
        </div>

        <div className="flex  p-2 rounded-md border w-[400px] flex-col gap-y-4">
          <img
            src="https://res.cloudinary.com/dwshro2zn/image/upload/v1739191218/kmet-paskalevec_se8yza.jpg"
            alt="building"
            className="rounded-md max-w-[400px]"
          />
          <h2 className="text-xl flex flex-col font-bold">
            Кмет - Мирослав Димитров <p>тел. 0894506130</p>
          </h2>
        </div>

        <div className="flex  p-2 rounded-md border w-[400px] flex-col gap-y-4">
          {" "}
          <img
            src="https://res.cloudinary.com/dwshro2zn/image/upload/v1739190714/chitalishte_crji5g.jpg"
            alt="building"
            className="rounded-md max-w-[400px]"
          />
          <h2 className="text-xl flex flex-col font-bold">
            Читалище
            <div className="flex justify-between items-end w-full mb-1">
              <p>тел. 0889416863</p>
              <p>
                email:{" "}
                <Link
                  href="mailto:orach1898@abv.bg"
                  className="hover:text-green-200 text-white"
                >
                  orach1898@abv.bg
                </Link>
              </p>
            </div>
          </h2>
        </div>
      </div>
    </>
  );
};
export default Page;
