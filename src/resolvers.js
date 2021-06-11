export const resolvers = {
    Query: {
        hello: () => 'Hello GraphQL',
        greet: (root, args) => `Hello ${args.name}`
    }
}