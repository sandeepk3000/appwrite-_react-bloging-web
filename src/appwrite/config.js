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
    publishedDate
  }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          coverImage,
          author,
          tags,
          categories,
          status,
          publishedDate
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async updateArticle({}) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          comments,
          likes,
          views,
          title,
          content,
          coverImage,
          tags,
          categories,
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
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      throw error;
    }
  }
  async getArticle({ slug}) {
    try {
      const article = await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return article;
    } catch (error) {
      return false;
    }
  }
  async getArticles({ queries = [Query.equal("status", "active")] }) {
    try {
      const articles = await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
      return articles;
    } catch (error) {
      return false;
    }
  }
  async uploadFile({ file }) {
    try {
      const res = await this.storage.updateFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
      return res;
    } catch (error) {
      return false;
    }
  }

  async deleteFile({ fileId }) {
    try {
      return await this.storage.deleteFile(conf.appwriteBucketId, fileId);
    } catch (error) {
      return false;
    }
  }

  async getFilePreview({ fileId }) {
    const res = await this.storage.getFilePreview(
      conf.appwriteBucketId,
      fileId
    );
    return res;
  }
}

const serive = new Service();

export default serive;
