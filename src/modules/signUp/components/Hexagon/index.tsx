import React from "react";
import styled from "styled-components";
import IMGPoint from "@/assets/images/IMGPoint.png";

interface ILinkIMG {
  srcIMG: string;
}

const Hexagon = ({ srcIMG }: ILinkIMG) => {
  return (
    <OuterShape className="hexagon">
      <InnerShape className="hexagon" srcIMG={srcIMG} />
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
  padding: 1px;
  background-image: linear-gradient(to bottom right, #82ebff, #82ebff, #82ebff);
  -webkit-clip-path: polygon(
    50% 0%,
    95% 25%,
    95% 75%,
    50% 100%,
    5% 75%,
    5% 25%
  );
  clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
`;

const InnerShape = styled.div<ILinkIMG>`
  /* height: calc(130px + 4vw); */
  height: 38px;
  /* width: calc(130px + 4vw); */
  width: 38px;
  background: url(${(props) => props.srcIMG ?? IMGPoint.src}) no-repeat center;
  background-size: cover;
  margin: auto;
  clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
`;
