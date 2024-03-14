"use client"
import { IconStar } from '@/assets/icons';
import * as React from 'react';
import styled from 'styled-components';

export default function Experience() {
  return (
    <StyleBox>
      <StyleTitle>Experience</StyleTitle>
      <StyleBorder />
      <StyleContent>
        {[1, 2, 3, 4, 5].map((index) => (
          <StyleSelection key={index}>
            <StyleDots><StyleDot></StyleDot></StyleDots>
            <StyleForm >
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
          </StyleSelection>
        ))}
      </StyleContent>
    </StyleBox >
  );
}

const StyleBox = styled.div`
    padding: 24px 14px;
    width: 100%;
    overflow-x: hidden;
`
const StyleForm = styled.div`
    width: 190px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    border: 1px solid #B9B9B9;
    padding: 12px;
    border-radius: 8px;
`
const StyleContent = styled.div`
    display:flex;
    overflow:hidden;
    position:relative;
    gap: 12px;
    overflow-x: auto ;
    padding-bottom: 24px;
`
const StyleSelection = styled.div`
    width: 220px;
`
const StyleUserDes = styled.div`
  padding: 4px 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  background-color: #393939;
  border-radius: 12px;
  color: #FFD7F4;
  width: fit-content;
`
const StyleKOL = styled.div``
const StyleDiv = styled.div``

const StyleDate = styled.div`
    background-color:#9b9ae526;
    padding: 4px 8px;
    border-radius: 8px;
    margin-top: 4px;
    color: #B9B9B9;
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

const StyleTitle = styled.div`
  font-size: 40px;
  line-height: 51px;
  font-weight: 700;
  padding-bottom: 24px;
`
const StyleBorder = styled.div`
    position: absolute;
    width: 78%;
    margin-top: 7px;
    display: flex;
    border-top: 2px solid #82EBFF;
    margin-bottom: 24px;
`
const StyleDots = styled.div`
    position: relative;
    display: flex;
    padding-bottom: 24px;
`
const StyleDot = styled.div`
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #82EBFF;
  
`
