interface IServices {
  creatorInfo?: ICreatorInfo;
  createdAt?: number | string;
  updatedAt?: number | string;
  isDeleted?: boolean;
  jobId?: string;
  projectName?: string;
  tags?: string[];
  jobType?: string;
  isPublic?: boolean;
  jobDescription?: string;
  organization?: string[];
  image?: string;
  creator?: string;
  completed?: number;
  review?: number;
  rating?: number;
  price?: number;
  paymentMethod?: string;
  platform?: string;
  currency?: string[];
  offers?: string[];
  subscriber?: string;
  kolWallet?: string;
  jobState?: string;
}

interface ICreatorInfo {
  createdAt?: number | string;
  updatedAt?: number | string;
  isDeleted?: boolean;
  userId?: string;
  username?: string;
  role?: string;
  isProjectAccount?: boolean;
  type?: string;
  jobTitle?: string;
  organization?: string;
  fullName?: string;
  email?: string;
  phoneNumber?: number | string;
  wallets?: string[];
  socialProfiles?: ISocial[];
  tags?: string[];
  jobTittle?: string;
  review?: number;
  bio?: string;
  dob?: string;
  gender?: string;
  location?: string;
  referralCode?: string;
  lastLogin?: string;
  isUpdated?: boolean;
  projectChain?: string;
  projectName?: string;
  platform?: string;
  twitterInfo?: ITwitterInfo;
  experience?: string[];
}

interface ISocial {
  social?: string;
  username?: string;
}

interface ITwitterInfo {
  twitterPoints?: number;
  royaltyPoints?: number;
  totalPoints?: number;
  avatar?: string;
  coverImage?: string;
  verificationStatus?: boolean;
  followers?: number;
  following?: number;
  externalUrl?: string;
  numberOfTweets?: number;
  creationDate?: string;
}
