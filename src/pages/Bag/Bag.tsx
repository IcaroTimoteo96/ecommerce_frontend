import { Box, Grid } from "@mui/material"
import React from "react"
import { FooterBar } from "../../components/FooterBar/FooterBar"
import { PageLayout } from "../../components/PageLayout/PageLayout"

export const Bag = () => {
    return (
        <PageLayout header={<strong>Página da Sacola</strong>}
            pageDescription={<strong>Alguma coisa</strong>}
            pageFooter={<FooterBar isBag={true} />}
        ></PageLayout>
    )
}