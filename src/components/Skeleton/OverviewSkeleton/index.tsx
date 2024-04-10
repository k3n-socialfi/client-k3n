import LoadingSkeleton from "@/components/LoadingSkeleton";
import React from "react";
import styled from "styled-components";

type Props = {};

const OverviewSkeleton = (props: Props) => {
  return (
    <Container>
      <Left>
        <LoadingSkeleton height="30px" width="300px" />
        <LoadingSkeleton height="30px" width="300px" />
        <LoadingSkeleton height="30px" width="300px" />
      </Left>
      <Right>
        <LoadingSkeleton height="30px" width="300px" />
        <LoadingSkeleton height="30px" width="300px" />
      </Right>
    </Container>
  );
};

export default OverviewSkeleton;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
