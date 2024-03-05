import conf from '../conf/conf.js';
import { Client, ID, Databases, Query } from "appwrite";

const Service = () => {
  const client = new Client()
  client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId)
  const databases = new Databases(client)

  const createProfile= async ({Name , College , Age , Skills , About}) => {
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
        }
      )
    } catch (error) {
      console.log("Some Error occurred while creating your Profile:", error);
    }
  }
  return {
    createProfile
  }
}
const service = Service()
export default service
