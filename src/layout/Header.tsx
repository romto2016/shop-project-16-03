import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

import { CardHeader, Container } from '@mui/material'
import Logo from "../components/Logo/Logo"
import Menu from '../components/Menu/Menu'


// tsrafce
// import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <AppBar position="static" sx={{ backgroundColor: 'Green' }}>
            <Container>
                <Toolbar>
                   <Logo />
                   <Menu />
                   <CardHeader />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
