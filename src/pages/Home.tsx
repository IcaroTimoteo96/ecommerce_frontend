import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import logo from '../_assets/img/bigBanner.svg';
export const Home = () => {
    return (
        <>
            <Grid container sx={{ postion: 'relative' }}>
                <img src={logo} alt='bigbanner' />
                <Typography sx={{
                    position: 'absolute',
                    fontFamily: 'Metropolis',
                    fontSize: '48px',
                    textAlign: 'left',
                    color: '#FFFF',
                    bottom: '50px'
                }}>Fashion Sale</Typography>
                <Button variant='outlined' sx={{
                    position: 'absolute', backgroundColor: '#DB3022',
                    color: '#FFFF',
                    borderRadius: '10px', width: '160px', height: '36px',
                    bottom: '10px'
                }}>
                    Check
                </Button>
            </Grid>
        </>
    )

}