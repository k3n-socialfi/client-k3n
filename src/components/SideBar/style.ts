import styled from "styled-components";

export const CloseSideBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: end;
  margin-top: 20px;
  @media (min-width: 1025px) {
    display: none;
  }
`;
