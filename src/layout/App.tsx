import Header from './Header'
import CssBaseline from '@mui/material/CssBaseline'
import Main from './Main'
import Footer from './Footer'
import 'styles/layout.css'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'

type ProductsInCartType = {
    [id: number]: number
}
const App = () => {
    const [productInCart, setProductsInCart] = useState<ProductsInCartType>({
        1: 0,
        2: 0,
        3: 0,
    })

    const addProductToCard = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header productInCart={productInCart} />
                 <Main addProductToCart={addProductToCard} />
                <Footer />
            </StyledEngineProvider>
        </>
    )
}
export default App
