import { Container } from "@mui/material"

import { getProductsObject, Product, productsArray } from 'utils/productsArray'

type Props = {
    productInCart: {
        [id: number]: number
    }
    productObject?: {
[id:number]: Product
    }
}

const CartPage = ({
    productInCart,
    productObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            <Container>
                <div>Cart</div>
                <div>
                    {Object.keys(productInCart).map((productId) => (
                        <div key={productId}>
                            {productObject[+productId].title}:{' '}
                            {productInCart[+productId]}: price for one item - {productObject[+productId].price}$
                        </div>
                    ))}
                </div>
                <div>
                    Total: $
                    {Object.keys(productInCart).reduce(
                        (total, productId) =>
                            total +
                            productInCart[+productId] *
                                productObject[+productId].price,
                        0
                    )}
                </div>
            </Container>
        </div>
    )
}
export default CartPage