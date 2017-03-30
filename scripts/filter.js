/* Generate our shopping list */
/* c current, i index, a array; the following function filters out any "0" supply (eg. onions)*/
// const shoppingListArr = cart.filter( function (c, i , a) {
//   return c.quant > 0
// })

/* filter iterates over the array and provides true/false over every element. "True" items pushes to the new variable*/

const filterList = c => c.quant > 0
const shoppingListArr = cart.filter( filterList)


console.log('\nour shopping list as an array')
console.table(shoppingListArr);

/* Chain filter and map, to generate a better shopping list!*/

const show = c => '( )' + c.quant + ' - ' + c.item
const shoppingList = cart.filter (filterList )
                          .map(show)

console.log( '\our new and improved shopping list')
console.table(shoppingList)
