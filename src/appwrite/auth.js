import conf from '../conf/config'
import {Client , Account , ID} from "appwrite";


export class AuthService {
    client = new Client();
    account;
    constructor(){
        console.log('Appwrite URL:',conf.appWriteURL);
        console.log('Project Id : ',conf.appwriteProjectId);
        
        this.client
           .setEndpoint(conf.appWriteURL)
           .setProject(conf.appwriteProjectId);
        
        this.account= new Account(this.client)
    }

    //appwrite ki services ko call krenge
    //async isliye kyuki account creation
    async createAccount({email,password,name}){
        try{
            const userAccount = await this.account.create(ID.unique(),email,password,name) //account create krne ke liye
            if(userAccount){
                //call another method - account successfully login page
                return this.login({email,password}) 
                
            }
            else{
                return userAccount;
            }

        }
    catch(error){
        throw error;

    }
  }
    async login({email,password}){
        try{
             return await this.account.createEmailSession(email,password)
        }
        catch(error){
            throw error;
        }
    }

    async getCurrentUser(){
        try{
             return await this.account.get();


        }catch(error){
            console.log("Appwrite service :: getCurrentUser :: Error",error);
            return null;
            
        }
         // if there is no account found null
    }
    async logout(){
        try{
            await this.account.deleteSession('current');

        }catch(error){
            console.log("Appwrite service :: error ",error);

        }
    }

}

const authService = new AuthService();

export default authService; // properties access hai 

// services aise banayi gyi hai jo is file ko pta hai 
// frontend ko kuch nhi pta hai
//future proof code

