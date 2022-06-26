import { Grid } from "@mui/material"
import React from "react"
import { FooterBar } from "../../components/FooterBar/FooterBar"
import { PageLayout } from "../../components/PageLayout/PageLayout"

export const Favorites = () => {
    return (
        <PageLayout header={<strong>Página dos Favoritos</strong>}
            pageDescription={<strong>Alguma coisa</strong>}
            pageFooter={<FooterBar isFavorites={true} />}
        ></PageLayout>
    )
}