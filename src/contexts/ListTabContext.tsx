import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useCallback,
} from "react";

interface IQueryParams {
  limit: number;
  top: number;
  page: number;
  type: string | null;
  minFollower: number;
  maxFollower: number | undefined;
  minShillScore: number;
  maxShillScore: number | undefined;
  tags: string[];
  shillScore: number | undefined;
  mentionedProject: any | undefined;
}

const queryParamsDefault: IQueryParams = {
  limit: 10,
  top: 100,
  page: 0,
  type: null,
  minFollower: 0,
  maxFollower: undefined,
  minShillScore: 0,
  maxShillScore: undefined,
  tags: [],
  shillScore: undefined,
  mentionedProject: undefined,
};

const listTabContext = createContext({
  queryParams: queryParamsDefault,
  isResetFilter: false,
  updateQueryParams: (key: string, value: any) => {},
  resetQueryParams: () => {},
});

const ListTabContextProvider = ({ children }: { children: ReactNode }) => {
  const [queryParams, setQueryParams] =
    useState<IQueryParams>(queryParamsDefault);
  const [isResetFilter, setIsResetFilter] = useState<boolean>(false);

  const updateQueryParams = (key: string, value: any) => {
    setQueryParams({ ...queryParams, [key]: value });
  };
  const resetQueryParams = useCallback(() => {
    setIsResetFilter(true);
    setQueryParams(queryParamsDefault);
    setIsResetFilter(false);
  }, []);

  return (
    <listTabContext.Provider
      value={{
        queryParams,
        isResetFilter,
        updateQueryParams,
        resetQueryParams,
      }}
    >
      {children}
    </listTabContext.Provider>
  );
};

const useListTabContext = () => {
  return useContext(listTabContext);
};

export { ListTabContextProvider, useListTabContext };
