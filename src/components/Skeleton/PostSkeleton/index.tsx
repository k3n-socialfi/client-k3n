import LoadingSkeleton from "@/components/LoadingSkeleton";
import React from "react";
import styled from "styled-components";

type Props = {};

const PostSkeleton = (props: Props) => {
  return (
    <Container>
      <PersonPost>
        <LoadingSkeleton height="50px" width="50px" radius="50%" />
        <LoadingSkeleton height="50px" width="300px" />
      </PersonPost>
      <Slide>
        <LoadingSkeleton height="200px" width="365px" />
      </Slide>
      <Detail>
        <LoadingSkeleton height="30px" width="365px" />
        <LoadingSkeleton height="20px" width="365px" />
        <LoadingSkeleton height="20px" width="365px" />
      </Detail>
    </Container>
  );
};

export default PostSkeleton;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 20px;
  gap: 10px;
`;

const PersonPost = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const Infor = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const Slide = styled.div``;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
