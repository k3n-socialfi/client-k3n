interface IUserKOL {
  bio: string;
  createdAt: number;
  dob?: string;
  email?: string;
  fullName: string;
  gender: string;
  isDeleted: boolean;
  isProjectAccount: boolean;
  isUpdated: boolean;
  jobTitle: string;
  jobTittle: string;
  lastLogin: number;
  location: string;
  organization: string;
  phoneNumber: string;
  platform: string;
  projectChain: string;
  projectName: string;
  referralCode: string;
  review: number;
  role: string;
  socialProfiles: ISocial[];
  tags: string[];
  twitterInfo: ITwitterProfile;
  type: string;
  updatedAt: number;
  userId: string;
  username: string;
  wallets: any;
}

interface ISocial {
  social: string;
  username: string;
}
