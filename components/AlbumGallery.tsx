import { v2 as cloudinary } from "cloudinary";
import Embla from "@/components/embla";

interface CloudinaryFolder {
  name: string;
  path: string;
}

interface Album {
  name: string;
  images: string[];
}

const fetchAlbums = async (): Promise<Album[]> => {
  try {
    const folderResult = await cloudinary.api.root_folders();
    const albumPromises = folderResult.folders.map(
      async (folder: CloudinaryFolder) => {
        const result = await cloudinary.api.resources({
          type: "upload",
          prefix: folder.path,
          max_results: 100,
        });
        return {
          name: folder.name,
          images: result.resources.map(
            (resource: { secure_url: string }) => resource.secure_url
          ),
        };
      }
    );
    return await Promise.all(albumPromises);
  } catch (error) {
    console.error("Error fetching Cloudinary albums:", error);
    return [];
  }
};

const AlbumGallery = async () => {
  const albums = await fetchAlbums();
  return (
    <div className="flex flex-col items-center justify-center lg:grid lg:grid-cols-2 gap-x-2 xl:grid-cols-3 xl:w-[1300px] mx-auto">
      {albums.map((album, index) => (
        <div key={index} className="col-span-1">
          <h3 className="text-2xl font-bold mb-4 capitalize">{album.name}</h3>
          {album.images.length > 0 ? (
            <Embla images={album.images} />
          ) : (
            <p>No images in this album</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default AlbumGallery;
