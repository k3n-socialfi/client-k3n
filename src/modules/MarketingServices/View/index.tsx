"use client";
import CardHotKols from "../Components/CardHotKols";
import { useHomeContext } from "@/contexts/HomeContext";
import CardKols from "../Components/CardKols";
import { useServicesContext } from "@/modules/services/context/ServicesContext";
import CardHotKolsSkeleton from "../Components/CardHotKols/CardHotKolsSkeleton";
import CardServicesSkeleton from "@/modules/services/components/CardServices/CardServicesSkeleton";
import { Key } from "react";
import { useListOffer } from "@/modules/profile/hooks";
import Link from "next/link";
import { Grid } from "@mui/material";

export default function MarketingServicesView() {
  const { kols: dataTableKols, isLoading } = useHomeContext();
  const { dataServices, isLoading: loadingServices } = useServicesContext();
  const { data: listOffersData, isLoading: listOffersLoading } = useListOffer();

  return (
    <div className="flex flex-col gap-10 py-10 px-6">
      {/* Top KOLs */}
      <div className="flex flex-col gap-4">
        <div className="text-4xl font-bold">Top KOLs</div>
        <Grid container spacing={"1rem"}>
          {isLoading
            ? Array.from({ length: 9 }).map((_, key: Key) => (
                <Grid item xs={12} md={6} xl={4} key={key}>
                  <CardHotKolsSkeleton />
                </Grid>
              ))
            : dataTableKols?.slice(0, 9).map((item, index) => (
                <Grid item xs={12} md={6} xl={4} key={index}>
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
                </Grid>
              ))}
        </Grid>
      </div>

      {/* Services Board */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="text-4xl font-bold">Services Board</div>
          <div className="text-[#a7a7a7]">
            {`${dataServices?.length}`} services available
          </div>
        </div>
        <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
          <Grid container spacing={"1rem"}>
            {loadingServices
              ? Array.from({ length: 9 }).map((_, key: Key) => (
                  <Grid item xs={12} md={6} xl={3} key={key}>
                    <CardHotKolsSkeleton />
                  </Grid>
                ))
              : dataServices?.slice(0, 9).map((item, index) => (
                  <Grid item xs={12} md={6} xl={3} key={index}>
                    <CardKols
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
                  </Grid>
                ))}
          </Grid>
        </div>
      </div>

      {/* <MarketingServicesHeading>Job Offer Board</MarketingServicesHeading>
      <SubHeadingKols>
        {`${DATA_MARKETING_SERVICES?.length}`} deals listed
      </SubHeadingKols>
      <div className="flex gap-4 flex-wrap px-5 py-10 justify-center lg:justify-start">
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
      </div> */}
    </div>
  );
}
