const TEST_FIELD = [
  [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
const TEST_FIELD_EXPECTED_VALUE = true;

const TEST_FIELD_2 = [
  [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const TEST_FIELD_2_EXPECTED_VALUE = false;

const TEST_FIELD_3 = [
  [0,0,0,0,0,1,1,0,0,0],
  [0,0,1,0,0,0,0,0,1,0],
  [0,0,1,0,1,1,1,0,1,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,1,0],
  [0,0,0,0,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,0,1,0],
  [0,0,0,1,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,0,0],
  [0,0,0,0,0,0,0,0,0,0]
]


const results = [
  validateBattlefield(TEST_FIELD),
  validateBattlefield(TEST_FIELD_2)
]

console.table(results);

/**
 *
 * [
 *  [
 *    [2,3],
 *    [2,4]
 *  ],
 *  [
 *    [2,5],
 *    [6,3]
 *  ]
 * ]
 *
 *
 *
 */


// ============================================================

function countShips(ships) {
  const MAX_OF_SHIPS = 20;
  let sumOfShips = ships.reduce((acc, currentShip) => acc+currentShip.length, 0);
  return sumOfShips === MAX_OF_SHIPS;
}

function validateBattlefield(field) {
  const fieldSize = field.length;
  const SHIPS = [];

  const fieldExistAndIsFilled = (x, y) => field[y] && field[y][x] && field[y][x] === 1;

  for (let currY = 0; currY < fieldSize;  currY++) {
    for (let currX = 0; currX < fieldSize; currX++) {
      if (field[currY][currX] === 0) continue;

      if (fieldExistAndIsFilled(currX + 1, currY + 1) ||
          fieldExistAndIsFilled(currX + 1, currY - 1) ||
          fieldExistAndIsFilled(currX - 1, currY + 1) ||
          fieldExistAndIsFilled(currX - 1, currY - 1)) return false;

      const indexOfShip = SHIPS.findIndex((ship) => {
        for (const shipElement of ship) {
          if (shipElement[0] === currY  && shipElement[1] === currX - 1 ||
            shipElement[0] === currY  && shipElement[1] === currX + 1  ||
            shipElement[0] === currY - 1 && shipElement[1] === currX  ||
            shipElement[0] === currY + 1 && shipElement[1] === currX ) return true;
        }
        return false;
      })

      if (indexOfShip < 0) {
        SHIPS.push([ [currY, currX] ]);
        continue;
      }

      SHIPS[indexOfShip].push([currY, currX]);
    }
  }

  return countShips(SHIPS);
}


