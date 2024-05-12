"use client";
import { IconJob, IconStar, IconTime } from "@/assets/icons";
import styled from "styled-components";

export default function Experience({ experience }: any) {
  return (
    <StyleBox>
      <Container>
        <StyleTitle>Experience</StyleTitle>
      </Container>
      {experience && <StyleBorder />}
      <StyleContent>
        {experience ? (
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
            <StyleSelection key={index}>
              <StyleDots>
                <StyleDot></StyleDot>
              </StyleDots>
              <StyleForm>
                <StyleFlex>
                  <StyleUserDes>2023-12</StyleUserDes>
                  <StyleIcons>
                    <IconStar />
                    4.5
                  </StyleIcons>
                </StyleFlex>
                <StyleSubTitle>Product X KOL Campaign</StyleSubTitle>
                <StyleDate>
                  <StyleDiv>
                    <IconJob />
                    KOL Booker
                  </StyleDiv>
                  <StyleDiv>
                    <IconTime />
                    2024-03 - Present
                  </StyleDiv>
                </StyleDate>
              </StyleForm>
            </StyleSelection>
          ))
        ) : (
          <DescriptionNotData>
            {`You don't have any work experience yet.`}
          </DescriptionNotData>
        )}
      </StyleContent>
    </StyleBox>
  );
}

const StyleFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const DescriptionNotData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #f23581;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyleBox = styled.div`
  padding: 24px 14px;
  width: 100%;
  overflow-x: hidden;
`;
const StyleForm = styled.div`
  background: rgba(25, 29, 36, 1);
  width: 275px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 1px solid #b9b9b9;
  padding: 12px;
  border-radius: 8px;
`;
const StyleContent = styled.div`
  margin-left: 40px;
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 24px;
  @media (max-width: 520px) {
    margin-right: 0px;
  }
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
const StyleDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 16px;
  font-weight: 400;
  align-items: center;
`;

const StyleDate = styled.div`
  background-color: #9b9ae526;
  padding: 4px 8px;
  border-radius: 8px;
  margin-top: 4px;
  color: #b9b9b9;
`;
const StyleIcons = styled.div`
  display: flex;
  gap: 4px;
`;
const StyleSubTitle = styled.div`
  padding-top: 8px;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  color: #f45796;
  font-weight: 700;
`;

const StyleTitle = styled.div`
  font-size: 40px;
  line-height: 51px;
  font-weight: 700;
  padding: 24px 0;
  @media (max-width: 520px) {
    font-size: 20px;
    padding-bottom: 0px;
  }
`;
const StyleBorder = styled.div`
  margin-left: 40px;
  position: absolute;
  width: 74.5%;
  margin-top: 7px;
  display: flex;
  border-top: 2px solid #82ebff;
  margin-bottom: 24px;
  @media (max-width: 768px) {
    width: 93%;
  }
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
