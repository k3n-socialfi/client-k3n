import LoadingSkeleton from "@/components/LoadingSkeleton";
import React from "react";
import styled from "styled-components";

type Props = {};

const SkeletonKOLs = (props: Props) => {
  return (
    <TableContainer>
      <LoadingSkeleton height="40px" width="500px" />
      <LoadingSkeleton height="40px" width="300px" />
      <LoadingSkeleton height="40px" width="200px" />
      <LoadingSkeleton height="40px" width="100px" />
      <LoadingSkeleton height="40px" width="100px" />
      <LoadingSkeleton height="40px" width="100px" />
    </TableContainer>
  );
};

export default SkeletonKOLs;

const TableContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media (max-width: 768px) {
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }

    scrollbar-width: none;
  }
`;
