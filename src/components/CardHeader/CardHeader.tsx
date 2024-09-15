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
                    {productId}: {productInCart[+productId]}
                </div>
            ))}
           
        </div>
    )
     
}
export default CardHeader
