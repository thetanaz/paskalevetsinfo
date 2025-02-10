import Title from "@/components/Title";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Паскалевец - Въпроси",
};
const page = () => {
  return (
    <div className="flex flex-col mb-3">
      <Title>Въпроси и Отговори</Title>
      <ul className="flex flex-col mx-10 gap-y-10">
        <li className="gap-y-2 flex flex-col text-2xl bg-green-100 rounded-md text-green-900 p-3">
          <h2>
            <span className="font-extralight">Въпрос:</span> Има ли автобусни
            линии от и за селото?
          </h2>
          <div className="border-b  border-b-green-900 w-full" />
          <h2>
            <span className="font-extralight">Отговор:</span> В момента няма
            автобусни линии минаващи през селото.
          </h2>
        </li>
        <li className="gap-y-2 flex flex-col text-2xl bg-green-100 rounded-md text-green-900 p-3">
          <h2>
            <span className="font-extralight">Въпрос:</span> Защо селото няма
            кмет, а има кметски наместник?
          </h2>
          <div className="border-b  border-b-green-900 w-full" />
          <h2>
            <span className="font-extralight">Отговор: </span>
            Според закона едно населено място трябва да има поне 350 жители за
            да се провеждат избори за кмет, а Паскалевец пада далеч под този
            праг.{" "}
          </h2>
        </li>
        <li className="gap-y-2 flex flex-col text-2xl bg-green-100 rounded-md text-green-900 p-3">
          <h2>
            <span className="font-extralight">Въпрос:</span> Кой е кметски
            наместник на село Паскалевец?
          </h2>
          <div className="border-b  border-b-green-900 w-full" />
          <h2>
            <span className="font-extralight">Отговор:</span> Мирослав Христов
            Димитров.
          </h2>
        </li>
        <li className="gap-y-2 flex flex-col text-2xl bg-green-100 rounded-md text-green-900 p-3">
          <h2>
            <span className="font-extralight">Въпрос:</span> В селото има ли
            хранителни магазини и/или заведения?
          </h2>
          <div className="border-b  border-b-green-900 w-full" />
          <h2>
            <span className="font-extralight">Отговор:</span> В момента няма
            заведения,но има магазин за стоки от първа необходимост.
            Най-близките супермаркети са в с. Ресен и в гр. Павликени.
          </h2>
        </li>

        <li className="gap-y-2 flex flex-col text-2xl bg-green-100 rounded-md text-green-900 p-3">
          <h2>
            <span className="font-extralight">Въпрос:</span> В селото има ли
            обхват на мобилните оператори?
          </h2>
          <div className="border-b  border-b-green-900 w-full" />
          <h2>
            <span className="font-extralight">Отговор:</span> Yettel имат слаб
            4G обхват, А1 нямат почти никакъв обхват, а Vivacom разполагат с
            клетка в селото, която предоставя пълен обхват както и 4G интернет
            за своите потребители.
          </h2>
        </li>
        <li className="gap-y-2 flex flex-col text-2xl bg-green-100 rounded-md text-green-900 p-3">
          <h2>
            <span className="font-extralight">Въпрос:</span> В селото има ли
            дежурен лекар?
          </h2>
          <div className="border-b  border-b-green-900 w-full" />
          <h2>
            <span className="font-extralight">Отговор:</span> Има съдов хирург с
            офис в селото, но работи със записан час.
          </h2>
        </li>
        <li className="gap-y-2 flex flex-col text-2xl bg-green-100 rounded-md text-green-900 p-3">
          <h2>
            <span className="font-extralight">Въпрос:</span> В селото има ли
            поща и банкомат?
          </h2>
          <div className="border-b  border-b-green-900 w-full" />
          <h2>
            <span className="font-extralight">Отговор:</span>Няма работеща поща
            за момента. Най-близкият банкомат е в село Ресен, на 8км от
            Паскалевец.
          </h2>
        </li>
      </ul>
    </div>
  );
};
export default page;
