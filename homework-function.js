// 1. Cделайте функцию, которая возвращает квадрат числа. 
//Число передается параметром.


// function getSquaring (a) {
//     return a*a;
// }

// getSquaring();

// console.log(getSquaring(5)); //25


// 2. Сделайте функцию, которая возвращает сумму двух чисел.


// function calcSum (a,b) {
//     return a+b;
// }

// calcSum();

// console.log(calcSum(5,7)); //12

// ИЛИ

// const calcSum = (a, b) => a + b;
// calcSum();

// console.log(calcSum(5,7)); //12

// 3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье.


// function calcFraction (a,b,c) {
//     return (a-b)/c;
// }

// calcFraction();

// console.log(calcFraction(5,7,2)); //-1

// 4. Сделайте функцию, которая принимает параметром число от 1 до 7,
// а возвращает день недели на русском языке.


// function getDayWeek (a) {
//     if (a == 1) {
//         return ('Понедельник');
//     } else if (a==2) {
//         return ('Вторник');
//     } else if (a==3) {
//         return ('Среда');
//     } else if (a==4) {
//         return ('Четверг');
//     } else if (a==5) {
//         return ('Пятница');
//     } else if (a==6) {
//         return ('Суббота');
//     } else if (a==7) {
//         return ('Воскресенье');
//     } else {
//         return ('Ошибка');
//     }
// }

// getDayWeek();

// // console.log(getDayWeek(5)); //Пятница
// console.log(getDayWeek(10)); //Ошибка

// 5.Сделайте функцию, которая параметрами принимает 2 числа. 
//Если эти числа равны - пусть функция вернет true, а если не равны - false.



// function comparison (a,b) {
//     if (a==b) {
//         return true;
//     } else
//     return false;
// }

// comparison();

// console.log(comparison(5,7)); //false
// console.log(comparison(5,5)); //true

// 6.Сделайте функцию, которая параметрами принимает 2 числа. 
//Если их сумма больше 10 - пусть вернет true, а если нет то - false.

// function calcComparisonSum (a,b) {
//     if ((a + b) > 10 ) {
//         return true;
//     } else
//     return false;
// }

// calcComparisonSum();

// console.log(calcComparisonSum(5,7)); //true
// // console.log(comparisonSum(5,3)); //false

// 7. Сделайте функцию, которая параметром принимает число и проверяет
//  - отрицательное оно или нет. 
// Если отрицательное - пусть функция вернет true, а если нет - false.

// function getCheck (a) {
//     return a > 0;
// }

// getCheck ();

// console.log(getCheck (5)); //true
// console.log(getCheck (0)); // false
//  console.log(getCheck (-6)); //false

// ИЛИ

// function getCheck (a) {
//     if (a > 0 ) {
//         return true;
//     } else if (a < 0 ) {
//     return false;
//     } else {
//         return '0';
//     }
// }

// getCheck ();

// console.log(getCheck (5)); //true
// console.log(getCheck (0)); // 0
// console.log(getCheck (-6)); //false

// 8. Сделайте функцию isNumberInRange, которая параметром принимает число и 
//проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция 
//возвращает true, если не так - false.

// function isNumberInRange (a) {
//     if (a > 0  && a < 10) {
//         return true;
//     } else {
//         return false;
//     }
   
// }

// isNumberInRange ();

// console.log(isNumberInRange (5)); //true
// console.log(isNumberInRange (30)); // false
// console.log(isNumberInRange (-6)); //false

// 9. Создайте функцию rgb(), которая будет принимать три числовых аргумента 
//и возвращать строку вида «rgb(23,100,134)». Если аргументы не заданы, 
//считать их равными нулю. Не проверять переменные на тип данных

// function rgb (a,b,c) {
//         return `rgb (${a ? a : 0},${b ? b : 0},${c ? c : 0})`;
// }
// rgb ();

// console.log(rgb(3,506,75)); // rgb (3,506,75)
// console.log(rgb(3,506)); // rgb (3,506,0)

// 10.Написать функцию, которая принимает в себя три параметра - 
//число и две функции. Первая переданная функция  возвращает возведенное 
//в квадрат переданное число и будет вызываться, если число четное. 
//Вторая переданная коллбэк-функция будет вызываться с переданным в нее числом , 
//если число нечетное, и будет возвращать число, увеличенное на 1.

// function getSquaring(a) {
//     return a*a;
// }

// function getCallback(a) {
//     return a++;
// }

// function rgb(a,getSquaring,getCallback) {
//         if (a%2===0) {
//             getSquaring();

//         } else {
//             getCallback();
//         }
// }
// rgb();

// console.log(rgb(3)); // 


// 11.Написать функцию mult(num1, num2 , num3) принимающую 3 числа. 
//Функцию перемножает num1 и num2 столько раз, сколько указано в третьем аргументе 
// Значения num1 и num2 по умолчанию 1,  num3 по умолчанию 2. 
// let sum=0;

// function mult(num1=2, num2=3, num3=2) {
//     for (i=1; i<=num3; i++) {
//         a=num1*num2;
//         sum += a;
//     }
    
// }
//  mult();

//  console.log(sum); // 12

// let sum=0;

// function mult(num1=1, num2=1, num3=2) {
//     for (i=1; i<=num3; i++) {
//         a=num1*num2;
//         sum += a;
//     }
    
// }
//  mult();

//  console.log(sum); // 2

//12.Написать функцию, которая принимает 3 аргумента(каждый аргумент - 1 слово) 
//и возвращает строку с этими 3 словами, расположенными в алфавитном порядке.



// function getStr(name,two,three) {
//     return `${name} ${two} ${three}`;
// }
// getStr();

// console.log(getStr('слово','не','воробей'))

//13.  Дан массив с числами. Запишите в новый массив только те числа, 
//которые больше нуля и меньше 10-ти. 
//Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.

// function isNumberInRange (a) {
//     return(a > 0  && a < 10) 
//  }

//  let array = [6,78,9,43,-5,100];
//  let newArray = [];

//  for(i=0; i< array.length; i++) {
//      if(isNumberInRange(array[i])) {
//          newArray.push(array[i]);
//      }
//  }

//  console.log(newArray); // [ 6, 9 ]

// 14. Сделайте функцию getDigitsSum (digit - это цифра),
// которая параметром принимает целое число и возвращает сумму его цифр.

// let a = [];

// function getDigitsSum(a) {
//     for (i=0; i < a.lenght; i++) {
//         sum + = 
//     }
// }

// 15. Найдите все года от 1 до 2020, сумма цифр которых равна 13. 
//Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.




// 16.Сделайте функцию isEven() (even - это четный), 
//которая параметром принимает целое число и проверяет: четное оно или нет. 
//Если четное - пусть функция возвращает true, если нечетное - false.

// function isEven(a) {
//     if(a%2===0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// isEven();

// // console.log(isEven(5)); //false
// console.log(isEven(6)); //true

// 17. Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать 
//только четные из этих чисел. Для этого используйте вспомогательную функцию 
//isEven из предыдущей задачи.

// function isEven(a) {
//     return(a%2===0);
// }

//  let array = [6,77,9,43,-5,101];
//  let newArray = [];

//  for(i=0; i< array.length; i++) {
//      if(isEven(array[i])) {
//          newArray.push(array[i]);
//      }
//  }

//  console.log(newArray); // [ 6 ]

//  let array = [8,11,126,56,78,33,89,54];
//  let newArray = [];

//  for(i=0; i< array.length; i++) {
//      if(isEven(array[i])) {
//          newArray.push(array[i]);
//      }
//  }

//  console.log(newArray); // [ 8, 126, 56, 78, 54 ]

// 18.  Сделайте функцию getDivisors, которая параметром принимает число и возвращает 
//массив его делителей (чисел, на которое делится данное число без остатка).
// let array = [];

// function getDivisors(a) {

// for(i = 1; i <= a; i++) {
// if(a%i == 0) {
// array.push(i);
// }
// }
// return array;
// }

// console.log(getDivisors(27)); // [ 1, 3, 9, 27 ]

// 19.  Дан массив с числами. Выведите последовательно его элементы 
//используя рекурсию и не используя цикл.

// let array = [5,67,35,2,7];

// function sequence(array) {
// console.log((array[0]));
// array.splice(0,1);
// if(array.length > 0) {
// sequence(array);
// }
// }
// sequence(array);

// 20. Дано число. Сложите его цифры. Если сумма получилась более 9-ти,
// опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).


// let a = 129;

// function func(a) {
// let array = String(a).split('');
// let sum = 0;
// for(i = 0; i <array.length; i++) {
// sum += Number(array[i]);
// }
// if(sum > 9) {
// sum = func(sum);
// }
// return sum;
// }

// console.log(func(a));

gfbgf