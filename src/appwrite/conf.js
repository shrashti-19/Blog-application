import conf from "../conf/config"
import {Client , ID, Databases,Storage,Query} from "appwrite";

export class Service{
    client = new Client()
    databases;
    bucket;//storage

    //constructor create
    constructor(){
        this.client
         .setEndpoint(conf.appWriteURL)
         .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImg, status,userId}){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImg,
                    status,
                    userId
                }
            )

        }catch(error){
            throw error;
        }

    }
    async updatePost(slug,{title,content,featuredImg,status}){

        try{
           return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appWriteCollectionId,
            slug,
            //object to be updated
            {
                title,
                content,
                featuredImg,
                status
            }
           )
        }
        catch(error){
            throw error;
        }
    }

    async deletePost(slug){
        try{
           await this.databases.deleteDocument(
            conf.appWriteCollectionId,
            conf.appwriteDatabaseId,
            slug
          )
          return true
        }
        catch(error){
            throw error;
            
        }
    }

    //retrieve one post
    async getPost(slug){
        try{

            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appWriteCollectionId,
                slug
            )

        }catch(error){
            throw error;
           
        }
    }
    //get all posts - the documents will also cater the document which status is not active
    //query type status - active
    async getPosts(queries = [Query.equal("status","active")]){//parameter dene ki jarurt nhi hai //query=variable
       try{
        return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appWriteCollectionId,
            queries
        )

       }catch(error){
        throw error;
       }
    }

    //file upload service
    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.appwriteBucketID,
                ID.unique(),
                file //file parameter use ho gya hai
            )
            
        }catch(error){
            throw error;
        }

    }
    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(
            conf.appwriteBucketID,
            fileId
           )
           return true;


        }catch(error){
            throw error;
        }
    }

    async filePreview(fileId){
        try{
            const downloadUrl = this.bucket.getFileDownload(
                conf.appwriteBucketID,
                fileId
            );
            return downloadUrl;
        }catch(error){
            throw error;
        }
        
    }
    async fileDownload(fileId){
        try{
            const previewUrl = this.bucket.getFileDownload(
                conf.appwriteBucketID,
                fileId
            );
            return previewUrl;
        }catch(error){
            throw error;
        }
    }
    
}

const service = new Service()
export default service;