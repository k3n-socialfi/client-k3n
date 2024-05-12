"use client";
import styled from "styled-components";
import CardHotKols from "../Components/CardHotKols";
import { useHomeContext } from "@/contexts/HomeContext";
import Link from "next/link";
import { LinkCustom } from "@/components/CardFeaturedKOLs/style";
import CardKols from "../Components/CardKols";
import { useServicesContext } from "@/modules/services/context/ServicesContext";
import CardDeal from "../Components/CardDeal";
import { DATA_MARKETING_SERVICES } from "@/constant/marketingServices";
import CardHotKolsSkeleton from "../Components/CardHotKols/CardHotKolsSkeleton";
import CardServicesSkeleton from "@/modules/services/components/CardServices/CardServicesSkeleton";

export default function MarketingServicesView() {
  const { kols: dataTableKols, isLoading } = useHomeContext();
  const { dataServices, isLoading: loadingServices } = useServicesContext();

  return (
    <WrapperMarketingServices>
      <MarketingServicesHeading>Hot KOLs</MarketingServicesHeading>

      <MarketingKols>
        {isLoading
          ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
              <CardHotKolsSkeleton key={item} />
            ))
          : dataTableKols?.map((item, index) => (
              <LinkCustom
                key={item?.userId}
                href={`/profile/${item?.username}`}
              >
                <CardHotKols
                  number={index + 1}
                  avatar={item?.twitterInfo?.avatar}
                  name={item?.username}
                  des={item?.dob}
                />
              </LinkCustom>
            ))}
      </MarketingKols>
      <MarketingServicesHeading>Available Services</MarketingServicesHeading>
      <SubHeadingKols>
        {`${dataServices?.length}`} services available
      </SubHeadingKols>
      <WrapperCardServices>
        <Services>
          {loadingServices
            ? [0, 1, 2, 3].map((item) => <CardServicesSkeleton key={item} />)
            : dataServices?.map((item) => (
                <CardKols
                  key={item?.id}
                  image={item?.image}
                  projectName={item?.projectName}
                  price={`${item?.price}`}
                  paymentMethod={item?.paymentMethod}
                />
              ))}
        </Services>
      </WrapperCardServices>
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
    </WrapperMarketingServices>
  );
}

const WrapperMarketingServices = styled.div`
  padding: 20px;
`;

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
  margin-top: 12px;
  flex-wrap: wrap;
  margin-bottom: 80px;
  padding-left: 50px;
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
  overflow-x: auto;
  width: 100%;
  padding: 24px 0px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
