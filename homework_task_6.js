// 1.Используя метод map() напишите код, который получает из массива строк 
//  новый массив, содержащий их длины.

// let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// const vegetableLength = vegetables.map(function(item, index, vegetablesArr) {
//  return item.length;
// });

// console.log(vegetableLength); // [ 7, 4, 7, 8 ]

// или
// const vegetableLength = vegetables.map(function(item) {
//  return item.length;
// });

// console.log(vegetableLength); // [ 7, 4, 7, 8 ]

// или
// const vegetableLength = vegetables.map(item => item.length);

// console.log(vegetableLength); // [ 7, 4, 7, 8 ]

// 2.Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите 
// функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором 
// на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.
// для numbers = [2, 3, 5, 7, 11, 13, 17]

// let numbers = [2, 3, 5, 7, 11, 13, 17, 19];
// let newArr = [];
//     function currentSums(numbers) {
//         numbers.reduce(function(sum, item) {
//             newArr.push(sum);
//             return sum + item;
//         });
//   return newArr;
// }

// console.log(currentSums(numbers)); // 
 // [
//    2,  5, 10, 17,
//   28, 41, 58
// ]

// 3.Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, 
// которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.

// let arr = [0, 1, 2, 3, 4, 5, 6, 7];
// const newArr = [];
// function sumSeven(arr, val) {
// for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j < arr.length; j++) {
//             if (arr[i] + arr[j] === val) {
//                 newArr.push([i,j])
//             }
//         }
//     }
//     return newArr;
// };

// console.log(sumSeven(arr, 7)); //[ [ 0, 7 ], [ 1, 6 ], [ 2, 5 ], [ 3, 4 ] ]


// 4.Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять 
// из первых букв слов строки str. 

// let str = "Каждый охотник желает знать, где сидит фазан."; 

//   let arr = str.split(' ');
// let newArr = [];

// function firstSing(str) {

//  for(let i = 0; i < arr.length; i++){
//       newArr.push(arr[i].charAt(0));
//   }
// return newArr;
// };

// console.log(firstSing(str));  
// [
//   'К', 'о', 'ж',
//   'з', 'г', 'с',
//   'ф'
// ]
//  или
// let str = "Каждый охотник желает знать, где сидит фазан."; 
// let arr = str.split(' ');
// let newArr = arr.map(function(item) {
//     return item[0];
// });
// console.log(newArr);  
// [
//   'К', 'о', 'ж',
//   'з', 'г', 'с',
//   'ф'
// ]

// 5.Перед вами переменная, содержащая строку. Напишите код, 
//создащий массив, который будет состоять из строк, состоящих из 
//предыдущего, текущего и следующего символа строки str. 








// 6.Напишите код, преобразующий массив цифр, которые располагаются 
//неупорядоченно, в массив цифр расположенных по убыванию их значений.

// let numerics = [5, 7, 2, 9, 3, 1, 8];
// numerics.sort(function(a, b) {
//   return a - b;
// });

//  console.log(numerics); // 
//  [
//   1, 2, 3, 5,
//   7, 8, 9
// ]

// let numerics = [5, 7, 2, 9, 3, 1, 8];
// 
// numerics.sort(function(a, b) {
//   return b - a;
// });

//  console.log(numerics); // 
 
// [
//   9, 8, 7, 5,
//   3, 2, 1
// ]

// 7.Напишите код, объединяющий три массива цифр, и располагающий 
//цифры, в полученном массиве, в порядке убывания их значений.

// let a = [1,2,3];
// let b = [4,5,6];
// c = [7,8,9];
// newArr = [];
// function getArr(a, b, c) {

// newArr = a.concat(b, c);
// newArr.reverse();
// return newArr;
// };


// console.log(getArr(a, b, c)); 
// [
//   9, 8, 7, 6, 5,
//   4, 3, 2, 1
// ]

// 8.Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. 
//Найдите сумму элементов этого массива. Массив, конечно же, может быть
// произвольным. Показать решение.

// let arr = [[1, 2, 3], [4, 5], [6]];
// let sum = 0;

// function getSum(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             sum+= arr[i][j];
//         }
//     }
//     return sum;
// };

// console.log(getSum(arr)); // 21

// 9.Дан трехмерный массив с числами, например 
//[[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. 
//Найдите сумму элементов этого массива. 
//Массив, конечно же, может быть произвольным.

// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let sum = 0;

// function getSum(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             for (let k = 0; k < arr[j].length; k++) {
//                 sum+= arr[i][j][k];
//             }
//         }
//     }
//     return sum;
// };

// console.log(getSum(arr)); // 36

// 10.Дан массив с числами. Не используя метода reverse 
//переверните его элементы в обратном порядке.

// let numerics = [5, 7, 2, 9, 3, 1, 8];

// let newArr = numerics.reduceRight((item,index) => {
//   item.push(index);
//   return item;
// }, []);

//  console.log(newArr);  
 
// [
//   8, 1, 3, 9,
//   2, 7, 5
// ]


// 11.Дан массив с числами. Узнайте сколько элементов с 
//начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
 

// let arr = [2, 1, 5, 1, 7, 1];
// sum = 0;
// num = 1;

// for (i = 0; i < arr.length; i++) {
//     sum += arr[i];
// if (sum < 10) {
//     num++;
// }
// }

// console.log(num); // 5


// 12.Сделайте функцию arrayFill, которая будет заполнять массив 
//заданными значениями. Первым параметром функция принимает 
//значение, которым заполнять массив, а вторым - сколько элементов
// должно быть в массиве. Пример: arrayFill('x', 5) сделает 
//массив ['x', 'x', 'x', 'x', 'x'].

// let newArr = [];
// function arrayFill(value, length) { 
// 	for (let i = 0; i < length; i++) {
// 		newArr.push(value);
// 	}
// 	return newArr;
// }

// console.log(arrayFill(7, 5)); // [ 7, 7, 7, 7, 7 ]
// console.log(arrayFill('ха', 5)); // [ 'ха', 'ха', 'ха', 'ха', 'ха' ]

// 13.Создайте объект и скопируйте данный объект с помощью:
// Object.assign() и spread оператора. Изменить любое свойство 
//в копии объекта, и проверить не изменился ли исходный.

// let user = { name: 'Andrey', age: 24, city: 'Rome' };

// let copyUser = Object.assign({}, user);

// console.log(copyUser); //{ name: 'Andrey', age: 24, city: 'Rome' }
// copyUser.age = 18;
// copyUser.name = 'Anna';
// console.log(user, copyUser);

//{ name: 'Andrey', age: 24, city: 'Rome' } { name: 'Anna', age: 18, city: 'Rome' }

// 14.Создайте функцию, которая принимает 1 аргумент - 
//объект пользователя user со свойствами name, age, city. 
//Функция должна возвращать новый объект пользователя с
// измененным полем name, при этом оригинальный объект user должен остаться неизменным.

//  let user = {
//   name: "Andrey",
//   age: 24,
//   city: "Rome",
//   };

// function getNewObj(user) {
//     let copyUser = Object.assign({}, user);
// copyUser.age = 18;
// copyUser.name = 'Anna';
// return copyUser;
// }
// console.log(user, getNewObj(user));
//   // { name: 'Andrey', age: 24, city: 'Rome' } 
//   // { name: 'Anna', age: 18, city: 'Rome' }

 
// 15.Написать функцию которая будет принимать n-ое
// количество аргументов, в качестве результата функция будет возвращать 
//сумму всех четных элементов. Для решения использовать цикл for (... of ...). 

// let sum = 0;
// function getSum(... argN) {
//   for (let arg of argN) {
//       if (arg%2 ===0) {
//     sum += arg;
//       }
//   }
//   return sum;
// }

// console.log(getSum(5,6,3,2)); //8
// console.log(getSum(8,1,3,2)); //10

// 16.Написать функцию, которая принимает слово и возвращает true,
// если слово является палиндромом.
// let str = "ОНО"

// let isPalindrome = function (str) {
//     if (str == str.split('').reverse().join('')) {
//         return true;
//     }
   
// }

//  console.log(isPalindrome(str)); //true

//17.Написать функцию которая будет принимать два массива, и в качестве
// результата будет возвращать только те значения которые есть и в первом и во втором массиве.

// let a = [3, 2, 6, 5, 4, 9, 8];
// let b = [7, 2, 4, 9, 1, 5, 8];
// let val = [];

// function getComparison(a,b) {
//     for (let i = 0; i < a.length; i++) {
// 		if(inArray(a[i], b)) {
// 			val.push(a[i]);
// 		}
// 	}

// 	return val;
// };

// console.log(getComparison(a,b)); // 
