"use client";
import React, { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  icon?: ReactNode;
  name?: string;
  onClick?: () => void;
  isDisabled?: boolean;
};

const CardChoose = (props: Props) => {
  const { icon, name, onClick, isDisabled } = props;

  return (
    <button
      className="w-72 h-72 bg-[#191d24] rounded-2xl flex items-center justify-center aspect-square hover:border-2 hover:shadow-[0_0_15px_rgba(130, 235, 255,0.4)] hover:border-[#82EBFF] hover:opacity-90"
      onClick={onClick}
      disabled={isDisabled}
    >
      <div className={"flex flex-col gap-[22px] items-center justify-center"}>
        <Icon>{icon}</Icon>
        <Name>{name}</Name>
      </div>
    </button>
  );
};

export default CardChoose;

const Icon = styled.div`
  width: 72px;
  height: 72px;
  /* padding: 0 48px 22px; */
`;
const Name = styled.div`
  font-size: 28px;
  font-weight: 400;
  line-height: 33px;
  font-family: "SF Pro Display";
  color: #fff;
`;
