// interface CloudinaryFolder {
//   name: string;
//   path: string;
// }

// export const fetchAlbumNames = async (): Promise<string[]> => {
//   try {
//     const folderResult = await v2.api.root_folders();
//     return folderResult.folders.map((folder: CloudinaryFolder) => folder.name);
//   } catch (error) {
//     console.error("Error fetching Cloudinary album names:", error);
//     return [stringifyError(error as Error)];
//   }
// };

export const fetchAlbumNames = async (): Promise<string[]> => {
  try {
    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/folders`;

    const res = await fetch(url, {
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

    const data = await res.json(); // Parse the response JSON
    const folders = data.folders.map((folder: { name: string }) => folder.name);
    // Extract folder names
    return folders;
  } catch (error) {
    console.error("Failed to fetch album names:", error);
    return []; // Return an empty array on failure
  }
};
