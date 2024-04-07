import LoadingSkeleton from "@/components/LoadingSkeleton";
import React from "react";
import styled from "styled-components";

type Props = {};

const ServicesSkeleton = (props: Props) => {
  return (
    <Container>
      <LoadingSkeleton height="20px" width="300px" />
      <LoadingSkeleton height="30px" width="400px" />
      <LoadingSkeleton height="20px" width="400px" />
      <HireMe>
        <LoadingSkeleton height="150px" width="150px" />
        <Point>
          <LoadingSkeleton height="20px" width="150px" />
          <LoadingSkeleton height="20px" width="150px" />
          <LoadingSkeleton height="30px" width="150px" />
        </Point>
      </HireMe>
    </Container>
  );
};

export default ServicesSkeleton;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const HireMe = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const Point = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
