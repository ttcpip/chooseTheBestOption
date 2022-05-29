/**
 * @typedef {Object} InputEntryItem
 * @property {number} amount
 * @property {number} price
 *
 * @typedef {Object} InputEntry
 * @property {string} name
 * @property {InputEntryItem[]} items
 *
 * @typedef {InputEntry[]} Input
 *
 * @typedef {Object} InputEntryItemWithRatio
 * @property {number} amount
 * @property {number} price
 * @property {number} ratio
 *
 * @typedef {Record<string, InputEntryItemWithRatio[]>} Ratios
 * @typedef {Record<string, InputEntryItemWithRatio>} BestRatios
 * @typedef {{ shopName: string, item: InputEntryItemWithRatio }} BestRatio
 *
 * @typedef logHorizontalOptions
 * @type {Object}
 * @property {number} minColumnMarginLength Minimum column margin length. Default - 3.
 * @property {string} columnMarginSymbol Margin symbol. Default - ' '.
 * @property {number} printLineFunction Function to use to print line. Default - console.log.
 * @property {boolean} trimLines Does need to trim lines before print. Default - true.
 */
