import { AppBar, Box, IconButton, Toolbar } from "@mui/material"
import React from "react"
import homeActive from "../../_assets/icons/home_activated.svg"
import homeInactive from "../../_assets/icons/home_inactive.svg"
import bagInactive from '../../_assets/icons/bag_inactive.svg'
import bagActive from '../../_assets/icons/bag_activated.svg'
import favoritesInactive from '../../_assets/icons/favorites_inactive.svg'
import favoritesActive from '../../_assets/icons/favorites_activated.svg'
import shopInactive from '../../_assets/icons/shop_inactive.svg'
import shopActive from '../../_assets/icons/shop_activated.svg'
import profileInactive from '../../_assets/icons/profile_inactive.svg'
import profileActive from '../../_assets/icons/profile_activated.svg'
import { useNavigate } from 'react-router-dom';

export interface FooterBarProps {
    isHome?: boolean
    isShop?: boolean
    isBag?: boolean
    isFavorites?: boolean
    isProfile?: boolean
}
export const FooterBar = ({ isHome, isShop, isBag, isFavorites, isProfile }: FooterBarProps) => {
    const [disableHomeIcon, setDisableHomeIcon] = React.useState(false);
    const [disableShop, setDisableShop] = React.useState(false);
    const [disableBag, setDisableBag] = React.useState(false);
    const [disableFavorites, setDisableFavorites] = React.useState(false);
    const [disableProfile, setDisableProfile] = React.useState(false);
    const navigate = useNavigate();

    React.useEffect(() => {
        if (isShop) {
            setDisableHomeIcon(false)
            setDisableShop(true)
            setDisableBag(false)
            setDisableFavorites(false)
            setDisableProfile(false)
        } else if (isBag) {
            setDisableHomeIcon(false)
            setDisableShop(false)
            setDisableBag(true)
            setDisableFavorites(false)
            setDisableProfile(false)
        } else if (isFavorites) {
            setDisableHomeIcon(false)
            setDisableShop(false)
            setDisableBag(false)
            setDisableFavorites(true)
            setDisableProfile(false)
        } else if (isProfile) {
            setDisableHomeIcon(false)
            setDisableShop(false)
            setDisableBag(false)
            setDisableFavorites(false)
            setDisableProfile(true)
        } else {
            setDisableHomeIcon(true)
            setDisableShop(false)
            setDisableBag(false)
            setDisableFavorites(false)
            setDisableProfile(false)
        }
    }, [isShop, isBag, isFavorites, isProfile])

    const onHomeClick = () => {
        navigate('/');
    }

    const onShopPageClick = () => {
        navigate('/src/pages/Shop');
    }

    const onBagPageClick = () => {
        navigate('/src/pages/Bag')
    }

    const onFavoritesClick = () => {
        navigate('/src/pages/Favorites')
    }

    const onProfileClick = () => {
        navigate('/src/pages/Profile')
    }

    return (
        <AppBar sx={{
            margin: '0',
            position: 'sticky', marginTop: '490px', borderRadius: '10px', backgroundColor: 'white'
        }}>
            <Toolbar sx={{ borderRadius: '20px', justifyContent: 'space-between' }}>
                <IconButton onClick={onHomeClick} size="medium">
                    <img src={disableHomeIcon ? homeActive : homeInactive} alt='home' height='20px' />
                </IconButton>
                <IconButton onClick={onShopPageClick} size="medium">
                    <img src={disableShop ? shopActive : shopInactive} alt='shop' height='20px' />
                </IconButton>
                <IconButton onClick={onBagPageClick} size="medium">
                    <img src={disableBag ? bagActive : bagInactive} alt='bag' height='20px' />
                </IconButton>
                <IconButton onClick={onFavoritesClick} size="medium">
                    <img src={disableFavorites ? favoritesActive : favoritesInactive} alt='favorites' height='20px' />
                </IconButton>
                <IconButton onClick={onProfileClick} size="medium">
                    <img src={disableProfile ? profileActive : profileInactive} alt='profile' height='20px' />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}