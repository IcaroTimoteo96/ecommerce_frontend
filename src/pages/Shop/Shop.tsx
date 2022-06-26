import { Box, Grid } from '@mui/material'
import React from 'react'
import { FooterBar } from '../../components/FooterBar/FooterBar'
import { PageLayout } from "../../components/PageLayout/PageLayout"

export const Shop = () => {
    return (
        <PageLayout header={<strong>Página do Carrinho</strong>}
            pageDescription={<strong>Alguma coisa</strong>}
            pageFooter={<FooterBar isShop={true} />}
        ></PageLayout>
    )
}