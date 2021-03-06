import { Grid } from '@mui/material'
import React from 'react'
import { FooterBar } from '../../components/FooterBar/FooterBar'
import { PageLayout } from "../../components/PageLayout/PageLayout"

export const Profile = () => {
    return (
        <PageLayout header={<strong>Página do Usuário</strong>}
            pageDescription={<strong>Alguma coisa</strong>}
            pageFooter={<FooterBar isProfile={true} />}
        ></PageLayout>
    )
}