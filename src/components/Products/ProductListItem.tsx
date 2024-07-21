import { Button, Card, CardContent } from '@mui/material'
import './ProductListItem.css'
type Props = {
    title: string
    description: string
    capacity: string
    price: string | number
}
const ProductListItem = ({title, description, capacity, price}: Props) => {
    return (
        <Card variant="outlined" className="product-list-item">
            <CardContent>
                <h3 className="product-title">{title}</h3>
                <p className="product-description">{description}</p>
                <div className="product-features">Type: phone</div>
                <div className="product-capacity">{capacity}</div>
                <div className="product-price">{price}</div>
                <div className="btns-wrapper">
                    <Button variant="outlined">Add to Card</Button>
                </div>
            </CardContent>
        </Card>
    )
}
export default ProductListItem
