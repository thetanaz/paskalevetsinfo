import Title from "@/components/Title";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Паскалевец - Контакти",
};

const Page = () => {
  return (
    <>
      <Title>Контакти</Title>
      <div className="flex flex-col items-center my-2">
        <div className="w-full xl:max-w-screen-xl xl:mx-auto grid grid-cols-1 gap-y-5 xl:grid-cols-2  xl:items-center justify-items-center">
          <div className="flex p-2 flex-col gap-y-4 border rounded-md w-full max-w-[400px] h-[400px] max-h-[400px]">
            <Image
              src="https://res.cloudinary.com/dwshro2zn/image/upload/v1739190318/kmetstvo_inftvx.jpg"
              alt="building"
              className="rounded-md w-full object-cover object-center"
              width={300}
              height={300}
            />
            <h2 className="text-xl flex flex-col font-bold">
              Кметство{" "}
              <a href="tel:061395220" className="">
                тел. 061395220
              </a>
            </h2>
          </div>

          <div className="flex p-2 flex-col gap-y-4 border rounded-md w-full max-w-[400px] h-[400px] max-h-[400px]">
            <div className="h-[280px] overflow-hidden rounded-md">
              {" "}
              {/* Fixed height container */}
              <Image
                src="https://res.cloudinary.com/dwshro2zn/image/upload/v1739191218/kmet-paskalevec_se8yza.jpg"
                alt="building"
                className="rounded-md w-full h-full object-cover object-center"
                width={300}
                height={300}
                style={{ objectPosition: "20% 20%" }}
              />
            </div>
            <h2 className="text-xl flex flex-col font-bold">
              Кметски наместник - Мирослав Димитров{" "}
              <a href="tel:0894506130">тел. 0894506130</a>
            </h2>
          </div>

          <div className="flex p-2 flex-col gap-y-4 border rounded-md w-full max-w-[400px] h-[400px] max-h-[400px]">
            <Image
              src="https://res.cloudinary.com/dwshro2zn/image/upload/v1739190714/chitalishte_crji5g.jpg"
              alt="building"
              className="rounded-md w-full object-cover object-center"
              width={300}
              height={300}
            />
            <h2 className="text-xl flex flex-col font-bold">
              Читалище
              <div className="flex justify-between items-end w-full mb-1">
                <a href="tel:0889416863">тел. 0889416863</a>
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

          <div className="flex p-2 flex-col gap-y-4 border rounded-md w-full max-w-[400px] h-[400px] max-h-[400px]">
            <Image
              src="https://res.cloudinary.com/dwshro2zn/image/upload/v1745943797/doktor_sqnavp.jpg"
              alt="building"
              className="rounded-md w-full object-cover object-center"
              width={300}
              height={300}
            />
            <h2 className="text-xl flex flex-col font-bold">
              д-р Албена Банкова - съдов хирург
              <div className="flex justify-between items-end w-full mb-1">
                <a href="tel:0878351445">тел. 0878351445</a>
              </div>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
