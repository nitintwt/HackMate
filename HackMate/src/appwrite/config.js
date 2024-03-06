import conf from '../conf/conf.js';
import { Client, ID, Databases, Query } from "appwrite";

const Service = () => {
  const client = new Client()
  client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId)
  const databases = new Databases(client)

  const createProfile= async ({Name , College , Age , Skills , About , authId}) => {
    try {
      return await databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID.unique(),
        {
          Name,
          College,
          Age,
          Skills,
          About,
          authId,
        }
      )
    } catch (error) {
      console.log("Some Error occurred while creating your Profile:", error);
    }
  }
  const getUserProfile= async ({authId}) => {
    try {
      const queries = [Query.equal("authId", `${authId}`)]
      return await databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      )
    } catch (error) {
      console.log("Some Error occurred while creating your Profile:", error);
    }
  }
  return {
    createProfile,
    getUserProfile
  }
}
const service = Service()
export default service
