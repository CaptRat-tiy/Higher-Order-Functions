/* CHEEZY FOR LOOP */

// for(let i = 0; i < cart.length; i++) {
//   cart[i].item = "cheezy " + cart[i].item
// }
// console.log('\ncheezy for loop')
console.table(cart)
/* the for loop "mutates" the original data (adds "cheezy " to the array data); "destructive" array method. */

/*MAP the cost of each cart item*/

/* map iterates over each item, expecting from the callback a value that it will push into the new array */

// const ourCartItems = cart.map(function(c, i ,a) {
//   return c.quant * c.price
// } )

const costOfCartItem = c => c.quant * c.price

const ourCartItems = cart.map( (c) => costOfCartItem(c) )

console.log('\nourCartItems')
console.table(ourCartItems)
