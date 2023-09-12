import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: import.meta.env.VITE_BACKENDURL,
  cache: new InMemoryCache(),
});

export const GET_CAMPAIGNS = gql`
    query GetCampaigns($offset: Int!, $limit: Int!, $searchTerm: String) {
      campaigns(offset: $offset, limit: $limit, searchTerm: $searchTerm) {
        id
        title
        description
        targetGroup
        status
      }
      totalCampaigns(searchTerm: $searchTerm)
    }

  `;

export const getCampaigns  = async (
  offset: number,
  limit: number,
  bypassCache?: boolean ,
  searchTerm?: string,
) => {
  console.log('url ',import.meta.env.VITE_BACKENDURL)
  try {
    const { data } = await client.query({
      query: GET_CAMPAIGNS,
      variables: { offset, limit, searchTerm },
      fetchPolicy: bypassCache ? 'network-only' : 'cache-first',  // Set fetchPolicy based on bypassCache

    });
    return {
      campaigns: data.campaigns,
      total: data.totalCampaigns ?? 1,  // Get the total number of campaigns
    };
  } catch (error) {
    console.error("Error fetching campaigns:", error);
    return { campaigns: [], total: 0};
  }
};
