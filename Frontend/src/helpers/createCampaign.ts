import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { Campaign } from "../../types";


const client = new ApolloClient({
  uri: import.meta.env.VITE_BACKENDURL,
  cache: new InMemoryCache(),
});


const CREATE_CAMPAIGN = gql`
  mutation CreateCampaign($title: String!, $description: String!, $targetGroup: String!, $status: String!) {
    addCampaign(title: $title, description: $description, targetGroup: $targetGroup, status: $status) {
      id
      title
      description
      targetGroup
      status
    }
  }
`;

export const createCampaign = async (
  input: Campaign,
) => {
  try {
    const {title, description, status, targetGroup} = input
    const { data } = await client.mutate({
      mutation: CREATE_CAMPAIGN,
      variables: { title, description, status, targetGroup },      
    });
    return data.addCampaign;

  } catch (error) {
    console.error("Error creating campaign:", error);
    throw error;
  }
};