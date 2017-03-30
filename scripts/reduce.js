/* Calculate total cost*/
/*  ".reduce" needs a "starting spot - so add a 0 at the end"*/

const costReducer = (r, c) => r += c.quant * c.price

const totalCost = cart.reduce( costReducer, 0)

console.log('\nthe total cost of our cost', totalCost)


/* Total cost of 'a' items */
const includesA = obj => obj.item.indexOf('a')!== -1
/* indexOf produces a -1 for "false" */
const costPer = obj => obj.price * obj.quant
const sumCost = (accumulator, cost) => accumulator += cost
const costOfAVeggies = cart.filter( includesA )
                            .map( costPer )
                            .reduce ( sumCost, 0 )

console.log('\n the cost of our \'a\' produce: ', costOfAVeggies)

console.log('\ncart')
console.table(cart)
