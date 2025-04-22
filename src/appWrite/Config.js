import Conf from "../conf/Conf";
import {Client,Databases,Query,Storage,ID, Query, Query} from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client.setEndpoint(Conf.appWriteurl).setProject(Conf.projectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug , content , featuredImage , userId,status}){
        try {
            return await this.databases.createDocument(Conf.datBaseId, Conf.collectiontId, slug, 
            {
                title,
                content,
                featuredImage,
                status,
                userId,
            })
        } catch (error) {
            console.log("appwrite error :: createPost :: error",error)
        }
    }
    async updatePost(slug ,{title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(Conf.datBaseId,Conf.collectiontId,slug,
                {
                    title,
                    featuredImage,
                    content,
                    status,
                })
        } catch (error) {
            console.log("appwrite Service :: updatePost :: error",error);
            
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(Conf.datBaseId, Conf.collectiontId, slug,)
            return true;
        } catch (error) {
            console.log("appwrite error :: deletePost :: error",error);
            return false;
        }
    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(Conf.datBaseId,Conf.collectiontId,slug);
        } catch (error) {
            console.log("appwrite error :: getPost :: error",error);
            return false;
            
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(Conf.datBaseId,Conf.collectiontId,queries,)
        } catch (error) {
            console.log("appwrite Service :: getPosts :: error",error);
            return false;
            
        }
    }

    // file upload service 

    async uploadFile(file){
        try {
            return await this.bucket.createFile(Conf.bucketId, ID.unique(),file)
        } catch (error) {
            console.log("Appwrite Service :: uploadFile :: error",error);
            return false;
            
        }
    }

    async deleteFile(fileId){
        try {
            this.bucket.deleteFile(Conf.bucketId,fileId);
            return true;
        } catch (error) {
            console.log("Appwrite Service :: deleteFile :: error",error);
            return false;
        }
    }
    getFilePreview(fileId){
        return this.bucket.getFilePreview(Conf.bucketId, fileId);
    }
}

const service = new Service();
export default service;