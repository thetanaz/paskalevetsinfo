import Embla from "@/components/embla";

interface SingleAlbumProps {
  albumName: string;
}

export const fetchAlbumPhotos = async (
  albumName: string
): Promise<string[]> => {
  try {
    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image/upload`;

    const params = new URLSearchParams({
      prefix: albumName,
      max_results: "100",
    });

    const res = await fetch(`${url}?${params}`, {
      method: "GET",
      headers: {
        Authorization: `Basic ${btoa(
          `${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}`
        )}`,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.status} - ${res.statusText}`);
    }

    const data = await res.json();
    const photos = data.resources.map(
      (resource: { secure_url: string }) => resource.secure_url
    );

    return photos;
  } catch (error) {
    console.error(`Error fetching photos for album "${albumName}":`, error);
    return [];
  }
};

const SingleAlbum = async ({ albumName }: SingleAlbumProps) => {
  const images = await fetchAlbumPhotos(albumName);

  return (
    <div className="w-full cursor-pointer">
      {images.length > 0 ? (
        <Embla images={images} />
      ) : (
        <p>No images in this album</p>
      )}
    </div>
  );
};

export default SingleAlbum;
