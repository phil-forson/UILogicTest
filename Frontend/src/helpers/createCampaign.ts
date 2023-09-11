import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { Campaign } from "../../types";

// Initialize Apollo Client
const client = new ApolloClient({
  uri: import.meta.env.VITE_BACKENDURL, 
  cache: new InMemoryCache(),
});



export const createCampaign = async (input: Campaign) => {
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

  try {
    const { data } = await client.mutate({
      mutation: CREATE_CAMPAIGN,
      variables: {
        title: input.title,
        description: input.description,
        targetGroup: input.targetGroup,
        status: input.status
      },
    });

    return data.addCampaign;
  } catch (error) {
    console.error("Error creating campaign:", error);
    throw error;
  }
};
