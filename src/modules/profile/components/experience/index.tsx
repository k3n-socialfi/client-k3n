"use client";
import { IconStar } from "@/assets/icons";
import { ButtonCustom, ButtonSecondary } from "@/components/ButtonCustom";
import * as React from "react";
import styled from "styled-components";

export default function Experience() {
  return (
    <StyleBox>
      <Container>
        <StyleTitle>Experience</StyleTitle>
        <ExperienceRight>
          <SeeAll>See all</SeeAll>
        </ExperienceRight>
      </Container>
      <StyleBorder />
      <StyleContent>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
          <StyleSelection key={index}>
            <StyleDots>
              <StyleDot></StyleDot>
            </StyleDots>
            <StyleForm>
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
    </StyleBox>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ExperienceRight = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
const SeeAll = styled.div`
  color: #f23581;
  font-size: 18px;
  font-weight: 700;
`;
const StyleBox = styled.div`
  padding: 24px 14px;
  width: 100%;
  overflow-x: hidden;
`;
const StyleForm = styled.div`
  width: 220px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 1px solid #b9b9b9;
  padding: 12px;
  border-radius: 8px;
`;
const StyleContent = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 24px;
  margin-right: 40px;
`;
const StyleSelection = styled.div`
  width: 100%;
`;
const StyleUserDes = styled.div`
  padding: 4px 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  background-color: #393939;
  border-radius: 12px;
  color: #ffd7f4;
  width: fit-content;
`;
const StyleKOL = styled.div``;
const StyleDiv = styled.div``;

const StyleDate = styled.div`
  background-color: #9b9ae526;
  padding: 4px 8px;
  border-radius: 8px;
  margin-top: 4px;
  color: #b9b9b9;
`;
const StyleIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 4px 0;
`;
const StyleSubTitle = styled.div`
  padding-top: 8px;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #82ebff;
`;

const StyleTitle = styled.div`
  font-size: 40px;
  line-height: 51px;
  font-weight: 700;
  padding-bottom: 24px;
`;
const StyleBorder = styled.div`
  position: absolute;
  width: 50%;
  margin-top: 7px;
  display: flex;
  border-top: 2px solid #82ebff;
  margin-bottom: 24px;
`;
const StyleDots = styled.div`
  position: relative;
  display: flex;
  padding-bottom: 24px;
`;
const StyleDot = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #82ebff;
`;
