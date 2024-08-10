import { Button, Card, CardContent, TextField } from '@mui/material'
import './ProductListItem.css'
import { useState } from 'react'
type Props = {
    title: string
    description: string | boolean
    type: string
    capacity: string
    price: number
    image: string
}

const ProductListItem = ({
    title,
    description,
    capacity,
    price,
    type,
    image,
}: Props) => {
    const [count, setCount] = useState<number>(2)
    const [isDescriptionShow, setIsDescriptionShow] = useState<boolean>(false)

    const onIncrementClick = () => {
        setCount((prevCount) => prevCount + 1)
    }

    const onDecrementClick = () => {
        setCount((prevCount) => prevCount - 1)
    }
    const toggleDescription = () => {
        setIsDescriptionShow((prevState) => !(prevState))
    }
    return (
        <Card variant="outlined" className="product-list-item">
            <CardContent>
                <div className="product-image">
                    <img src={image} alt="" />
                </div>
                <h3 className="product-title">{title}</h3>
                <p className="product-description">{description}</p>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Type: {capacity}Gb</div>
                <div>
                    <button onClick={toggleDescription}>
                       {isDescriptionShow ? "Hide" : "Show"} description
                    </button>
                    {isDescriptionShow ? (
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Provident quaerat error pariatur culpa
                            delectus, praesentium quisquam aut, sint expedita
                            reiciendis modi odit inventore consectetur illum
                            consequuntur aperiam esse deleniti maiores!
                        </p>
                    ) : null}
                </div>
                <div className="product-capacity">{capacity}</div>
                <div className="product-price">{price}</div>
                <div className="btns-wrapper">
                    <div className="product-quantity">
                        <Button variant="outlined">-</Button>
                        <TextField size="small" value={count} />
                        <Button variant="outlined" onClick={onDecrementClick}>
                            +
                        </Button>
                    </div>
                    <div className="btns-wrapper">
                        <Button variant="outlined" onClick={onIncrementClick}>
                            Add to Card
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
export default ProductListItem
