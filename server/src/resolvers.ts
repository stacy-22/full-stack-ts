import Query from "./resolvers/Query"
import Db, { DbTweet, DbUser } from "./db"
import { Resolvers } from "./resolvers-types.generated"

export interface TwitterResolverContext {
    db: Db,
    dbTweetCache: Record<string, DbTweet>,
    dbTweetToFavouriteCountMap: Record<string, number>,
    dbUserCache: Record<string, DbUser>,
  }

const resolvers: Resolvers<TwitterResolverContext> = {
  Query,
}

export default resolvers;
