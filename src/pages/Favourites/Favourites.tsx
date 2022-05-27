import { Grid } from "@mui/material"
import React from "react"
import { PageLayout } from "../../components/PageLayout/PageLayout"

export const Favourites = () => {
    return (
        <PageLayout layoutPage={
            <Grid>
                <strong>Página dos Favoritos</strong>
            </Grid>
        }>
        </PageLayout>
    )
}