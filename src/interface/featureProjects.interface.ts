export interface IFeatureProjects {
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
