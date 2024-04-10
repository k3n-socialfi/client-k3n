interface social {
  twitter: string;
  facebook: string;
  telegram: string;
  github: string;
}
interface User {
  creationDate: string;
  userId: string;
  username: string;
  name: string;
  followerCount: number;
  followingCount: number;
  favouritesCount: number;
  isPrivate: boolean;
  isVerified: boolean;
  isBlueVerified: boolean;
  location: string;
  profilePicUrl: string;
  profileBannerUrl: string;
  description: string;
  externalUrl: string;
  numberOfTweets: number;
  bot: boolean;
  timestamp: number;
  hasNftAvatar: boolean;
  category: { category: string };
  defaultProfile: boolean;
  defaultProfileImage: boolean;
  listedCount: number;
  verifiedType: string;
}

interface BindingValues {
  key: string;
  value: {
    imageValue: {
      alt: string;
      height: number;
      width: number;
      url: string;
    };
    type: string;
  };
}
interface Tweets {
  tweetId: string;
  creationDate: string;
  text: string;
  mediaUrl: string;
  videoUrl: string;
  user: User;
  language: string;
  favoriteCount: number;
  retweetCount: number;
  replyCount: number;
  quoteCount: number;
  retweet: boolean;
  views: number;
  timestamp: number;
  videoViewCount: number;
  inReplyToStatusId: number;
  quotedStatusId: number;
  bindingValues: BindingValues[];
  expandedUrl: string;
  retweetTweetId: string;
  extendedEntities: string;
  conversationId: string;
  retweetStatus: string;
  quotedStatus: string;
  bookmarkCount: number;
  source: string;
  communityNote: string;
}
export interface IProjectDetail {
  name: string;
  description: string;
  image: string;
  categories: string[];
  social: social;
  twitterFollowers: number;
  contractAddress: string;
  whitePaper: string;
  website: string;
  projectType: string;
  primaryEcosystem: string;
  price: number;
  circulatingSupply: string;
  maxSupply: string;
  totalSupply: string;
  ath: number;
  athDate: string;
  volume24h: number;
  marketCap: number;
  marketCapRank: number;
  fdv: number;
  tvl: number;
  tweets: Tweets[];
}

export interface IJobsDetail {
  createdAt: number;
  updatedAt: number;
  isDeleted: boolean;
  jobId: string;
  projectName: string;
  tags: string[];
  jobType: string;
  isPublic: boolean;
  jobDescription: string;
  organization: string[];
  image: string;
  creator: string;
}
