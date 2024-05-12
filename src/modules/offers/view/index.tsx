"use client"
import * as React from "react";
import { Divider } from "@mui/material";
import styled from "styled-components";
import { getJobsProfile } from "../services";
import Services from "../components/ListServices";
import TableDetails from "../components/TableDetails";

export interface IViewOfferProps { }

export default function ViewOffer(props: IViewOfferProps) {
  const [listServicesProfile, setListServicesProfile] = React.useState<any[]>();
  
  const fetchDataServices = async () => {
    const dataServices: any = await getJobsProfile();
    setListServicesProfile(dataServices?.data?.data);
  };

  React.useEffect(() => {
    fetchDataServices()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  return (
    <div>
      <Title>Services Management</Title>
      <Services listServicesProfile={listServicesProfile} fetchDataServices={fetchDataServices} />
      <Divider sx={{ borderColor: "#B9B9B9 " }} />
      <TableDetails />
    </div>
  );
}

const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  color: #FFFFFF;
`
