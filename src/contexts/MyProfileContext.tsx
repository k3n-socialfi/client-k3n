"use client";
import useFetchDataMyProfile from "@/contract/hooks/useFetchDataMyProfile";
import React, { createContext, useContext } from "react";

interface IPropsProfileContextProvider {
  children: React.ReactNode;
}
interface IProfileContextTypes {
  dataPersonal: any;
  dataPosts: any;
  isLoading: boolean;
  error?: any;
  fetchData: () => void;
}

const ProfileContextTypes = {
  dataPersonal: [{}],
  dataPosts: [{}],
  isLoading: true,
  error: "",
  fetchData: () => undefined,
};
const MyProfileContext =
  createContext<IProfileContextTypes>(ProfileContextTypes);
const MyProfileContextProvider = ({
  children,
}: IPropsProfileContextProvider) => {
  const { dataPersonal, dataPosts, isLoading, fetchData } =
    useFetchDataMyProfile();

  return (
    <MyProfileContext.Provider
      value={{ dataPersonal, dataPosts, isLoading, fetchData }}
    >
      {children}
    </MyProfileContext.Provider>
  );
};

const useMyProfileContext = () => {
  return useContext(MyProfileContext);
};
export { MyProfileContextProvider, useMyProfileContext };
