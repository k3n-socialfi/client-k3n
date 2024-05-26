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
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: var(--Secondary-Secondary, rgba(130, 235, 255, 1));
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
  border-radius: 20px;
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const UserPoint = styled.div`
  position: absolute;
  bottom: 18px;
  left: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 16px;
  background: var(--Card-Card1000, rgba(35, 39, 49, 1));
  color: #fff;
  span {
    color: #fff;
    font-size: 14px;
  }
  svg {
    width: 12px;
    height: 12px;
  }
`;
