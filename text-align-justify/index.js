function justify(text, width) {
  const textWords = text.split(' ');
  const curr = [];
  let output = "";
  for (const word of textWords) {
    let currLength = getSumOfArrayElementsLength(curr);
    if (currLength + word.length + (curr.length - 1) < width) {
      curr.push(word);
      continue;
    }
    output+=`${justifyArr(curr, width)}\n`;
    curr.length = 0;
    curr.push(word);
  }
  output+=curr.join(' ');
  console.log(output)
  return output;
}

const justifyArr = (arr, width) => {
  const wordsCount = arr.length;
  let freeSpaces = width - getSumOfArrayElementsLength(arr);
  return arr.reduce((previousValue, currentValue, currentIdx) => {
    let spacesToInsert = Math.ceil(freeSpaces / (wordsCount - currentIdx));
    freeSpaces-=spacesToInsert;
    return previousValue + (" ".repeat(spacesToInsert)) + currentValue;
  });
}

const getSumOfArrayElementsLength = (arr) => {
  return arr.reduce((acc, currentValue) => acc+currentValue.length, 0)
}

const LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.';
const TestText = "123 45 6";
//justify(TestText, 7)
console.log(justify(LIPSUM, 30));

/**
 * x = Suma długości wyrazów + (n - 1 spacji)
 * x < Maksymalna szerokość
 * Maksymalna szerokość - x -> Spacje do wstawienia
 *
 */
