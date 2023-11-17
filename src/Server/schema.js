const graphql = require("graphql");
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLID,
    GraphQLList,
} = graphql;

const userData = [
    { id: "1", name: "james", age: 22, profession: "engineer" },
    { id: "12", name: "ben", age: 25, profession: "doctor" },
    { id: "123", name: "oscar", age: 42, profession: "programer" },
    { id: "1234", name: "mike", age: 82, profession: "physicist" },
    { id: "12345", name: "Emma", age: 12, profession: "none" },
];

const hobbies = [
    { id: "1", title: "DnD", description: "table top rpg", userId: "1" },
    { id: "2", title: "DnD", description: "table top rpg", userId: "1" },
    { id: "3", title: "DnD", description: "table top rpg", userId: "12" },
    { id: "4", title: "DnD", description: "table top rpg", userId: "1" },
    { id: "5", title: "DnD", description: "table top rpg", userId: "1" },
    { id: "6", title: "DnD", description: "table top rpg", userId: "1" },
];

const postsData = [
    { id: "1", comment: "hello", userId: "1" },
    { id: "2", comment: "hello there", userId: "1" },
    { id: "3", comment: "hello world", userId: "123" },
];

const UserType = new GraphQLObjectType({
    name: "User",
    description: " Documentation for user...",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        profession: { type: GraphQLString },

        hobby: {
            type: new GraphQLList(HobbyType),
            resolve(parent, args) {
                return hobbies.filter(({ userId }) => {
                    return userId === parent.id;
                });
            },
        },
        post: {
            type: new GraphQLList(PostType),
            resolve(parent, args) {
                return postsData.filter(({ userId }) => {
                    return userId === parent.id;
                });
            },
        },
    }),
});

const HobbyType = new GraphQLObjectType({
    name: "hobby",
    description: "description of hobby",
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        user: {
            type: UserType,
            resolve(parent, args) {
                return userData.find(({ id }) => {
                    return id === parent.userId;
                });
            },
        },
    }),
});

const PostType = new GraphQLObjectType({
    name: "post",
    description: "post description",
    fields: () => ({
        id: { type: GraphQLID },
        comment: { type: GraphQLString },
        user: {
            type: UserType,
            resolve(parent, args) {
                return userData.find(({ id }) => {
                    return id === parent.userId;
                });
            },
        },
    }),
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    description: "Description",
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                return userData.find(({ id }) => {
                    return id === args.id;
                });
            },
        },
        users: {
            type: new GraphQLList(UserType),
            resolve() {
                return userData;
            },
        },
        hobby: {
            type: HobbyType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return hobbies.find(({ id }) => {
                    return id === args.id;
                });
            },
        },
        hobbies: {
            type: new GraphQLList(HobbyType),
            resolve() {
                return hobbies;
            },
        },
        post: {
            type: PostType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return postsData.find(({ id }) => {
                    return id === args.id;
                });
            },
        },
        posts: {
            type: new GraphQLList(PostType),
            resolve() {
                return postsData;
            },
        },
    },
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: {
            type: UserType,
            args: {
                // id: {type: GraphQLID},
                name: { type: GraphQLString },
                age: { type: GraphQLInt },
                profession: { type: GraphQLString },
            },
            resolve(parent, args) {
                const user = {
                    name: args.name,
                    age: args.age,
                    profession: args.profession,
                };
                return user;
            },
        },
        createPost: {
            type: PostType,
            args: {
                // id: { type: GraphQLID },
                comment: { type: GraphQLString },
                userId: {
                    type: GraphQLID,
                },
            },
            resolve(parent, args) {
                const post = {
                    comment: args.comment,
                    userId: args.userId,
                };
                return post;
            },
        },
        createHobby: {
            type: HobbyType,
            args: {
                // id: { type: GraphQLID },
                title: { type: GraphQLString },
                description: { type: GraphQLString },
                userId: { type: GraphQLID },
            },
            resolve(parent, args) {
                const newHobby = {
                    title: args.title,
                    description: args.description,
                    userId: args.userId,
                };
                return newHobby;
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});
