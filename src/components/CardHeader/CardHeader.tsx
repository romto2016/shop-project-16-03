import { getProductsObject, Product, productsArray } from 'utils/productsArray'
type Props = {
    productInCart: {
        [id: number]: number
    }
    productObject?: {
[id:number]: Product 
    }
}

const CardHeader = ({ productInCart, 
    productObject = getProductsObject(productsArray),
}: Props) => {
   
    return (
        <div>
            <div>
                {Object.keys(productInCart).map((productId) => (
                    <div key={productId}>
                        {productObject[+productId].title}:{' '}
                        {productInCart[+productId]}
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
        </div>
    )
}
export default CardHeader
