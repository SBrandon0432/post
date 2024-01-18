const graphql = require("graphql");
const UserType = require("./UserType");
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

module.exports = new GraphQLObjectType({
    name: "hobby",
    description: "description of hobby",
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        user: {
            type: UserType,
            resolve(parent, args) {},
        },
    }),
});
