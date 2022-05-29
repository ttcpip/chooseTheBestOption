const input = require('./input')
const {
  prettyPrintInput,
  getRatios,
  prettyPrintWithRatios,
  getBestRatios,
  prettyPrintBestItems,
  prettyPrintBestRatio,
  getBestRatio,
} = require('./lib')

console.log(`-- All shops prices:`)
prettyPrintInput(input)
console.log('')

console.log(`-- All shops prices with ratios:`)
const ratios = getRatios(input)
prettyPrintWithRatios(ratios)
console.log('')

console.log(`-- Only the lowest ratio in every shop:`)
const bestRatios = getBestRatios(ratios)
prettyPrintBestItems(bestRatios)
console.log('')

console.log(`-- The best item:`)
const bestRatio = getBestRatio(bestRatios)
prettyPrintBestRatio(bestRatio)
