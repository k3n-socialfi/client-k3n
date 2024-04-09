import LoadingSkeleton from "@/components/LoadingSkeleton";
import React from "react";
import styled from "styled-components";

type Props = {};

function SkeletonMyRanking({}: Props) {
  return (
    <Container>
      <LoadingSkeleton height="80px" width="300px" radius="15px" />
      <LoadingSkeleton height="80px" width="300px" radius="15px" />
      <LoadingSkeleton height="80px" width="300px" radius="15px" />
    </Container>
  );
}

export default SkeletonMyRanking;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 200px;
  background-color: #404356;
  width: 100%;
  height: 150px;
  border-radius: 20px;
  padding: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
    flex-wrap: wrap;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }

    scrollbar-width: none;
  }
`;
