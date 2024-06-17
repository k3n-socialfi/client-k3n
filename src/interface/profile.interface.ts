export interface Post {
  post: any[];
}

export interface Wallets {
  wallets: string;
}
export interface SocialProfiles {
  social: string;
  username: string;
}

export interface ITwitterInfo {
  avatar: string | null;
  coverImage: string | null;
  creationDate: string | null;
  externalUrl: string | null;
  followers: number;
  following: number;
  numberOfTweets: number;
  royaltyPoints: number;
  totalPoints: number;
  twitterPoints: number;
  verificationStatus: boolean;
}
export interface IUserProfile {
  createdAt: number | null;
  updatedAt: number | null;
  isDeleted: boolean | null;
  platform: string | null;
  isUpdated: boolean | null;
  userId: string | null;
  username: string | null;
  role: string | null;
  type: string | null;
  jobTitle: string | null;
  organization: string | null;
  experience: string[];
  fullName: string | null;
  email: string | null;
  phoneNumber: string | null;
  review: number;
  projectChain: string | null;
  projectName: string | null;
  wallets: Wallets[];
  socialProfiles: SocialProfiles[];
  twitterPoints: number | null;
  twitterInfo: ITwitterInfo | null;
  royaltyPoints: number | null;
  totalPoints: number | null;
  avatar: string | null;
  bio: string | null;
  tags: string[];
  coverImage: string | null;
  dob: string | null;
  gender: string | null;
  location: string | null;
  verificationStatus: string | null;
  referralCode: string | null;
  lastLogin: string | null;
  posts: Post[];
}
