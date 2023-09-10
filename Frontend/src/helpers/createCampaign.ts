import axios from 'axios';
import { Campaign, CreateCampaignInput } from '../../types';


export const createCampaign = async (input: CreateCampaignInput): Promise<Campaign> => {
  const mutation = `
    mutation {
      addCampaign(title: "${input.title}", description: "${input.description}", targetGroup: "${input.targetGroup}") {
        id
        title
        description
        targetGroup
        status
      }
    }
  `;

  const response = await axios.post(import.meta.env.VITE_BACKENDURL, { query: mutation });

  return response.data.data.addCampaign;
};