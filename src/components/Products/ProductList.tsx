import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import { productsArray } from "utils/productsArray"


type Props = {}
const ProductList = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component={'h2'}
                sx={{
                    marginBottom: '30px',
                }}
            >
                Products List
            </Typography>

            <Grid container spacing={2}>
                {productsArray.map((product, i) => (
                    <Grid item xs={12} sm={6} lg={4} key={i}>
                        <ProductListItem
                            title={product.title}
                            description={product.description}
                            type={product.type}
                            capacity={product.capacity}
                            price={product.price}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
export default ProductList
