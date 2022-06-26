import { Button, Card, Fab, Grid, Typography } from "@mui/material"
import favoritesInactive from '../../_assets/icons/favorites_inactive.svg'
import productOne from '../../_assets/img/productOne.svg'
import React from "react"

export const ProductCard = () => {
    return (
        <Grid>
            <Card sx={{ borderRadius: '15px', width: 148, height: 184 }}>
                <img src={productOne} alt="product" ></img>
                <Button sx={{ position: 'absolute', transform: 'translate(-150px, 8px)', backgroundColor: '#DB3022', borderRadius: '80px', maxWidth: '40px', padding: '8px' }}>
                    <strong style={{ color: '#FFFF', fontSize: '12px' }}>-20%</strong>
                </Button>
                <Fab size="small" sx={{ backgroundColor: "#FFFF", position: 'absolute', transform: 'translate(-30px,150px)' }}>
                    <img src={favoritesInactive} height='15px' width='15px' alt='favorites'></img>
                </Fab>
            </Card>

            <Typography align="left" color='#9B9B9B' fontSize='11px'>Dorothy Perkins</Typography>
            <Typography align="left" color='#222222' fontSize='16px'>Evening Dress</Typography>
            <Typography sx={{ color: '#DB3022', fontSize: '14px' }}>$12</Typography>
        </Grid>
    )
}