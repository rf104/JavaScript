const shoppingCart = [
    {
        itemName : 'Book1023',
        price : 500
    },
    {
        itemName : 'Shirt',
        price : 1500
    },
    {
        itemName : 'Ipad',
        price : 45000
    },
    {
        itemName : 'Laptop',
        price : 50000
    },
    {
        itemName : 'AirBuds',
        price : 1700
    },
    {
        itemName : 'Mouse',
        price : 500
    },
    {
        itemName : 'Chess Board',
        price : 700
    },
]

const total_sum = shoppingCart.reduce((initail_sum,curr_val)=>{
    return initail_sum+curr_val.price
},0)

console.log(`The total bill of yours is ${total_sum}`);