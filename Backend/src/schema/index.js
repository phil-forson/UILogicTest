// Importing required GraphQL types and the Campaign model
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");
const Campaign = require("../model/campaignModel");

// Defining the GraphQL type for a Campaign
const CampaignType = new GraphQLObjectType({
  name: "Campaign", // Name of the type
  fields: {
    // Fields that can be queried or mutated
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    targetGroup: { type: GraphQLString },
    status: { type: GraphQLString },
  },
});

// Defining the root query type
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType", // Name of the root query
  fields: {
    campaigns: {
      // Query to fetch all campaigns
      type: new GraphQLList(CampaignType), // Returns a list of CampaignType
      args: {
        searchTerm: { type: GraphQLString },
        offset: { type: GraphQLInt }, // Changed from 'skip' to 'offset'
        limit: { type: GraphQLInt },
      },
      resolve(parent, args) {
        // Resolver function to fetch data
        return Campaign.find({})
          .skip(args.offset) 
          .limit(args.limit);
      },
    },
    totalCampaigns: {
      // New field to get the total number of campaigns
      type: GraphQLInt, // Returns an integer
      resolve() {
        return Campaign.countDocuments(); // Use Mongoose's countDocuments() to get the total count
      },
    },
  },
});

// Defining mutations for modifying data
const Mutation = new GraphQLObjectType({
  name: "Mutation", // Name of the mutation type
  fields: {
    addCampaign: {
      // Mutation to add a new campaign
      type: CampaignType, // Returns the newly created CampaignType
      args: {
        // Arguments required for the mutation
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        targetGroup: { type: new GraphQLNonNull(GraphQLString) },
        status: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        // Resolver function to perform the mutation
        // Creating a new campaign object
        const campaign = new Campaign({
          title: args.title,
          description: args.description,
          targetGroup: args.targetGroup,
          status: args.status, // Setting status as "Active" by default
        });
        return campaign.save(); // Saving the new campaign to the database
      },
    },
  },
});

// Exporting the complete GraphQL schema
module.exports = new GraphQLSchema({
  query: RootQuery, // Root query definition
  mutation: Mutation, // Mutations definition
});
