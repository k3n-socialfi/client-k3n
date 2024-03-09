import { IconNFT, IconRightNormal } from "@/assets/icons"
import { Button } from "@mui/material"
import styled from "styled-components"

export const Basic = () => {
    return (
        <StyleContainer>
            <StyleContent>
                <StyleTitle>
                    Basic
                </StyleTitle>
                <StyleButton>
                    <IconNFT />
                    3333
                </StyleButton>
            </StyleContent>
            <StyleList>
                <li>aaa</li>
                <li>aaa</li>
            </StyleList>
            <Button sx={{ borderRadius: "14px" }} color="primary" variant="contained" endIcon={<IconRightNormal />}>Continue</Button >
        </StyleContainer>
    )
}

const StyleContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px;
    gap: 12px;
`
const StyleContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const StyleButton = styled.div`
    display: flex;
    gap: 6px;
`

const StyleTitle = styled.div`
  font-size: 18px;
`

const StyleList = styled.ul`
    padding-left: 24px;
`