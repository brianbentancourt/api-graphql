export const resolvers = {
    Query: {
        hello: () => 'Hello GraphQL',
        greet: (root, { name }) => `Hello ${name}`
    }
}