import { Box, Container } from "@mui/material"
import React, { ReactChild } from "react"
import { FooterBar } from "../FooterBar/FooterBar";

interface PageLayoutProps {
    layoutPage?: ReactChild;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ layoutPage }) => {
    return (
        <Container maxWidth='xs'>
            <Box>
                {layoutPage}
                <Box sx={{ marginTop: '600px' }}>
                    <FooterBar />
                </Box>
            </Box>

        </Container>

    )

}
