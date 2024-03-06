"use client"
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import Chips from '../Chip';
import { IconLike } from '@/assets/icons';

const IMG_NFT = "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

export default function Cards(props: any) {
    return (
        <Card sx={{ maxWidth: 345, background: "#252525" }} {...props}>
            <CardMedia
                sx={{ height: 202 }}
                image={IMG_NFT}
                title="green iguana"
            />
            <CardContent>
                <StyleTitle>Title</StyleTitle>
                <StyleChips>
                    <Chips label="Social Fi" variant="outlined" />
                    <Chips label="Researcher" color="success" />
                    <Chips label="Ethereum" color="warning" />
                </StyleChips>
            </CardContent>
            <CardActions sx={{paddingLeft: "16px"}}>
                <Button sx={{ borderRadius: "14px" }} color="primary" variant="outlined" size="medium" startIcon={<IconLike />}>4.6M</Button>
            </CardActions>
        </Card>
    )
}

const StyleTitle = styled.div`
  font-size: 18px;
  padding-bottom: 12px;
  color: #ffffff;
`

const StyleChips = styled.div`
  display: flex;
  gap: 8px;
`