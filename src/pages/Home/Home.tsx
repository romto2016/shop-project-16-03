import { Container } from '@mui/material'
import ProductList from 'components/Products/ProductList'

type Props = {
    addProductToCart: (id: number, count: number) => void
}
const Home = ({ addProductToCart }: Props) => {
    return (
        <Container
            sx={{ padding: '30px 0' }}
            className="main-container"
            component={'div'}
        >
            <ProductList addProductToCart={addProductToCart} />
        </Container>
    )
}
export default Home
 