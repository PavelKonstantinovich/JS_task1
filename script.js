// // Задания #1

let firstNum = prompt('Введите число')
let secondNum = prompt('Введите число')
if (firstNum == secondNum) {
  alert('Значения равны между собой')
} else if (firstNum > secondNum) {
  alert(firstNum)
} else if (firstNum < secondNum) {
  alert(secondNum)
}

// // Задания #2

let number = 100
number = prompt('Введите число от 1 до 100')
let sum = 0
for (let i = 0; i < number; i++) {
  sum = i+1
}
sum = sum*sum
alert(sum)

// Задания #3

let n = 0
if ( n < 3) { name1 = prompt('Введите любое имя'); n++ }
if ( n < 3) { name2 = prompt('Введите любое имя'); n++ }
if ( n < 3) { name3 = prompt('Введите любое имя'); n++ }
alert(name1 +' '+ name2 +' '+ name3)

let k = 0
if ( k < 3) { number1 = prompt('Введите любое число'); k++ }
if ( k < 3) { number2 = prompt('Введите любое число'); k++ }
if ( k < 3) { number3 = prompt('Введите любое число'); k++ }
alert(+number1 + +number2 + +number3)