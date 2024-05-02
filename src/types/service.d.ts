export type TService = {
  id?: string;
  kol?: any;
  projectName: string;
  platform: string;
  price: number;
  currency: any[];
  paymentMethod: string;
  jobDescription: string;
  tags?: any[];
  img?: string;
  isPublic?: boolean;
  jobType?: string;
  jobId?: string;
  kolWallet?: string;
};

export interface TServiceSubmit extends TService {
  seed?: number;
  kol?: any;
}
