import { ListItemButton, ListItemText } from "@mui/material";
import styled, { keyframes } from "styled-components";

export const CloseSideBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: end;
  margin-top: 20px;
  @media (min-width: 1025px) {
    display: none;
  }
`;

export const Discover = styled.div`
  .MuiPaper-elevation {
    @media (max-width: 610px) {
      margin-top: 60px;
    }
  }
`;
export const StraightLine = styled.div`
  display: none;
  width: 8px;
  height: 66px;
  background-color: #f23581;
  border-radius: 0 5px 5px 0;
`;

export const ListItemCustom = styled(ListItemButton)<any>``;

export const Item = styled.div<any>`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  border-radius: 8px;

  background-color: ${({ isSide }) => isSide && "#191d24"};
  padding: ${({ isSide }) => isSide && "12px"};
  path {
    fill: ${({ isSide }) => isSide && "#f23581"};
  }

  &::before {
    position: absolute;
    content: "";
    width: 4px;
    left: -8px;
    height: ${({ isSide }) => (isSide ? "48px" : "0px")};
    background-color: #f23581;
    border-radius: 0 5px 5px 0;
    transition: height 0.5s;
  }
  &:hover {
    background-color: #191d24;
    padding: 12px;
    path {
      fill: #f23581;
    }

    transition: all 0.5s ease-in;

    &::before {
      position: absolute;
      content: "";
      width: 4px;
      left: -8px;
      height: 48px;
      background-color: #f23581;
      border-radius: 0 5px 5px 0;
      transition: height 0.5s;
    }
  }
`;

export const ListItemTextCustom = styled(ListItemText)<any>`
  .MuiTypography-body1 {
    font-size: 14px !important;
  }
`;
