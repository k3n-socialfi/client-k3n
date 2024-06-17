"use client";
import { IconThunder } from "@/assets/icons";
import { Typography } from "@mui/material";
import React, { ReactNode } from "react";
import styled from "styled-components";
import k3nImg from "@/assets/svgs/common/k3n.svg";
import Hexagon from "../Hexagon";
import { useMyProfileContext } from "@/contexts/MyProfileContext";
import LeftSide from "../LeftSide";

type Props = {
  children: ReactNode;
  showPoint?: boolean;
  title?: string;
  description?: string;
};

const WrapperSignUp = ({
  children,
  showPoint = false,
  title,
  description,
}: Props) => {
  const { dataPersonal } = useMyProfileContext();

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center min-h-screen">
      <LeftSide img={k3nImg} />
      <div className="gap-12 w-full lg:flex-grow flex-col flex-grow-0 justify-center px-5 xl:pl-12 pt-10 h-full min-h-screen flex items-center">
        <Title>
          {title && <h4 className="text-6xl font-bold text-white">{title}</h4>}
          {description && <h6 className="font-semibold">{description}</h6>}
        </Title>
        {showPoint && (
          <PointCustom>
            <LinePoint>
              <Hexagon srcIMG={dataPersonal?.twitterInfo?.avatar} />
              <PointNumber>
                <IconThunder width={20} height={20} />
                <Typography variant="h5" color={"#FFF"}>
                  {dataPersonal?.twitterInfo?.totalPoints ?? 0}
                </Typography>
              </PointNumber>
            </LinePoint>
          </PointCustom>
        )}

        <Child>{children}</Child>
      </div>
    </div>
  );
};

export default WrapperSignUp;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 16px;
  flex-wrap: nowrap;
  margin-top: 60px;
  @media (max-width: 668px) {
    flex-wrap: wrap;
    text-align: center;
  }
  @media (max-width: 500px) {
    margin-top: 0;
  }
`;

const PointCustom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LinePoint = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

const Child = styled.div`
  width: 100%;
`;

const PointNumber = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  justify-content: center;
  align-items: center;
`;
