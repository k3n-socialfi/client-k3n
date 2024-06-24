import { getKolsFilter } from "@/services";
import { useState, useCallback, useEffect } from "react";

interface IProject {
  tokenName: string | null;
  contractAddress: string | null;
  symbol: string | null;
  image: string | null;
  chain: string | null;
  firstTweetDate: string | null;
  firstTweet: string | null;
  createdAt: EpochTimeStamp;
  updatedAt: EpochTimeStamp;
  isDeleted: boolean;
}

interface ISocialProfile {
  social: string | null;
  username: string | null;
}

interface ITwitterInfo {
  userId: string | null;
  username: string | null;
  fullName: string | null;
  avatar: string | null;
  coverImage: string | null;
  verificationStatus: boolean;
  followers: number;
  following: number;
  externalUrl: string | null;
  numberOfTweets: number;
  creationDate: Date;
  createdAt: EpochTimeStamp;
  updatedAt: EpochTimeStamp;
  isDeleted: boolean;
  twitterPoints: number;
  royaltyPoints: number;
  totalPoints: number;
  previousRank: number;
  previous30DRank: number;
  previous7DRank: number;
  previousPoint: number;
  previous7DPoint: number;
  previous30DPoint: number;
}

interface IAPIData {
  userId: string | null;
  username: string | null;
  role: string | null;
  isProjectAccount: boolean;
  type: string | null;
  fullName: string | null;
  socialProfiles: ISocialProfile[];
  tags: string[];
  jobTittle: string | null;
  review: number;
  bio: string | null;
  location: string | null;
  isUpdated: true;
  platform: string | null;
  createdAt: EpochTimeStamp;
  updatedAt: EpochTimeStamp;
  isDeleted: boolean;
  jobTitle: string | null;
  organization: string | null;
  email: string | null;
  phoneNumber: string | null;
  wallets: string[];
  dob: string | null;
  gender: string | null;
  referralCode: string | null;
  lastLogin: EpochTimeStamp;
  projectChain: string | null;
  projectName: string | null;
  twitterInfo: ITwitterInfo;
  mentionedProjects: IProject[];
}

interface IQueryParams {
  page: number;
  limit: number;
  top: number;
  type: string | null;
  verification: boolean;
  tags: string[];
  review: string | null;
  minFollower: number;
  maxFollower: number | undefined;
  minShillScore: number;
  maxShillScore: number | undefined;
  mentionedProject: string | null;
  shillScoreSort: -1 | 1 | null;
  xFollowerSort: -1 | 1 | null;
}

const queryParamsDefault: IQueryParams = {
  page: 0,
  limit: 100,
  top: 10000,
  type: null,
  verification: false,
  tags: [],
  review: null,
  minFollower: 0,
  maxFollower: undefined,
  minShillScore: 0,
  maxShillScore: undefined,
  mentionedProject: null,
  shillScoreSort: -1,
  xFollowerSort: null,
};

export const useQueryRanking = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<IAPIData[]>([]);
  const [queryParams, setQueryParams] =
    useState<IQueryParams>(queryParamsDefault);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [isResetFilter, setIsResetFilter] = useState<boolean>(false);

  const fetchUsersList = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await getKolsFilter(queryParams);
      if (res) {
        const { data } = res.data;
        if (data) {
          setData(data.users);
          setTotalPage(data.totalPages);
        }
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, [queryParams]);

  const updateQueryParams = useCallback(
    (key: string, value: any) => {
      switch (key) {
        case "follower":
          setQueryParams({
            ...queryParams,
            minFollower: value.minValue,
            maxFollower: value.maxValue,
          });
          break;
        case "shillScore":
          setQueryParams({
            ...queryParams,
            minShillScore: value.minValue,
            maxShillScore: value.maxValue,
          });
          break;
        default:
          setQueryParams({ ...queryParams, [key]: value });
          break;
      }
    },
    [queryParams],
  );

  const sortRankingList = useCallback(
    (key: string) => {
      switch (key) {
        case "shillScoreSort":
          setQueryParams({
            ...queryParams,
            shillScoreSort: queryParams.shillScoreSort === -1 ? 1 : -1,
            xFollowerSort: null,
          });
          break;
        case "xFollowerSort":
          setQueryParams({
            ...queryParams,
            shillScoreSort: null,
            xFollowerSort: queryParams.xFollowerSort === -1 ? 1 : -1,
          });
        default:
          break;
      }
    },
    [queryParams],
  );

  const resetQueryParams = useCallback(() => {
    setIsResetFilter(true);
    setQueryParams(queryParamsDefault);
    setIsResetFilter(false);
  }, []);

  useEffect(() => {
    fetchUsersList();
  }, [fetchUsersList]);

  return {
    queryParams,
    isResetFilter,
    totalPage,
    data,
    isLoading,
    sortRankingList,
    updateQueryParams,
    resetQueryParams,
    fetchUsersList,
  };
};
