|Input | Output |
|------|--------|
|src/input.js | std |

##### Usage: `npm run start`

##### Sample input:
```js
const input = [
  {
    name: 'Shop#1',
    items: [
      { amount: 35, price: 85 },
      { amount: 70, price: 165 },
      { amount: 140, price: 325 },
      { amount: 250, price: 560 },
      { amount: 350, price: 745 },
    ],
  },
  {
    name: 'Shop#2',
    items: [
      { amount: 35, price: 90 },
      { amount: 70, price: 170 },
      { amount: 140, price: 330 },
      { amount: 250, price: 565 },
      { amount: 350, price: 750 },
    ],
  },
  {
    name: 'Shop#3',
    items: [
      { amount: 70, price: 176 },
      { amount: 140, price: 346 },
      { amount: 250, price: 600 },
      { amount: 350, price: 795 },
    ],
  },
]
```

#####  Sample output: 
```ini
-- All shops prices:
Shop#1              Shop#2              Shop#3
35...........85     35...........90     70..........176
70..........165     70..........170     140.........346
140.........325     140.........330     250.........600
250.........560     250.........565     350.........795
350.........745     350.........750

-- All shops prices with ratios:
Shop#1              Shop#2              Shop#3
Amount: 350         Amount: 350         Amount: 350
Price.: 745         Price.: 750         Price.: 795
Ratio.: 2.12857     Ratio.: 2.14286     Ratio.: 2.27143

Amount: 250         Amount: 250         Amount: 250
Price.: 560         Price.: 565         Price.: 600
Ratio.: 2.24        Ratio.: 2.26        Ratio.: 2.4

Amount: 140         Amount: 140         Amount: 140
Price.: 325         Price.: 330         Price.: 346
Ratio.: 2.32143     Ratio.: 2.35714     Ratio.: 2.47143

Amount: 70          Amount: 70          Amount: 70
Price.: 165         Price.: 170         Price.: 176
Ratio.: 2.35714     Ratio.: 2.42857     Ratio.: 2.51429

Amount: 35          Amount: 35
Price.: 85          Price.: 90
Ratio.: 2.42857     Ratio.: 2.57143

-- Only the lowest ratio in every shop:
Shop#1              Shop#2              Shop#3
Amount: 350         Amount: 350         Amount: 350
Price.: 745         Price.: 750         Price.: 795
Ratio.: 2.12857     Ratio.: 2.14286     Ratio.: 2.27143

-- The best item:
Shop#1
Amount: 350
Price.: 745
Ratio.: 2.12857
```