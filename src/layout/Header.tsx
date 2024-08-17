import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Container } from '@mui/material'
import Logo from "../components/Logo/Logo"
import Menu from '../components/Menu/Menu'
import CardHeader from 'components/CardHeader/CardHeader'

// tsrafce
// import React from 'react'

type Props = {
    cardData: {
        totalCount: number
        totalPrice: number
    }
    
}

const Header = ({
   cardData
}:Props) => {
    return (
        <AppBar position="static" sx={{ backgroundColor: 'Green' }}>
            <Container>
                <Toolbar>
                   <Logo />
                   <Menu />
                   <CardHeader cardData={cardData}/>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
