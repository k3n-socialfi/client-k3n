"use client";
import useFetchDataMyProfile from "@/contract/hooks/useFetchDataMyProfile";
import React, { createContext, useContext } from "react";

interface IPropsProfileContextProvider {
  children: React.ReactNode;
}
interface IProfileContextTypes {
  dataPersonal: any;
  isLoading: boolean;
  error?: any;
}

const ProfileContextTypes = {
  dataPersonal: [{}],
  isLoading: true,
  error: "",
};
const MyProfileContext =
  createContext<IProfileContextTypes>(ProfileContextTypes);
const MyProfileContextProvider = ({
  children,
}: IPropsProfileContextProvider) => {
  const { dataPersonal, isLoading } = useFetchDataMyProfile();
  return (
    <MyProfileContext.Provider value={{ dataPersonal, isLoading }}>
      {children}
    </MyProfileContext.Provider>
  );
};

const useMyProfileContext = () => {
  return useContext(MyProfileContext);
};
export { MyProfileContextProvider, useMyProfileContext };
