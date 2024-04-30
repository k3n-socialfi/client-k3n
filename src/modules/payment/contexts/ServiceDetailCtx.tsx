"use client";
import React, { createContext, useContext } from "react";
import { TService } from "@/types/service";
import useServiceDetail from "../hooks/useServiceDetail";

interface IPropsServiceDetailCtxProvider {
  children: React.ReactNode;
}
interface IServiceDetailCtxTypes {
  serviceDetail?: TService;
  isLoading: boolean;
}

const ServiceDetailCtxDefault = {
  dataServices: undefined,
  isLoading: true,
};
const ServiceDetailCtx = createContext<IServiceDetailCtxTypes>(
  ServiceDetailCtxDefault,
);
const ServiceDetailCtxProvider = ({
  children,
}: IPropsServiceDetailCtxProvider) => {
  const { serviceDetail, isLoading } = useServiceDetail();

  return (
    <ServiceDetailCtx.Provider value={{ serviceDetail, isLoading }}>
      {children}
    </ServiceDetailCtx.Provider>
  );
};

const useServiceDetailCtx = () => {
  return useContext(ServiceDetailCtx);
};
export { ServiceDetailCtxProvider, useServiceDetailCtx };
