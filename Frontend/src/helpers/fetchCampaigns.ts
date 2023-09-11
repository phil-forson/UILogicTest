// fetchData.ts
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: import.meta.env.VITE_BACKENDURL,
  cache: new InMemoryCache(),
});

export const getCampaigns = async (offset: number, limit: number) => {
  const GET_CAMPAIGNS_AND_TOTAL = gql`
    query GetCampaignsAndTotal($offset: Int!, $limit: Int!) {
      campaigns(offset: $offset, limit: $limit) {
        id
        title
        description
        targetGroup
        status
      }
      totalCampaigns
    }
  `;

  try {
    const { data } = await client.query({
      query: GET_CAMPAIGNS_AND_TOTAL,
      variables: { offset, limit },
    });
    return {
      campaigns: data.campaigns,
      total: data.totalCampaigns,  // Get the total number of campaigns
    };
  } catch (error) {
    console.error("Error fetching campaigns:", error);
    return { campaigns: [], total: 0 };
  }
};

