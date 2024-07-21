import { Description } from "@mui/icons-material";

type Product = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    id: number
}


export const productsArray: Product[] = [
    {
        id: 1,
        title: 'iPhone 15',
        description: 'This is iPhone 15',
        type: 'phone',
        capacity: '64',
        price: 1000,
    },
    {
       id:2,
        title: 'iPhone 14',
        description: 'This is iPhone 14',
        type: 'phone',
        capacity: '128',
        price: 500,
    },
    {
        id:3,
        title: 'iPhone 13',
        description: 'This is iPhone 13',
        type: 'phone',
        capacity: '256',
        price: 1000,
    },
    {
        id:4,
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '512',
        price: 1500,
    },
    {
       id:5,
        title: 'iPhone 12 Pro',
        description: 'This is iPhone 12 Pro',
        type: 'phone',
        capacity: '64',
        price: 500,
    },
    {
        id:6,
        title: 'iPhone 11',
        description: 'This is iPhone 11',
        type: 'phone',
        capacity: '32',
        price: 300,
    },
]