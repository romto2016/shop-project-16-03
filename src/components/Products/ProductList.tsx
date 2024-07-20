import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import Box from '@mui/material/Box'
import { CenterFocusStrong } from '@mui/icons-material'

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
                    <ProductListItem title="IPhone 15" />
                </Grid>

                <Grid item xs={12} sm={6} lg={4}>
                    <ProductListItem title="IPhone 14" />
                </Grid>

                <Grid item xs={12} sm={6} lg={4}>
                    <ProductListItem title="IPhone 13" />
                </Grid>
            </Grid>
        </>
    )
}
export default ProductList
