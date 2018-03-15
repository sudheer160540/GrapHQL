const graphhql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphhql;

const BookType = new GraphQLObjectType({
    name: 'BOOK',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
});