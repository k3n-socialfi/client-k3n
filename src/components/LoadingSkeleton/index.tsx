import React from "react";
import styled from "styled-components";

type Props = {
  height: string;
  width?: string;
  radius?: string;
};
export default function LoadingSkeleton(props: Props) {
  return (
    <Skeleton
      style={{
        height: props.height,
        width: props.width || "100%",
        borderRadius: props.radius,
      }}
    />
  );
}
const Skeleton = styled.div`
  background-color: #eee;
  color: transparent;
  background-image: linear-gradient(
    110deg,
    #4a4a4a 8%,
    #5e5d5d 18%,
    #4b4848 33%
  );
  background-size: 200% 100%;
  animation: 0.8s shine linear infinite;

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;
