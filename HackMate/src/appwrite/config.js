import conf from '../conf/conf.js';
import { Client, ID, Databases, Query } from "appwrite";

const Service = () => {
  const client = new Client()
  client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId)
  const databases = new Databases(client)

  const createProfile= async ({Name , College , Age , Skills }) => {
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
        }
      )
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
    }
  }
  return {
    createProfile
  }
}
const service = Service()
export default service
