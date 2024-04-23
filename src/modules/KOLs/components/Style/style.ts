"use client";
import styled from "styled-components";

export const CustomTab = styled.div`
  margin: 12px 0;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-weight: bold;
  font-size: 60px;
  color: #f23581;
  min-height: 100px;
  overflow: auto;
  width: 100%;
  /* table-layout: auto; */

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;

  @media (min-width: 1600px) and (max-width: 1720px) {
    justify-content: flex-start;
  }

  @media (max-width: 1378px) {
    justify-content: flex-start;
  }

  @media (max-width: 1224px) {
  }
`;

export const SkeletonKols = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
