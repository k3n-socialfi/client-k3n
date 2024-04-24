import Link from "next/link";
import styled from "styled-components";

export const StyleContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyleFollower = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const StyleTitleLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 18px;
  padding-bottom: 12px;
  color: #ffffff;
`;

export const StyleTitleRight = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 10px;
  padding-bottom: 12px;
  color: #ffffff;
`;

export const StyleChips = styled.div`
  display: flex;
  margin-top: 15px;
  gap: 8px;
`;

export const Subscribe = styled.div`
  position: absolute;
  z-index: 50;
  margin: auto;
  bottom: 15px;
  background-color: #3b3b39;
  border-radius: 30px;
  /* opacity: 0.8; */
`;

export const LinkCustom = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const CustomAvatar = styled.div`
  padding-top: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CustomImage = styled.div`
  position: relative;
  border: 2px solid #f23581;
  width: 222px;
  height: 222px;
  border-radius: 50%;
  /* border-image: linear-gradient(to right, #f23581, #a1f0ff); */
  /* border-image-slice: 1; */
`;
