const graphql = require("graphql");
const UserType = require("./UserType");

const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const PostType = new GraphQLObjectType({
    name: "post",
    description: "post description",
    fields: () => ({
        id: { type: GraphQLID },
        comment: { type: GraphQLString },
        user: {
            type: UserType,
            resolve(parent, args) {},
        },
    }),
});
