import { Client, ID, Storage, Query, Databases } from "appwrite";
import conf from "../conf/conf";

class Service {
  client = new Client();
  databases;
  storage;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }
  ///comments,
  //views,
  //likes,
  async createArticle({
    title,
    content,
    coverImage,
    author,
    tags,
    category,
    status,
    userId,
    slug
  }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteArticleCollectionId,
        slug,
        {
          title,
          content,
          coverImage,
          author,
          tags,
          category,
          status,
          userId

        }
      );
    } catch (error) {
      throw error;
    }
  }
  async createUserProfile({ username, coverImage, userId }) {
    try {
      return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteProfileCollectionId, ID.unique(), {
        username,
        userId,
        coverImage
      })
    } catch (error) {
      throw error
    }
  }

  async updateUserProfile({ username, coverImage, slug }) {
    try {
      return await this.databases.updateDocument(conf.appwriteDatabaseId, conf.appwriteProfileCollectionId, slug, {
        username,
        coverImage
      })
    } catch (error) {

    }
  }
  async getUserProfile({ queries = [] }) {
    try {
      return await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteProfileCollectionId, queries)
    } catch (error) {
      throw error
    }
  }
  async createComment({ author, text }) {
    try {
      return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCommentCollectionId, ID.unique(), {
        author,
        text
      })
    } catch (error) {
      throw error
    }
  }
  async updateComment({ likes, likesBy, status, replies, slug, text }) {
    try {
      return await this.databases.updateDocument(conf.appwriteDatabaseId, conf.appwriteProfileCollectionId, slug, {
        text,
        likes,
        likesBy,
        replies,
        status
      })
    } catch (error) {
      throw error
    }
  }
  async updateArticle(slug, { title, content,
    coverImage,
    tags,
    category,
    status, comments = [],
    likes = 0,
    likesBy = [],
    views, }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteArticleCollectionId,
        slug,
        {
          likesBy,
          comments,
          title,
          content,
          coverImage,
          tags,
          category,
          status
        }
      );
    } catch (error) {
      throw error;
    }
  }
  async deleteArticle({
    comments,
    likes,
    views,
    title,
    content,
    coverImage,
    tags,
    categories,
    status
  }) {
    try {
      return await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteArticleCollectionId,
        slug
      );
    } catch (error) {
      throw error;
    }
  }
  async getArticle({ slug }) {
    try {
      const article = await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteArticleCollectionId,
        slug
      );
      return article;
    } catch (error) {
      return false;
    }
  }
  async getArticles({ queries = [Query.equal("status", "active")], limit, offset }) {
    console.log(limit,offset);
    try {
      const articles = await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteArticleCollectionId,
        queries,

      );
      console.log(articles);
      return articles;
    } catch (error) {
      return false;
    }
  }
  async uploadFile(file) {
    console.log(file);
    try {
      const res = await this.storage.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
      return res;
    } catch (error) {
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      return await this.storage.deleteFile(conf.appwriteBucketId, fileId);
    } catch (error) {
      return false;
    }
  }

  getFilePreview(fileId) {
    const res = this.storage.getFilePreview(
      conf.appwriteBucketId,
      fileId
    );
    return res;
  }
}

const serive = new Service();

export default serive;
