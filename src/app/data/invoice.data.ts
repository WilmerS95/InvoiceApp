import { Invoice } from "../models/invoice";

export const invoiceData: any = {
    id: 1,
    name: 'Soluciones Tecnologicas',
    client: {
        name: 'Wilmer',
        lastname: 'S95',
        address: {
            country: 'USA',
            city: 'Los Angeles',
            street: 'One Street',
            number: 15,
        }
    },
    company: {
        name: 'New Age',
        fiscalNumber: 1313131,
    },
    items:[
        {
            id: 1,
            product: 'Intel i9',
            price: 599,
            quantity: 3
        },
        {
            id: 2,
            product: 'Teclado',
            price: 199,
            quantity: 5
        },
        {
            id: 3,
            product: 'Monitor',
            price: 699,
            quantity: 1
        },
    ]
}