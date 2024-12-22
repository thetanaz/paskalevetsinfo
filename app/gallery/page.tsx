import EmblaFallback from "@/components/EmblaFallback";
import SingleAlbum from "@/components/SingleAlbum";
import { fetchAlbumNames } from "@/fetchers/fetchAlbumNames";
import { Suspense } from "react";

export const revalidate = 600;
const Page = async () => {
  const albumNames = await fetchAlbumNames();

  return (
    <>
      <div className="lg:grid lg:grid-cols-2 xl:grid-cols-3 flex flex-col justify-center items-center gap-y-2 container mx-auto mt-5 gap-x-2 lg:px-4">
        {albumNames.map((albumName, index) => (
          <div
            key={index}
            className="flex flex-col items-center lg:items-start"
          >
            <h3 className="text-2xl font-bold mb-4 capitalize lg:pl-1 lg:w-full">
              {albumName}
            </h3>
            <Suspense key={index} fallback={<EmblaFallback />}>
              <SingleAlbum albumName={albumName} />
            </Suspense>
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
