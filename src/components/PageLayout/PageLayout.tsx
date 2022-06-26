import { AppBar, Box, Container, Grid, IconButton, Toolbar } from "@mui/material"
import React, { ReactChild } from "react"
import homeActive from "../../_assets/icons/home_activated.svg"
import homeInactive from "../../_assets/icons/home_inactive.svg"
import bagInactive from '../../_assets/icons/bag_inactive.svg'
import bagActive from '../../_assets/icons/bag_notification.svg'
import favoritesInactive from '../../_assets/icons/favorites_inactive.svg'
import shopInactive from '../../_assets/icons/shop_inactive.svg'
import shopActive from '../../_assets/icons/shop_activated.svg'
import profileInactive from '../../_assets/icons/profile_inactive.svg'
import { theme } from "../../_assets/theme/theme";
import { useNavigate } from 'react-router-dom';


interface PageLayoutProps {
    header?: ReactChild;
    pageDescription?: ReactChild;
    pageFooter?: ReactChild;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ header, pageDescription, pageFooter }) => {


    return (
        <Container maxWidth='xs' sx={{
            borderStyle: 'solid', '&.MuiContainer-root': {
                paddingRight: '0px',
                paddingLeft: '0px'
            }
        }} >
            <Box sx={{ borderStyle: 'solid' }}>
                {header}
            </Box>

            <Box sx={{ borderStyle: 'solid', marginTop: '32px' }}>
                {pageDescription}
            </Box>

            <Box>
                {pageFooter}
            </Box>
        </Container >

    )

}
