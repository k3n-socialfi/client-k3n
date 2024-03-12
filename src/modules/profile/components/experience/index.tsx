"use client"
import { IconStar } from '@/assets/icons';
import * as React from 'react';
import styled from 'styled-components';

export default function Experience() {
    return (
        <StyleBox>
            <StyleTitle>Experience</StyleTitle>
            <StyleBorder>
            </StyleBorder>
            <StyleDots>
                {[1, 2, 3, 4, 5].map((index) => (<StyleDot key={index}></StyleDot>))}
            </StyleDots>
            <StyleContent>
                {[1, 2, 3, 4, 5, 6].map((index) => (
                    <StyleForm key={index}>
                        <StyleUserDes>2023-12</StyleUserDes>
                        <StyleSubTitle>Fashion KO KOL Fashionssss</StyleSubTitle>
                        <StyleIcons>
                            <IconStar />
                            <IconStar />
                            <IconStar />
                            <IconStar />
                            <IconStar />
                        </StyleIcons>
                        <StyleDate>
                            <StyleKOL>
                                <StyleDiv>KOL Booker</StyleDiv>
                            </StyleKOL>
                            <StyleKOL>
                                <StyleDiv>2024-03 - Present</StyleDiv>
                            </StyleKOL>
                        </StyleDate>
                    </StyleForm>
                ))}
            </StyleContent>
        </StyleBox >
    );
}

const StyleKOL = styled.div``
const StyleDiv = styled.div``

const StyleDate = styled.div`
    background-color: #9B9AE5;
    padding: 4px 8px;
    border-radius: 8px;
    margin-top: 4px;
    color: #FFF;
`
const StyleIcons = styled.div`
    display: flex;
    justify-content: center;
    gap: 12px;
    padding: 4px 0;
`
const StyleSubTitle = styled.div`
  padding-top: 8px;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #82EBFF;
`

const StyleBox = styled.div`
    padding: 24px 14px;
`
const StyleTitle = styled.div`
  font-size: 40px;
  line-height: 51px;
  font-weight: 700;
  padding-bottom: 24px;
`
const StyleBorder = styled.div`
    display: flex;
    border-top: 2px solid #82EBFF;
    margin-bottom: 24px;
`
const StyleDots = styled.div`
    display: flex;
`
const StyleDot = styled.div`
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #82EBFF;
    margin-right: 18%;
    margin-top: -4.3%;
`
const StyleForm = styled.div`
    border: 1px solid #B9B9B9;
    padding: 12px;
    border-radius: 8px;
    width: 15.5%;
`
const StyleContent = styled.div`
    display: flex;
    gap: 12px;
    overflow-x:auto 
`
const StyleUserDes = styled.div`
padding: 4px 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  background-color: #9B9AE5;
  border-radius: 12px;
  color: #FFD7F4;
  width: fit-content;
`