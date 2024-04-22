"use client";
import React, { createContext, useContext } from "react";
import useFetchDataServices from "../Hook/useFetchDataServices";

interface IPropsServicesContextProvider {
  children: React.ReactNode;
}
interface IServicesContextTypes {
  dataServices: any;
  dataPopularServices: any;
  isLoading: boolean;
  error?: any;
}

const ServicesContextTypes = {
  dataServices: [{}],
  dataPopularServices: [{}],
  isLoading: true,
  error: "",
};
const ServicesContext =
  createContext<IServicesContextTypes>(ServicesContextTypes);
const ServicesContextProvider = ({
  children,
}: IPropsServicesContextProvider) => {
  const { dataServices, isLoading, dataPopularServices } =
    useFetchDataServices();

  return (
    <ServicesContext.Provider
      value={{ dataServices, isLoading, dataPopularServices }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

const useServicesContext = () => {
  return useContext(ServicesContext);
};
export { ServicesContextProvider, useServicesContext };
