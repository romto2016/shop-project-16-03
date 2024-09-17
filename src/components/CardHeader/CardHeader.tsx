import { productsArray } from 'utils/productsArray'
type Props = {
    productInCart: {
        [id: number]: number
    }
}

const CardHeader = ({ productInCart }: Props) => {
    console.log(productInCart)
    return (
        <div>
            {Object.keys(productInCart).map((productId) => (
                <div key={productId}>
                    {productsArray[+productId-1].title}:{' '}
                    {productInCart[+productId]}
                </div>
            ))}
        </div>
    )
}
export default CardHeader
