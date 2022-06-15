import { ApolloServerPluginDrainHttpServer } from "apollo-server-core"
import {
  ApolloServer,
  ExpressContext
} from "apollo-server-express"
import * as express from "express"
import { Server } from "http"
import Db from "./db"
export async function createApolloServer(
  db: Db,
  httpServer: Server,
  app: express.Application
): Promise<ApolloServer<ExpressContext>> {
  const resolvers = {
    Query: {
      currentUser: () => {
        return {
          id: "123",
          name: "John Doe",
          handle: "johndoe",
          coverUrl: "",
          avatarUrl: "",
          createdAt: "",
          updatedAt: "",
        }
      },
      suggestions: () => {
        return []
      },
    },
  }

  const server = new ApolloServer({
    resolvers,
    context: () => ({ db }),
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
    ],
  })
  await server.start()
  server.applyMiddleware({ app })
  return server
}
