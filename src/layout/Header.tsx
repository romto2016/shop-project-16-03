import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Container } from '@mui/material'
import Logo from "../components/Logo/Logo"
import Menu from '../components/Menu/Menu'
import CardHeader from 'components/CardHeader/CardHeader'

// tsrafce
// import React from 'react'

type Props = {
    productInCart: {
        [id: number]: number
    }
}

const Header = ({ productInCart }: Props) => {
    return (
        <AppBar position="static" sx={{ backgroundColor: 'Green' }}>
            <Container>
                <Toolbar>
                    <Logo />
                    <Menu />
                    <CardHeader productInCart={productInCart} />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
