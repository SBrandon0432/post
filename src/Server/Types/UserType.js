const graphql = require("graphql");
const PostType = require("./PostType");
const HobbyType = require("./HobbyType");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID, GraphQLList } =
    graphql;

const HobbySchema = require("../MongoDbSchemas/hobbies");
const PostSchema = require("../MongoDbSchemas/posts");

const UserType = new GraphQLObjectType({
    name: "User",
    description: " Documentation for user...",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        profession: { type: GraphQLString },

        posts: {
            type: new GraphQLList(PostType),
            resolve(parent, args) {
                return PostSchema.find({ userId: parent.id });
            },
        },

        hobbies: {
            type: new GraphQLList(HobbyType),
            resolve(parent, args) {
                return HobbySchema.find({ userId: parent.id });
            },
        },
    }),
});
