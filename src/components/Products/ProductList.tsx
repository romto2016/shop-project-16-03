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
                {productsArray.map(
                    ({ id, title, type, description, capacity, price }) => (
                        <Grid item xs={12} sm={6} lg={4} key={id}>
                            <ProductListItem
                                title={title}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductList
