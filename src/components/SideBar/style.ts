<<<<<<< HEAD
import { ListItemButton, ListItemText } from "@mui/material";
=======
import { ListItemText } from "@mui/material";
>>>>>>> 732e44e (fix: animation side bar and show user profile when logined)
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

<<<<<<< HEAD
export const ListItemCustom = styled(ListItemButton)<any>``;

export const Item = styled.div<any>`
=======
const dilate = keyframes`
  0% { height: 20px; opacity: 0.4; transform: translateX(-10px);}
  50% { height: 38px; opacity: 0.8;transform: translateX(-5px); }
  100% { height: 48px; opacity: 1; transform: translateX(0);}
`;

const dilateBg = keyframes`
  0% { padding: 5px;opacity: 0.4; transform: translateX(-10px);}
  50% { padding: 8px; opacity: 0.8;transform: translateX(-5px);}
  100% { padding: 12px;opacity: 1; transform: translateX(5px);}
`;

export const Item = styled.div`
>>>>>>> 732e44e (fix: animation side bar and show user profile when logined)
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  border-radius: 8px;
<<<<<<< HEAD

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
=======
  &:hover {
    background-color: #191d24;
    font-size: 12px !important;
    animation: ${dilateBg} 0.4s linear;
>>>>>>> 732e44e (fix: animation side bar and show user profile when logined)
    padding: 12px;
    path {
      fill: #f23581;
    }
<<<<<<< HEAD

    transition: all 0.5s ease-in;
=======
    .MuiTypography-body1 {
      font-size: 12px !important;
    }
    /* transition: all 0.3s ease-in; */
>>>>>>> 732e44e (fix: animation side bar and show user profile when logined)

    &::before {
      position: absolute;
      content: "";
      width: 4px;
      left: -8px;
      height: 48px;
      background-color: #f23581;
      border-radius: 0 5px 5px 0;
<<<<<<< HEAD
      transition: height 0.5s;
=======
      animation: ${dilate} 0.4s linear;
>>>>>>> 732e44e (fix: animation side bar and show user profile when logined)
    }
  }
`;

export const ListItemTextCustom = styled(ListItemText)<any>`
  .MuiTypography-body1 {
    font-size: 14px !important;
  }
`;
