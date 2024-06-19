"use client";

import { Divider } from "@mui/material";
import styled from "styled-components";
import { getJobsProfile } from "../services";
import Services from "../components/ListServices";
import TableDetails from "../components/TableDetails";
import { useCallback, useEffect, useState } from "react";
import MyRequest from "../components/MyRequest";

export interface IViewOfferProps {}

export default function ViewOffer(props: IViewOfferProps) {
  const [listServicesProfile, setListServicesProfile] = useState<any[]>();

  const fetchDataServices = useCallback(async () => {
    const dataServices: any = await getJobsProfile();
    setListServicesProfile(dataServices?.data?.data);
  }, []);

  useEffect(() => {
    fetchDataServices();
  }, [fetchDataServices]);

  return (
    <div className="py-4">
      <Title>Services Management</Title>
      <Services
        listServicesProfile={listServicesProfile}
        fetchDataServices={fetchDataServices}
      />
      <Divider sx={{ borderColor: "#B9B9B9 " }} />
      <TableDetails />

      <MyRequest/>


    </div>
  );
}

const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  color: #ffffff;
`;
