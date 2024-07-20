import { Typography } from "@mui/material"
import ProductListItem from "./ProductListItem"

type Props = {}
const ProductList = (props: Props) => {
  return (
      <div>
          <Typography variant="h4" component={'h1'}>
              Products List
          </Typography>
          <ProductListItem />
      </div>
  )
}
export default ProductList