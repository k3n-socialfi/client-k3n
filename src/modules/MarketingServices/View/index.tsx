"use client";
import styled from "styled-components";
import CardHotKols from "../Components/CardHotKols";
import { useHomeContext } from "@/contexts/HomeContext";
import CardKols from "../Components/CardKols";
import { useServicesContext } from "@/modules/services/context/ServicesContext";
import CardDeal from "../Components/CardDeal";
import { DATA_MARKETING_SERVICES } from "@/constant/marketingServices";
import CardHotKolsSkeleton from "../Components/CardHotKols/CardHotKolsSkeleton";
import CardServicesSkeleton from "@/modules/services/components/CardServices/CardServicesSkeleton";
import { Fragment, Key, useState } from "react";
import { useListOffer } from "@/modules/profile/hooks";
import Link from "next/link";

export default function MarketingServicesView() {
  const { kols: dataTableKols, isLoading } = useHomeContext();
  const { dataServices, isLoading: loadingServices } = useServicesContext();
  const { data: listOffersData, isLoading: listOffersLoading } = useListOffer();

  return (
    <Fragment>
      {/* Top KOLs */}
      <MarketingServicesHeading>Top KOLs</MarketingServicesHeading>
      <div className="flex gap-4 flex-wrap px-5 py-10 justify-center lg:justify-start">
        {isLoading
          ? [0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <CardHotKolsSkeleton key={item} />
            ))
          : dataTableKols?.slice(0, 9).map((item, index) => (
              <div key={index}>
                <Link
                  href={`/profile/${item?.username}`}
                  className="text-white"
                >
                  <CardHotKols
                    number={index + 1}
                    avatar={item?.twitterInfo?.avatar}
                    name={item?.username}
                    tags={item?.tags}
                    review={item?.review}
                    score={item?.twitterInfo?.totalPoints}
                  />
                </Link>
              </div>
            ))}
      </div>

      {/* Services Board */}
      <MarketingServicesHeading>Services Board</MarketingServicesHeading>
      <SubHeadingKols>
        {`${dataServices?.length}`} services available
      </SubHeadingKols>
      <div className="flex gap-4 flex-wrap px-5 py-10 justify-center lg:justify-start">
        {loadingServices
          ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <CardServicesSkeleton key={item} />
            ))
          : dataServices
              ?.slice(0, 9)
              .map((item, key: Key) => (
                <CardKols
                  key={key}
                  image={item?.image}
                  projectName={item?.projectName}
                  price={`${item?.price}`}
                  paymentMethod={item?.paymentMethod}
                  jobId={item?.jobId}
                  tags={item?.tags}
                  projectDescription={item?.jobDescription}
                  reviews={item?.review}
                  creatorInfo={item.creatorInfo}
                />
              ))}
      </div>
      <MarketingServicesHeading>Available Deal</MarketingServicesHeading>
      <SubHeadingKols>
        {`${DATA_MARKETING_SERVICES?.length}`} deals listed
      </SubHeadingKols>
      <WrapperCardServices>
        <Services>
          {loadingServices
            ? [0, 1, 2, 3].map((item) => <CardServicesSkeleton key={item} />)
            : DATA_MARKETING_SERVICES?.map((item) => (
                <CardDeal
                  key={item?.id}
                  image={item?.image}
                  name={item?.name}
                  title={item?.title}
                  price={item?.price}
                  isIcon={item?.isIcon}
                />
              ))}
        </Services>
      </WrapperCardServices>
    </Fragment>
  );
}

const MarketingServicesHeading = styled.h3`
  font-size: 40px;
  line-height: 48px;
  font-weight: 700;
  color: #fff;
  width: 100%;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const MarketingKols = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 80px;
  padding: 20px 40px;
  @media (max-width: 600px) {
    justify-content: center;
    align-items: center;
  }
`;
const WrapperCardServices = styled.div`
  display: flex;
  align-items: start;
  gap: 20px;
  padding: 24px 14px;
  width: 100%;
  overflow-x: hidden;
  margin-top: 24px;
`;

const SubHeadingKols = styled.span`
  font-size: 16px;
  color: #a7a7a7;
  text-align: left;
`;

const Services = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  overflow-x: auto;
  width: 100%;
  padding: 20px 40px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
