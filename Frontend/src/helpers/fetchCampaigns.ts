// fetchData.ts
import axios from 'axios';
import {Campaign } from "../../types"

export const fetchCampaigns = async (): Promise<Campaign[]> => {
  const query = `
    query {
      campaigns {
        id
        title
        description
        targetGroup
        status
      }
    }
  `;

  const response = await axios.post(import.meta.env.VITE_BACKENDURL, { query });

  return response.data.data.campaigns;
};
