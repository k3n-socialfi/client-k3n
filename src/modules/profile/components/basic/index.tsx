import { Button } from "@mui/material"
import styled from "styled-components"

export const Basic = () => {
    return (
        <StyleContent>
            <StyleTitle>
                Basic
            </StyleTitle>
            <Button sx={{ borderRadius: "14px" }} color="primary" variant="contained">Continue</Button >
        </StyleContent>
    )
}

const StyleContent = styled.div`
    display: flex;
    flex-direction: column;
`
const StyleTitle = styled.div`
  font-size: 16px;
  padding-top: 12px;
`