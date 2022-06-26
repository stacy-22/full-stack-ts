import Db, { DbTweet, DbUser } from './db';
import { Resolvers } from './resolvers-types.generated';
import Query from './resolvers/Query';
import Tweet from './resolvers/Tweet';
import User from './resolvers/User';

export interface TwitterResolverContext {
  db: Db;
  dbTweetCache: Record<string, DbTweet>;
  dbTweetToFavoriteCountMap: Record<string, number>;
  dbUserCache: Record<string, DbUser>;
}

const resolvers: Resolvers<TwitterResolverContext> = {
  Query,
  Tweet,
  User,
};

export default resolvers;
