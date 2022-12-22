/*let size = +prompt(`введите число `);
let n = size;

let isFail = true;
for (let i = 2; i < n; i++) {
  console.log(`${i}`);
  if (size == 0) {
    alert(`0`);
    isFail = false;
    break;
  } else if (size >= 101) {
    alert(`число с не деепазона`);
    isFail = false;
    break;
  } else if (n % i == 0) {
    alert(`ура число ${n} сложное`);
    isFail = false;
    break;
  }
}
if (isFail) {
  alert(`Число ${n} простое крайнее число  делимое на 1 и  ${n}`);
}*/
let text = prompt(`введите текст`);

for (let line = text; line.length < 10; line += text) {
  alert(text);
}
