import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Container } from '@mui/material'
import logo from '../assets/logo.svg'

// tsrafce
// import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <AppBar position="static" sx={{ backgroundColor: 'Green' }}>
            <Container>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        <img src={logo} alt="" />
                    </Typography>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Products</Button>
                    <Button color="inherit">Payment</Button>
                    <Button color="inherit">Cart</Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
