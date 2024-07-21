import { Description } from "@mui/icons-material";

type Product = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    id: number
    image: string
}


export const productsArray: Product[] = [
    {
        id: 1,
        title: 'iPhone 15',
        description: 'This is iPhone 15',
        type: 'phone',
        capacity: '64',
        price: 1000,
        image: "images/221214139.webp"
    },
    {
       id:2,
        title: 'iPhone 14',
        description: 'This is iPhone 14',
        type: 'phone',
        capacity: '128',
        price: 500,
        image: "images/259416480.webp"
    },
    {
        id:3,
        title: 'iPhone 13',
        description: 'This is iPhone 13',
        type: 'phone',
        capacity: '256',
        price: 1000,
        image: "images/364834195.webp"
    },
    {
        id:4,
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '512',
        price: 1500,
        image: "images/364834211.webp"
    },
    {
       id:5,
        title: 'iPhone 12 Pro',
        description: 'This is iPhone 12 Pro',
        type: 'phone',
        capacity: '64',
        price: 500,
        image: "images/364834229.webp"
    },
    {
        id:6,
        title: 'iPhone 11',
        description: 'This is iPhone 11',
        type: 'phone',
        capacity: '32',
        price: 300,
        image: "images/364834252.webp"
    },
]