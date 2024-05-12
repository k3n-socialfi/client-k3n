import React from "react";
import styled from "styled-components";

const Hexagon = () => {
  return (
    <OuterShape className="hexagon">
      <InnerShape className="hexagon" />
    </OuterShape>
  );
};

export default Hexagon;

const OuterShape = styled.div`
  display: flex;
  flex-shrink: 0;
  /* height: calc(150px + 4vw); */
  height: 40px;
  /* width: calc(150px + 4vw); */
  width: 40px;
  /* margin: 25px; */
  background-image: linear-gradient(to bottom right, #82ebff, #82ebff, #82ebff);
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
`;

const InnerShape = styled.div`
  /* height: calc(130px + 4vw); */
  height: 38px;
  /* width: calc(130px + 4vw); */
  width: 38px;
  background: url(https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=faces)
    no-repeat center;
  background-size: cover;
  margin: auto;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
`;
