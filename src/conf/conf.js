const conf = {
    appwriteUrl:import.meta.env.VITE_APPWRITE_URL,
    appwriteProjectId:import.meta.env.VITE_APPWRITE_PROJECT_ID,
    appwriteDatabaseId:import.meta.env.VITE_APPWRITE_DATABASE_ID,
    appwriteProfileCollectionId:import.meta.env.VITE_APPWRITE_PROFILE_COLLECTION_ID,
    appwriteArticleCollectionId:import.meta.env.VITE_APPWRITE_ARTICLE_COLLECTION_ID,
    appwriteCommentCollectionId:import.meta.env.VITE_APPWRITE_COMMENT_COLLECTION_ID,
    appwriteBucketId:import.meta.env.VITE_APPWRITE_BUCKET_ID,
}

export default conf