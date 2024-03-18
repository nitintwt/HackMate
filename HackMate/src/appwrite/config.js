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

  const createHackathon= async ({Name , location , mode , date , Skills , authId}) => {
    try {
      return await databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId2,
        ID.unique(),
        {
          Name,
          location,
          date,
          Skills,
          mode,
          authId,
        }
      )
    } catch (error) {
      console.log("Some Error occurred while creating your Hackathon:", error);
    }
  }

  const getAllHackathons= async () => {
    try {
      return await databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId2,
      )
    } catch (error) {
      console.log("Some Error occurred while fetching hackathons:", error);
    }
  }
  const getUserHackathons= async ({authId}) => {
    try {
      const queries =[Query.equal("authId",`${authId}`)]
      return await databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId2,
        queries
      )
    } catch (error) {
      console.log("Some Error occurred while fetching hackathons:", error);
    }
  }
  const getHackathon= async (id) => {
    try {
      return await databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId2,
        id
      )
    } catch (error) {
      console.log("Some Error occurred while fetching hackathons:", error);
    }
  }

  const createApply= async ({HackId , UserAppliedId}) => {
    try {
      return await databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId3,
        ID.unique(),
        {
          HackId,
          UserAppliedId,
        }
      )
    } catch (error) {
      console.log("Some Error occurred while creating your Profile:", error);
    }
  }

  const getAppliedUserId= async (HackId) => {
    try {
      const queries =[Query.equal("HackId",`${HackId}`)]
      return await databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId3,
        queries
      )
    } catch (error) {
      console.log("Some Error occurred while fetching hackathons:", error);
    }
  }



  return {
    createProfile,
    getUserProfile,
    createHackathon,
    getAllHackathons,
    getUserHackathons,
    getHackathon,
    createApply,
    getAppliedUserId
  }
}
const service = Service()
export default service
