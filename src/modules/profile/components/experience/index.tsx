"use client"
import * as React from 'react';
import styled from 'styled-components';

export default function Experience() {
    return (
        <StyleBox>
            <StyleTitle>Experience</StyleTitle>
            <StyleBorder></StyleBorder>
            <StyleContent>aaaaaaaaaaaa</StyleContent>
        </StyleBox>
    );
}

const StyleBox = styled.div`
    width: 100%;
    padding: 24px 14px;
    /* overflow: scroll; */

`
const StyleTitle = styled.div`
  font-size: 40px;
  line-height: 51px;
  font-weight: 700;
  padding-bottom: 24px;
`
const StyleBorder = styled.div`
    /* border: 2px solid #82EBFF; */
`
const StyleContent = styled.div``
