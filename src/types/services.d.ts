interface IServices {
  isDeleted?: boolean;
  jobId?: string;
  projectName?: string;
  tags?: string[];
  jobType?: string | any;
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
  currency?: string[] | any[];
  offers?: string[] | any[];
  subscriber?: string | any;
  kolWallet?: string;
  jobState?: string;
}
