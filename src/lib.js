/**
 * @param {Array<string>} columns Array of columns
 * @param {logHorizontalOptions} [options] Print options
 * @param {number} options.minColumnMarginLength
 */
function logHorizontal(columns, options = {}) {
  const opts = {
    minColumnMarginLength: 5,
    columnMarginSymbol: ' ',
    printLineFunction: console.log,
    trimLines: true,
    ...options,
  }

  const rows = columns.map((el) => el.split('\n'))
  const maxElementsInRow = Math.max(...rows.map((el) => el.length))

  for (let i = 0; i < maxElementsInRow; ++i) {
    const line = rows
      .map((arr) => (opts.trimLines
        ? (arr[i] || '').trim()
        : (arr[i] || ''))
        .padEnd(Math.max(...arr.map((el) => el.length)), opts.columnMarginSymbol))
      .join(opts.columnMarginSymbol.repeat(opts.minColumnMarginLength))

    opts.printLineFunction(line)
  }
}

const PAD_SYMB = '.'

/** @param {Input} input */
function prettyPrintInput(input) {
  const columnsToPrint = []
  for (const { name, items } of input) {
    const infoLInes = items
      .map(({ amount, price }) => `${amount.toString().padEnd(7, PAD_SYMB)}${PAD_SYMB}${price.toString().padStart(7, PAD_SYMB)}`)
      .join('\n')
    columnsToPrint.push(`${name}\n${infoLInes}`)
  }
  logHorizontal(columnsToPrint)
}

/**
 * @param {Input} input
 * @returns {Ratios}
 */
function getRatios(input) {
  const ratios = {}
  for (const shop of input) {
    const arr = []

    for (const item of shop.items) {
      const ratio = parseFloat((item.price / item.amount).toFixed(5))
      arr.push({ ...item, ratio })
    }

    ratios[shop.name] = arr.sort((a, b) => a.ratio - b.ratio)
  }
  return ratios
}

function getName({ amount, price, ratio }) {
  return ''
    + `Amount: ${amount}\n`
    + `Price${PAD_SYMB}: ${price}\n`
    + `Ratio${PAD_SYMB}: ${ratio}`
}

/** @param {Ratios} ratios */
function prettyPrintWithRatios(ratios) {
  const arr = Object.keys(ratios)
    .map((shopName) => shopName + '\n' + ratios[shopName].map(getName).join('\n\n'))

  logHorizontal(arr)
}

/**
 * @param {Ratios} ratios
 * @returns {BestRatios}
 * */
function getBestRatios(ratios) {
  const entries = Object.entries(ratios)
    .map(([name, arr]) => [name, arr.sort((a, b) => a.ratio - b.ratio)[0]])

  return Object.fromEntries(entries)
}

/** @param {BestRatios} bestRatios */
function prettyPrintBestItems(bestRatios) {
  const arr = Object.entries(bestRatios)
    .map(([name, item]) => `${name}\n${getName(item)}`)

  logHorizontal(arr)
}

/**
 * @param {BestRatios} bestRatios
 * @returns {BestRatio}
*/
function getBestRatio(bestRatios) {
  const [shopName, item] = Object.entries(bestRatios)
    .sort(([_, a], [__, b]) => a.ratio - b.ratio)[0]

  return { shopName, item }
}

/** @param {BestRatio} bestRatio */
function prettyPrintBestRatio(bestRatio) {
  console.log(bestRatio.shopName)
  console.log(getName(bestRatio.item))
}

module.exports = {
  logHorizontal,

  prettyPrintInput,

  getRatios,
  prettyPrintWithRatios,

  getBestRatios,
  prettyPrintBestItems,

  getBestRatio,
  prettyPrintBestRatio,
}
