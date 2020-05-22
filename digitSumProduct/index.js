/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(number) {
    let sum = 0
    let product = 1
    while (number > 0) {
        const remainder = number % 10
        sum += remainder
        product *= remainder
        number = Math.floor(number/10)
    }
    return product-sum
};
const number = Math.floor(Math.random()*1000)
const finalNumber = subtractProductAndSum(number)
console.log(`Passing ${number} to function subtractProductAndSum. Returning: ${finalNumber}.`)