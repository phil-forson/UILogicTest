import mongoose, { Schema, Document } from 'mongoose';

// Define an interface for the Campaign document
interface ICampaign extends Document {
  title: string;
  description: string;
  targetGroup: string;
  status: string;
}

// Defining the schema for the Campaign model
const campaignSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  targetGroup: { type: String, required: true },
  status: { type: String, required: true }
});

// Exporting the Campaign model based on the defined schema
export default mongoose.model<ICampaign>('Campaign', campaignSchema);
