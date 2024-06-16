"use client";
import * as React from "react";
import styled from "styled-components";
import {
  bgAction,
  colorAction,
  DATA_HEAD_CP,
  ENUM_STATUS_OFFER,
  ENUM_STATUS_OFFER_BG,
  ENUM_STATUS_OFFER_BUTTON,
  ENUM_STATUS_OFFER_COLOR,
  ICompletedProfileAction,
} from "@/constant/dataTableDetails";
import {
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useMyProfileContext } from "@/contexts/MyProfileContext";
import useMyOffer from "../../hooks/useMyOffer";
import useServiceContract from "@/modules/payment/hooks/useServiceContract";
import dayjs from "dayjs";
import { LinkCustom } from "@/components/CardFeaturedKOLs/style";
import { IconSort } from "@/assets/icons";

interface ICompletedProjectProps {
  arrowChange?: string;
}

interface IStatus {
  status?: string;
  action?: string;
}

export default function TableDetails() {
  const { dataPersonal } = useMyProfileContext();
  const { listOffer, acceptOffer, isLoading } = useMyOffer();
  const { completedServiceContract, isLoading: isLoadingCallSM } =
    useServiceContract();
  return (
    <StyleBox>
      <Container>
        <StyleTitle>Table Detail</StyleTitle>
        <LinkCustom href={`/services`}>
          <SeeAll>See all</SeeAll>
        </LinkCustom>
      </Container>

      {/*  */}
      <StyleContent>
        <TableContainer
          component={Paper}
          sx={{
            width: "100%",
            marginTop: "12px",
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <tr className="bg-[#191D24] py-4 border-b border-[#B9B9B9] divide-x divide-[#B9B9B9] w-full flex">
                {DATA_HEAD_CP.map((item, index) => (
                  <div
                    key={index}
                    className={`font-bold px-4 py-2 flex gap-2 items-center justify-center ${
                      item !== "Rank" && "flex-grow"
                    } text-white ${item === "Service" ? "w-[360px]" : "w-max"}`}
                  >
                    {item}
                    {item === "Status" && <IconSort />}
                  </div>
                ))}
              </tr>
            </TableHead>
            <TableBody>
              {listOffer.length > 0 &&
                listOffer?.map((item: any, index) => {
                  return (
                    <TableRowBodyCustom key={index}>
                      <CustomTableBodyCell
                        component="th"
                        scope="row"
                        align="center"
                      >
                        {index + 1}
                      </CustomTableBodyCell>

                      <CustomTableBodyCell component="th" scope="row">
                        {item?.job?.projectName}
                      </CustomTableBodyCell>

                      <CustomTableBodyCell align="center">
                        <User>
                          <Avatar
                            className="header-user__info__avatar"
                            alt="Cindy Baker"
                            src={dataPersonal?.twitterInfo?.avatar}
                          />
                          {dataPersonal?.fullName}
                        </User>
                      </CustomTableBodyCell>

                      <CustomTableBodyCell align="center">
                        {dayjs(item?.job?.createdAt).format("MMMM D, YYYY")}
                      </CustomTableBodyCell>

                      <CustomTableBodyCell align="center">
                        {item?.job?.price.toLocaleString()}
                      </CustomTableBodyCell>

                      <CustomTableBodyCell align="center">
                        <StatusCustom status={item?.job.jobState}>
                          {
                            ENUM_STATUS_OFFER[
                              item?.job
                                .jobState as keyof typeof ENUM_STATUS_OFFER
                            ]
                          }
                        </StatusCustom>
                      </CustomTableBodyCell>

                      <CustomTableBodyCell align="center">
                        {item.job.jobState !== ENUM_STATUS_OFFER.Completed && (
                          <ActionCustom
                            action={item.job.jobState}
                            onClick={() =>
                              item.job.jobState === ENUM_STATUS_OFFER.Pending
                                ? acceptOffer({
                                    jobId: item.job.jobId,
                                    subscriber: dataPersonal.userId,
                                    creator: item?.job?.creator,
                                  })
                                : completedServiceContract(item?.job)
                            }
                          >
                            {isLoading || isLoadingCallSM
                              ? "Loading..."
                              : ENUM_STATUS_OFFER_BUTTON[
                                  item.job
                                    .jobState as keyof typeof ENUM_STATUS_OFFER_BUTTON
                                ]}
                          </ActionCustom>
                        )}
                      </CustomTableBodyCell>
                    </TableRowBodyCustom>
                  );
                })}
            </TableBody>
          </Table>
          {listOffer.length < 1 && (
            <DescriptionNotData>
              {`You haven't received any job offers yet.`}
            </DescriptionNotData>
          )}
        </TableContainer>
      </StyleContent>
    </StyleBox>
  );
}

const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
const StyleBox = styled.div`
  padding: 24px 14px;
  width: 100%;
  overflow-x: hidden;
  margin-top: 24px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding-bottom: 24px;
`;

const StyleTitle = styled.div`
  font-size: 32px;
  font-weight: 700;
  line-height: 38px;
  color: #ffffff;
  @media (max-width: 520px) {
    font-size: 20px;
    padding-bottom: 0px;
  }
`;

const SeeAll = styled.div`
  border-radius: 12px;
  padding: 4px 20px;
  width: 150px;
  text-align: center;
  color: #82ebff;
  background-color: #191d24;
  cursor: pointer;
  @media (max-width: 520px) {
    font-size: 10px;
  }
`;

const StyleContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  @media (max-width: 520px) {
    margin-right: 0px;
  }
`;

const DescriptionNotData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #f23581;
  background-color: var(--background-primary);
  padding-top: 24px;
`;

const CustomTableBodyCell = styled(TableCell)`
  color: #fff !important;
  font-weight: 700;
  white-space: nowrap;
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 150px;
`;

const StatusCustom = styled.div<IStatus>`
  color: ${(props) =>
    ENUM_STATUS_OFFER_COLOR[
      props?.status as keyof typeof ENUM_STATUS_OFFER_COLOR
    ] ?? "#fff !important"};
  background-color: ${(props) =>
    ENUM_STATUS_OFFER_BG[props?.status as keyof typeof ENUM_STATUS_OFFER_BG] ??
    "none"};
  border-radius: 50px;
  padding: 5px 0;
`;

const ActionCustom = styled.div<IStatus>`
  cursor: pointer;
  color: ${(props) =>
    colorAction[props?.action as keyof ICompletedProfileAction] ??
    "#fff !important"};
  background-color: ${(props) =>
    bgAction[props?.action as keyof ICompletedProfileAction] ?? "none"};
  border-radius: 50px;
  padding: 5px 0;
  width: 100px;
  padding: 4px 16px;
  margin: auto;
`;

const TableRowBodyCustom = styled(TableRow)`
  border-bottom: 5px solid rgba(0, 0, 0, 0.5);
  background-color: #3d3d3d;
`;
