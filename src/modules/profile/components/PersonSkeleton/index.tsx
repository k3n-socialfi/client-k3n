import LoadingSkeleton from "@/components/LoadingSkeleton";
import React from "react";
import styled from "styled-components";

type Props = {};

const PersonSkeleton = (props: Props) => {
  return (
    <Container>
      <Infor>
        <Avatar>
          <LoadingSkeleton height="200px" width="200px" radius="50%" />
        </Avatar>
        <Detail>
          <LoadingSkeleton height="30px" width="200px" />
          <LoadingSkeleton height="20px" width="200px" />
          <LoadingSkeleton height="20px" width="200px" />
          <LoadingSkeleton height="20px" width="200px" />
          <LoadingSkeleton height="20px" width="200px" />
          <LoadingSkeleton height="20px" width="200px" />
        </Detail>
      </Infor>
      <Button>
        <LoadingSkeleton height="20px" width="100px" />
        <LoadingSkeleton height="20px" width="100px" />
        <LoadingSkeleton height="20px" width="100px" />
      </Button>
    </Container>
  );
};

export default PersonSkeleton;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  padding: 20px;
`;

const Infor = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`;

const Avatar = styled.div``;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`;
