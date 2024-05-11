"use client"
import * as React from "react";
import Services from "../components/ListServices";
import styled from "styled-components";
import { getJobsProfile } from "../services";

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
    <Container>
      <div>
      <Title>Services Management</Title>
      <Services listServicesProfile={listServicesProfile} />
      </div>
    </Container>
  );
}

const Container = styled.div`
`
const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  color: #FFFFFF;
`
