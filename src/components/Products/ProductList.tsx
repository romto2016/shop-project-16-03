import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'


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
                <Grid item xs={12} sm={6} lg={4}>
                    <ProductListItem
                        title="IPhone 15"
                        description="This is iPhone 15"
                        capacity="Capacity: 254Gb"
                        price="Price: $2000"
                    />
                </Grid>

                <Grid item xs={12} sm={6} lg={4}>
                    <ProductListItem
                        title="IPhone 14"
                        description="This is iPhone 14"
                        capacity="Capacity: 128Gb"
                        price="Price: $1000"
                    />
                </Grid>

                <Grid item xs={12} sm={6} lg={4}>
                    <ProductListItem
                        title="IPhone 13"
                        description="This is iPhone 13"
                        capacity="Capacity: 64Gb"
                        price="Price: $500"
                    />
                </Grid>
            </Grid>
        </>
    )
}
export default ProductList
