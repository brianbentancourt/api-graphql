import { tasks } from './sample'

export const resolvers = {
    Query: {
        hello: () => 'Hello GraphQL',
        greet: (root, { name }) => `Hello ${name}`,
        tasks: () => tasks,
    },
    Mutation: {
        createTask: (_, { input }) => {
            input._id = tasks.length
            tasks.push(input)
            return input
        }
    }
}