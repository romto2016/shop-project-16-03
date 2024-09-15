import Header from './Header'
import CssBaseline from '@mui/material/CssBaseline'
import Main from './Main'
import Footer from './Footer'
import "styles/layout.css"
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'



type ProductsInCartType = {
    [id: number]: number
}
const App = () => {

    const [productInCart, setProductsInCart]= useState<ProductsInCartType>({
        1:5,
        2:5,
        3:2,
    })
    
const addProductToCard = (id: number, count: number) => {
    setProductsInCart((prevState) => ({
       ...prevState,
        [id]:(prevState[id]||0)+count,
    }))
}
 


   return (
       <>
           <StyledEngineProvider injectFirst>
               <CssBaseline />
               <Header productInCart={productInCart} />
               <button onClick={()=>addProductToCard(2,5)}> Add product to card (5,1000$)</button>
               <Main addProductToCart={addProductToCard} />
               <Footer />
           </StyledEngineProvider>
       </>
   )
}
export default App
 