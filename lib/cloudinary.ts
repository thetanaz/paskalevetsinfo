// utils/cloudinary.ts
import { v2 as cloudinary } from "cloudinary";

// Create a function to get configured cloudinary instance
const getCloudinaryInstance = () => {
  // Only configure if it hasn't been configured yet
  if (!cloudinary.config().cloud_name) {
    cloudinary.config({
      cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }
  return cloudinary;
};

export default getCloudinaryInstance();
