export interface Experience {
  experience: string;
}
export interface Wallets {
  wallets: string;
}
export interface SocialProfiles {
  social: string;
  username: string;
}
export interface TwitterInfo {
  twitterPoints: number;
  royaltyPoints: number;
  totalPoints: number;
  avatar: string;
  coverImage: string;
  verificationStatus: boolean;
  followers: number;
  following: number;
  externalUrl: null;
  numberOfTweets: number;
  creationDate: string;
}
export interface IUsers {
  createdAt: number;
  updatedAt: number;
  isDeleted: boolean;
  userId: string;
  username: string;
  role: string;
  type: string;
  jobTitle: string;
  organization: string;
  experience: Experience[];
  fullName: string;
  email: string;
  phoneNumber: string;
  wallets: Wallets[];
  socialProfiles: SocialProfiles[];
  twitterPoints: number;
  royaltyPoints: number;
  totalPoints: number;
  avatar: string;
  bio: string;
  coverImage: string;
  dob: string;
  gender: string;
  location: string;
  verificationStatus: string;
  referralCode: string;
  lastLogin: string;
  twitterInfo: TwitterInfo;
  review?: number;
  tags?: string[];
  pnl?: number;
  mentionedProject?: {
    chain?: string;
  };
}

export interface IFilterKOL {
  page?: number | string;
  type?: string | null;
  verification?: boolean;
  limit?: number;
  top?: number;
  tags?: string[];
  review?: string;
  minFollower?: number;
  maxFollower?: number;
  minShillScore?: number;
  maxShillScore?: number;
  mentionedProject?: string;
  shillScoreSort?: -1 | 1;
  xFollowerSort?: -1 | 1;
}
