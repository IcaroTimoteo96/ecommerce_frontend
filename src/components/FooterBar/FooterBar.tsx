import { Box } from "@mui/material"
import React from "react"
import homeInactive from "../../_assets/icons/home_inactive.svg"
import bagNotification from '../../_assets/icons/bag_notification.svg'
import favouritesInactive from '../../_assets/icons/favourites_inactive.svg'
import shopInactive from '../../_assets/icons/shop_inactive.svg'
import profileInactive from '../../_assets/icons/profile_inactive.svg'
import { useNavigate } from 'react-router-dom';

export const FooterBar = () => {
    let history = useNavigate();

    const onClickShop = () => history("/src/components/Shop");
    const onClickProfile = () => history("/src/pages/Profile/");
    const onClickBag = () => history("/src/pages/Bag/");
    const onClickHome = () => history("/");
    const onClickFavourites = () => history("/src/pages/Favourites/");

    return (
        <Box sx={{ display: 'flex', width: 'auto', justifyContent: 'space-between', border: 'solid' }}>
            <Box>
                <img style={{ cursor: 'pointer' }} src={homeInactive} alt='home' width='20px' height='20px' onClick={onClickHome} />
            </Box>

            <Box>
                <img style={{ cursor: 'pointer' }} src={shopInactive} alt='home' width='20px' height='20px' onClick={onClickShop} />
            </Box>
            <Box>
                <img style={{ cursor: 'pointer' }} src={bagNotification} alt='shop' width='20px' height='20px' onClick={onClickBag} />
            </Box>
            <Box>
                <img style={{ cursor: 'pointer' }} src={favouritesInactive} alt='favourites' width='20px' height='20px' onClick={onClickFavourites} />
            </Box>
            <Box>
                <img style={{ cursor: 'pointer' }} src={profileInactive} alt='profile' width='20px' height='20px' onClick={onClickProfile} />
            </Box>
        </Box>
    )
}