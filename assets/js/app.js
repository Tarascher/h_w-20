let size = +prompt(`введите число `);
let n = size;

let isTrue = true;
for (let i = 2; i < n; i++) {
  console.log(`${i}`);
  if (size == 0) {
    alert(`0`);
    isTrue = false;
    break;
  } else if (n % i == 0) {
    /*else if (size >= 101) {
    alert(`число с не деепазона`);
    isTrue = false;
    break;
  }*/
    alert(`ура число ${n} сложное`);
    isTrue = false;
    break;
  }
}
if (isTrue) {
  alert(`Число ${n} простое крайнее число  делимое на 1 и  ${n}`);
}
/*let text = prompt(`введите текст`);

for (let line = text; line.length < 10; line += text) {
  alert(text);
}*/
