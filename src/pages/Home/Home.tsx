import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import { FooterBar } from '../../components/FooterBar/FooterBar';
import { PageLayout } from '../../components/PageLayout/PageLayout';
//import logo from '../_assets/img/bigBanner.svg';
export const Home = () => {
    return (
        <PageLayout layoutPage={
            <Grid sx={{ border: 'solid' }}>
                <strong>Banner</strong>
                <Box sx={{ display: 'flex' }}>
                    <h3>Image 1</h3>
                    <h3>Image 2</h3>
                    <h3>Image 3</h3>
                </Box>
            </Grid>}>
        </PageLayout>

    )
}