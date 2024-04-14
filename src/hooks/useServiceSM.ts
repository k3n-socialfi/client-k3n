import { TService } from "@/types/service";
import * as React from "react";

export interface useServiceSMProps {}

export default function useServiceSM(props: useServiceSMProps) {
  const createService = async () => {};

  const getListSerivces = (params: TService) => {};
  return { createService, getListSerivces };
}
