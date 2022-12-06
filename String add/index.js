const example_a =      '712569312664357328695151392';
const example_a2 = '463560157133740176745299037666';
const example_b =           '8100824045303269669937';
const example_b2 = '041827422316748846119599124205';
const example_answer = '712577413488402631964821329';

function sumStrings(a, b) {
  a = a.replace(/^0+/gi, '');
  b = b.replace(/^0+/gi, '');
  if ( a.length > b.length ) return sumStrings(b, a);

  let rest = 0;
  let answer = '';

  for ( let i = a.length - 1, j = b.length - 1; j >= 0 ; i--, j--) {
    let temp = Number(b[j]) + Number(a[i] ? a[i] : 0) + rest;
    console.log("b" , b[j], "a", a[i], "rest", rest, "temp:", temp)
    rest = 0;
    if (temp >= 10) {
      rest = Math.floor(temp / 10);
      answer = (temp - 10) + answer;
      continue
    }
    answer = temp + answer;
  }
  if (rest !== 0) answer = rest + answer;
  return answer;
}
const answer = sumStrings(example_a2, example_b2);
console.log(answer);