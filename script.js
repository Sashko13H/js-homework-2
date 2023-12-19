//***1***
// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0, -3.
// let num = 1;
// if (num > 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }
// num = 0;
// if (num > 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }
// num = -3;
// if (num > 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }

//***2***
// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test', "qwerty", true
// let text = "test";
// if (text === "test") {
//     console.log(true);
// }
// text = "qwerty";
// if (text === "test") {
//     console.log(true);
// }
// text = true;
// if (text === "test") {
//     console.log(true);
// }

//***3***
// Якщо змінна більше 10 - відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах 1, 10, 13.
// let num = 1;
// if (num > 10) {
//     num = num - 5;
//     console.log(num);
// } else if (num < 10) {
//     num = num + 5;
//     console.log(num);
// }
// num = 10;
// if (num > 10) {
//     num = num - 5;
//     console.log(num);
// } else if (num < 10) {
//     num = num + 5;
//     console.log(num);
// }
// num = 13;
// if (num > 10) {
//     num = num - 5;
//     console.log(num);
// } else if (num < 10) {
//     num = num + 5;
//     console.log(num);
// }


//***4***
//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу
// let month = prompt("Введіть число від 1 до 12...");
// switch (month) {
//     case"1":
//     alert("Січень");
//     break;
//     case"2":
//     alert("Лютий");
//     break;
//     case"3":
//     alert("Березень");
//     break;
//     case"4":
//     alert("Квітень");
//     break;
//     case"5":
//     alert("Травень");
//     break;
//     case"6":
//     alert("Червень");
//     break;
//     case"7":
//     alert("Липень");
//     break;
//     case"8":
//     alert("Серпень");
//     break;
//     case"9":
//     alert("Вересень");
//     break;
//     case"10":
//     alert("Жовтень");
//     break;
//     case"11":
//     alert("Листопад");
//     break;
//     case"12":
//     alert("Грудень");
//     break;
//     default:
//         alert("Помилка! Введіть число від 1 до 12...");
// }

//***5***
//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел
// let n = prompt("Введіть трьохзначне число");
// if (n > 99 && n < 1000) {
//   let sum = 0;
//   while (n > 0) {
//     let ld = n % 10;
//     sum += ld;
//     n = Math.floor(n / 10);
//   }
//   alert(sum);
// } else {
//   alert("Щось пішло не так");
// }





