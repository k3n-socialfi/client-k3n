"use client";
import React, { useEffect, useState } from "react";
import {
    useAccount,
    useReadContract,
    useWriteContract,
    useSimulateContract,
    useWaitForTransactionReceipt,
    useSendTransaction
} from "wagmi";
import abi from "../../../../contract/abi/devcon.json";
import styled from "styled-components";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { parseEther } from 'viem'
// import FlipCard, { BackCard } from "./component/FlipCard";
import Image from "next/image";
import { writeContract } from "viem/actions";

const contractConfig = {
    address: "0x4BaDd6b763D23258Fd89d57C44D10f86dAc63E45",
    abi: abi,
    functionName: 'mint',
} as const;

const steps = [
    'Step 1',
    'Step 2',
    'Step 3',
];

export function CheckIn() {
    const { data } = useSimulateContract(contractConfig)

    return (
        <Container>
            {/* <ContentLeft>
                <Box sx={{ width: '100%' }}>
                    <Stepper activeStep={1} alternativeLabel>
                        {steps.map((label, index) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
            </ContentLeft> */}
            <ContentRight>
                {/* {mounted && isConnected && !isMinted && (
                    <StyledButton
                        disabled={!mint || isMintLoading || isMintStarted}
                        data-mint-loading={isMintLoading}
                        data-mint-started={isMintStarted}
                        onClick={() => mint?.()}
                    >
                        {isMintLoading && "Waiting for approval"}
                        {isMintStarted && "Loading..."}
                        {!isMintLoading && !isMintStarted && "Check in"}
                    </StyledButton>
                )} */}
                {/* <button
                    onClick={() =>
                        sendTransaction({
                            to: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
                            value: parseEther('0.01'),
                        })
                    }
                >
                    Send transaction
                </button> */}
                {/* {mounted && isConnected && !isMinted && (
                    <StyledButton
                        disabled={!mint || isMintLoading || isMintStarted}
                        data-mint-loading={isMintLoading}
                        data-mint-started={isMintStarted}
                        onClick={() => mint?.()}
                    >
                        {isMintLoading && "Waiting for approval"}
                        {isMintStarted && "Loading..."}
                        {!isMintLoading && !isMintStarted && "Check in"}
                    </StyledButton>
                )} */}
                {/* <StyledButton onClick={() => writeContract(data.request)}>
                    Write Contract
                </StyledButton> */}
            </ContentRight>
        </Container >
    );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
`
const ContentRight = styled.div``
const ContentLeft = styled.div``

const StyledButton = styled.button`
  cursor: pointer;
  position: relative;
  display: inline-block;
  padding: 14px 104px;
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