//Object property shorthand

const name = 'Andrew'
const userAge = 27

const user = {
    name,
    age: userAge,
    location: 'Banglore'
}

console.log(user)

//Object destructing

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const label = product.label
// const stock = product.stock

/*
const {label: productLabel, stock, rating = 5} = product
console.log(productLabel)
console.log(stock)
console.log(rating)
*/

const transaction = function(type, { label, stock, rating = 5 } = {}){
    console.log(type, label, stock, rating)
}

transaction('order')