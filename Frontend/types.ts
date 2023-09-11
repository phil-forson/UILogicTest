export interface Campaign {
    id?: string;
    title: string;
    description: string;
    targetGroup: string;
    status: string;
  }


  export interface CreateCampaignInputError {
    titleErr: string;
    descriptionErr: string;
    targetGroupErr: string;
    statusErr: string
  }