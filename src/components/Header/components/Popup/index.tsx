import React from "react";
import styled from "styled-components";
import { ButtonElevated } from "../../../ButtonCustom";
import { IconClose, IconWallet } from "@/assets/icons";

interface IPropPopup {
  handleLoginTwitter?: any;
  setPopup?: any;
}

const Popup = ({ handleLoginTwitter, setPopup }: IPropPopup) => {
  return (
    <WrapperPopup>
      <PopupItem>
        <PopupIconClose onClick={() => setPopup(false)}>
          <IconClose size={20} />
        </PopupIconClose>
        <PopupTitle>
          Your account has not been assigned to this wallet address
        </PopupTitle>
        <ButtonElevated size="large" onClick={() => handleLoginTwitter()}>
          <div className="flex items-center justify-center gap-4">
            <IconWallet />
            Assign Now
          </div>
        </ButtonElevated>
      </PopupItem>
    </WrapperPopup>
  );
};

const WrapperPopup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
`;
const PopupItem = styled.div`
  position: relative;
  padding: 30px;
  background: #393939;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const PopupTitle = styled.div`
  width: 75%;
  text-align: center;
  color: #fff;
`;
const PopupIconClose = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`;
export default Popup;
