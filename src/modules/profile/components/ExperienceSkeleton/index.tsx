import LoadingSkeleton from "@/components/LoadingSkeleton";
import React from "react";
import styled from "styled-components";

type Props = {};

const ExperienceSkeleton = (props: Props) => {
  return (
    <Card>
      <LoadingSkeleton height="20px" width="300px" />
      <LoadingSkeleton height="20px" width="100px" />
      <LoadingSkeleton height="30px" width="200px" />
      <LoadingSkeleton height="20px" width="200px" />
      <LoadingSkeleton height="20px" width="200px" />
    </Card>
  );
};

export default ExperienceSkeleton;

const Card = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
