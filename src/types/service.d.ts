export type TService = {
  completed: number;
  createdAt: EpochTimeStamp;
  creator: string;
  creatorInfo: IUserKOL;
  currency: string[];
  image: string;
  isDeleted: boolean;
  isPublic: boolean;
  jobDescription: string;
  jobId: string;
  jobState: string;
  jobType: string;
  kolWallet: string;
  offers: string[];
  organization: string[];
  paymentMethod: string;
  platform: string;
  price: number;
  projectName: string;
  rating: number;
  review: number;
  subscriber: any;
  tags: string[];
  updatedAt: EpochTimeStamp;
};

export interface TServiceSubmit extends TService {
  seed?: number;
  kol?: any;
}
