const graphql = require("graphql");
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
} = graphql;

const UserSchema = require("../MongoDbSchemas/users");
const HobbySchema = require("../MongoDbSchemas/hobbies");
const PostSchema = require("../MongoDbSchemas/posts");

const userData = [];

const hobbies = [];

const postsData = [];

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
                return UserSchema.findById(args.id);
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
        // hobbies: {
        //     type: new GraphQLList(HobbyType),
        //     resolve(parent, args) {
        //         console.log(
        //             "hobbies call",
        //             HobbySchema.findById(args.id),
        //             args.id,
        //         );
        //         return HobbySchema.findById(args.id);
        //     },
        // },
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
                name: { type: new GraphQLNonNull(GraphQLString) },
                age: { type: new GraphQLNonNull(GraphQLInt) },
                profession: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
                const { name, age, profession, id } = args;
                const user = UserSchema({
                    id: id,
                    name: name,
                    age: age,
                    profession: profession,
                });
                return user
                    .save()
                    .then(() => {
                        return user;
                    })
                    .catch((err) => {
                        console.error(err);
                        return err;
                    });
            },
        },
        createPost: {
            type: PostType,
            args: {
                comment: { type: new GraphQLNonNull(GraphQLString) },
                userId: {
                    type: new GraphQLNonNull(GraphQLID),
                },
            },
            resolve(parent, args) {
                const { comment, userId, id } = args;
                const post = PostSchema({
                    id: id,
                    comment: comment,
                    userId: userId,
                });
                return post
                    .save()
                    .then(() => {
                        return post;
                    })
                    .catch((err) => {
                        console.error(err);
                        return err;
                    });
            },
        },
        createHobby: {
            type: HobbyType,
            args: {
                title: { type: new GraphQLNonNull(GraphQLString) },
                description: { type: new GraphQLNonNull(GraphQLString) },
                userId: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args) {
                const { title, description, userId, id } = args;
                const newHobby = HobbySchema({
                    id: id,
                    title: title,
                    description: description,
                    userId: userId,
                });
                return newHobby
                    .save()
                    .then(() => {
                        return newHobby;
                    })
                    .catch((err) => {
                        console.error(err);
                        return err;
                    });
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});
