type Props = {
    cardData: {
        totalCount: number
        totalPrice: number
    }
}

const CardHeader = ({ cardData }: Props) => {
    return (
        <div>
            <div>{cardData.totalCount}</div>
            <div>{cardData.totalPrice}$</div>
        </div>
    )
}
export default CardHeader
