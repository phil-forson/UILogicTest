const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLList, GraphQLNonNull } = require('graphql');
const Campaign = require('../model/campaignModel')

const CampaignType = new GraphQLObjectType({
  name: 'Campaign',
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    targetGroup: { type: GraphQLString },
    status: {type: GraphQLString}
  },
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    campaigns: {
      type: new GraphQLList(CampaignType),
      resolve(parent, args) {
        return Campaign.find({});
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addCampaign: {
      type: CampaignType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        targetGroup: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const campaign = new Campaign({
          title: args.title,
          description: args.description,
          targetGroup: args.targetGroup,
          status: "Active"
        });
        return campaign.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
