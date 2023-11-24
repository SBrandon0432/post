const graphql = require("graphql");
const { type } = require("os");
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLID,
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLNonNull,
} = graphql;

const person = [
    {
        id: 1,
        name: "sam",
        age: "20",
        isMarried: false,
        gpa: 4.0,
    },
];

const personType = new GraphQLObjectType({
    name: "person",
    description: "represents a person type",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: GraphQLInt },
        isMarried: { type: GraphQLBoolean },
        gpa: { type: GraphQLFloat },

        justAType: {
            type: personType,
            resolve(parent, args) {
                return parent;
            },
        },
    }),
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    description: "Alt Schema for post",
    fields: {
        person: {
            type: personType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return person.find(({ id }) => {
                    return parseInt(id) === parseInt(args.id);
                });
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});
