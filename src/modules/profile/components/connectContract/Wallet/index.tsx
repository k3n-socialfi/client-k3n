"use client"
import { ConnectKitButton } from "connectkit";
import styled from "styled-components";
import { useDisconnect } from 'wagmi';

export default function ConnectButton() {
  const { disconnect } = useDisconnect()
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, address }) => {
        return (
          <div>
            <StyledButton onClick={show}>
              {isConnected ? (
                <>
                  <span>
                    {address?.slice(0, 6)}...{address?.slice(38, 42)}
                  </span>
                  <StyledButton onClick={() => disconnect()}>Disconnect</StyledButton>
                </>
              ) : "Hi!"}
            </StyledButton>
          </div>
        );
      }}
    </ConnectKitButton.Custom>
  );
};

const StyledButton = styled.button`
  cursor: pointer;
  position: relative;
  display: inline-block;
  padding: 14px 24px;
  color: #ffffff;
  background: #1a88f8;
  font-size: 16px;
  font-weight: 500;
  border-radius: 10rem;
  box-shadow: 0 4px 24px -6px #1a88f8;

  transition: 200ms ease;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 6px 40px -6px #1a88f8;
  }
  &:active {
    transform: translateY(-3px);
    box-shadow: 0 6px 32px -6px #1a88f8;
  }
`;