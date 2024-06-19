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
  type: string;
  review: number;

  twitterInfo?: {
    avatar?: string;
    totalPoints: number;
    previous7DPoint?: number;
    previous7DRank: number;
    previous30DPoint?: number;
    previous30DRank?: number;
    username?: string;
    verificationStatus?: boolean;
  };
}

export interface ITrendingKolsQueryParams {
  page: number;
  limit: number;
  type: string | null;
  date: string | null;
  change1D: number | null;
  change7D: number | null;
  change30D: number | null;
}
