const Conf = {
    appWriteurl:String(import.meta.env.VITE_APPWRITE_URL),
    projectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    datBaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    collectiontId:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    bucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default Conf