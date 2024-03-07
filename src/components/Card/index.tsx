"use client"
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import styled from 'styled-components';

interface ICards {
    url: string,
    title: string,
    content: any,
    actions: any
}

export default function Cards({
    url, title, content, actions
}: ICards) {
    return (
        <CustomCard>
            <CardMedia
                sx={{ height: 202 }}
                image={url}
                title="green iguana"
            />
            <CardContent>
                <StyleTitle>{title}</StyleTitle>
                <StyleChips>
                    {content}
                </StyleChips>
            </CardContent>
            <CardActions sx={{ paddingLeft: "16px" }}>
                {actions}
            </CardActions>
        </CustomCard>
    )
}

const CustomCard = styled(Card)`
    max-width: 345px;
    background-color: #252525;
`
const StyleTitle = styled.div`
  font-size: 18px;
  padding-bottom: 12px;
  color: #ffffff;
`

const StyleChips = styled.div`
  display: flex;
  gap: 8px;
`