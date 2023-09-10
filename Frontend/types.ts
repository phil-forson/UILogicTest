export interface Campaign {
    id: string;
    title: string;
    description: string;
    targetGroup: string;
    status: string;
  }

  export interface CreateCampaignInput {
    title: string;
    description: string;
    targetGroup: string;
  }