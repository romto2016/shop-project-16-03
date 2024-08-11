import Header from './Header'
import CssBaseline from '@mui/material/CssBaseline'
import Main from './Main'
import Footer from './Footer'
import "styles/layout.css"
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'



type CardDataType = {
    totalCount: number
    totalPrice: number
}
const App = () => {

    const [cardData,setCardData] = useState<CardDataType>({
        totalCount: 0,
        totalPrice: 0,
    })
    
   return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header cardData={cardData}/>
                <Main />
                <Footer />
            </StyledEngineProvider>
        </>
    )
}
export default App
 