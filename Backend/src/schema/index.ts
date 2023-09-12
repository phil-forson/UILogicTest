import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLFieldConfigMap,
} from "graphql";
import Campaign from "../model/campaignModel";

const CampaignType = new GraphQLObjectType({
  name: "Campaign",
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    targetGroup: { type: GraphQLString },
    status: { type: GraphQLString },
  },
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    campaigns: {
      type: new GraphQLList(CampaignType),
      args: {
        searchTerm: { type: GraphQLString },
        offset: { type: GraphQLInt },
        limit: { type: GraphQLInt },
      },
      resolve(parent, args) {
        let query = {};
        if (args.searchTerm) {
          query = {
            $or: [
              { title: new RegExp(args.searchTerm, 'i') },
              { description: new RegExp(args.searchTerm, 'i') },
              { targetGroup: new RegExp(args.searchTerm, 'i') },
              { status: new RegExp(args.searchTerm, 'i') }
            ]
          };
        }
        return Campaign.find(query).skip(args.offset).limit(args.limit);
      },
    },
    totalCampaigns: {
      type: GraphQLInt,
      args: {
        searchTerm: { type: GraphQLString },
      },
      resolve(parent, args) {
        let query = {};
        if (args.searchTerm) {
          query = {
            $or: [
              { title: new RegExp(args.searchTerm, 'i') },
              { description: new RegExp(args.searchTerm, 'i') },
              { targetGroup: new RegExp(args.searchTerm, 'i') }
            ]
          };
        }
        return Campaign.countDocuments(query); 
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addCampaign: {
      type: CampaignType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        targetGroup: { type: new GraphQLNonNull(GraphQLString) },
        status: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const campaign = new Campaign({
          title: args.title,
          description: args.description,
          targetGroup: args.targetGroup,
          status: args.status,
        });
        return campaign.save();
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
