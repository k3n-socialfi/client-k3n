import { TwitterInfo } from "./users.interface";
export interface ITrendingKols {
  createdAt: number;
  updatedAt: number;
  isDeleted: boolean;
  userId: string;
  username: string;
  fullName: string;
  twitterPoints: number;
  royaltyPoints: number;
  totalPoints: number;
  avatar: string;
  coverImage: string;
  verificationStatus: boolean;
  followers: number;
  following: number;
  externalUrl: string;
  numberOfTweets: number;
  creationDate: string;
  twitterInfo?: {
    avatar?: string;
    totalPoints?: string;
  };
}
