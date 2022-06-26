import React from 'react';
import { AppBar, Box, Container, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { FooterBar } from '../../components/FooterBar/FooterBar';
import { PageLayout } from '../../components/PageLayout/PageLayout';
//import logo from '../_assets/img/bigBanner.svg';
import { ProductCard } from '../../components/ProductCard/ProductCard';

export const Home = () => {
    return (
        <PageLayout header={
            <Grid>
                <strong>Street Clothes</strong>
            </Grid>
        }
            pageDescription={
                <Grid>
                    <strong>Sale</strong>
                    <ProductCard></ProductCard>
                </Grid>
            }

            pageFooter={
                <FooterBar isHome={true} />
            }
        >
        </PageLayout>

    )
}