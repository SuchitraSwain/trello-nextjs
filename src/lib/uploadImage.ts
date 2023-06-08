import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    "647f3d500c4aa3cf9073",
    ID.unique(),
    file
  );

  return fileUploaded;
};

export default uploadImage;
