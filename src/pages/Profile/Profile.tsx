import { Grid } from '@mui/material'
import React from 'react'
import { PageLayout } from "../../components/PageLayout/PageLayout"

export const Profile = () => {
    return (
        <PageLayout layoutPage={
            <Grid>
                <strong>Página do Usuário</strong>
            </Grid>
        }>
        </PageLayout>
    )
}