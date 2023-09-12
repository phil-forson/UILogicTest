"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const campaignModel_1 = __importDefault(require("../model/campaignModel"));
const CampaignType = new graphql_1.GraphQLObjectType({
    name: "Campaign",
    fields: {
        id: { type: graphql_1.GraphQLString },
        title: { type: graphql_1.GraphQLString },
        description: { type: graphql_1.GraphQLString },
        targetGroup: { type: graphql_1.GraphQLString },
        status: { type: graphql_1.GraphQLString },
    },
});
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        campaigns: {
            type: new graphql_1.GraphQLList(CampaignType),
            args: {
                searchTerm: { type: graphql_1.GraphQLString },
                offset: { type: graphql_1.GraphQLInt },
                limit: { type: graphql_1.GraphQLInt },
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
                return campaignModel_1.default.find(query).skip(args.offset).limit(args.limit);
            },
        },
        totalCampaigns: {
            type: graphql_1.GraphQLInt,
            args: {
                searchTerm: { type: graphql_1.GraphQLString },
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
                return campaignModel_1.default.countDocuments(query);
            },
        },
    },
});
const Mutation = new graphql_1.GraphQLObjectType({
    name: "Mutation",
    fields: {
        addCampaign: {
            type: CampaignType,
            args: {
                title: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                description: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                targetGroup: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                status: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            },
            resolve(parent, args) {
                const campaign = new campaignModel_1.default({
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
exports.default = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});
