const conf ={
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteCollectionId2: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID2),
  appwriteCollectionId3: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID3),
}

export default conf