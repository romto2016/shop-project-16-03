import { Container } from "@mui/material"
import ProductList from "components/Products/ProductList"

type Props = {
  addProductToCart:(count: number, price:number) => void
}
const Main = ({addProductToCart}: Props) => {
  return (
      <>
          <Container
              sx={{ padding: '30px 0' }}
              className="main-container"
              component={'main'}
          >
              <ProductList addProductToCart={addProductToCart} />
          </Container>
      </>
  )
}
export default Main
