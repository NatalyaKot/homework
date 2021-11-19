// Работа с if-else-------------------------------------------

// -------1---------------------

// let a = 1; //Неверно
// let a = 0; //Верно
// let a = -3; //Неверно

// if(a === 0) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }   

// -------2---------------------

// let a = 1; //Верно
// let a = 0; //Неверно
// let a = -3; //Неверно

// if(a > 0) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }   

// -------3---------------------

// let a = 1; //Неверно
// let a = 0; //Неверно
// let a = -3; //Верно

// if(a < 0) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }  

// -------4---------------------

// let a = 1; //Неверно
// let a = 0; //Верно
// let a = -3; //Верно

// if(a <= 0) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// } 

// -------5---------------------

// let a = 1; //Верно
// let a = 0; //Верно
// let a = -3; //Неверно

// if(a >= 0) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// } 

// -------6---------------------

// let a = 1; //Верно
// let a = 0; //Неерно
// let a = -3; //Верно

// if(a != 0) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// } 

// -------7---------------------

// let a = 'test'; //Верно
// let a = 'тест'; //Верно
// let a = 3; //Неверно

// if(a === 'test') {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// } 

// -------8---------------------

// let a = '1'; //Верно
// let a = 1; //Неверно
// let a = 3; //Неверно

// if(a === '1') {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// } 

// Работа с логическими переменными---------------------------------

// -------1---------------------

// var test = true; //"Верно"
// var test = false; //"Неверно"
// if (test == true) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }

// // Сокращенный вариант
// if (test) console.log("Верно");
// else console.log("Неверно");

// -------2---------------------

// var test = true; //"Неверно"
// var test = false; //"Верно"
// if (test != true) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }

// // Сокращенный вариант
// if (!test) console.log("Верно");
// else console.log("Неверно");

// Работа с && (и) и || (или) -----------------------------------------------------------

// -------1---------------------

// let a = 5; //Неврно
// let a = 0; //Неверно
// let a = -3; //Неверно
// let a = 2; //Верно

// if(a > 0 && a < 5) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// } 

// -------2---------------------

// let a = 5; // 0.5
// let a = 0; // 7
// let a = -3; // -0.3
// let a = 2; // 9

// if(a === 0 || a == 2) {
//     console.log(a+7);
// } else {
//     console.log(a/10);
// }

// -------3---------------------

// let a = 1; 
// let b = 3; // 4
// let a = 0; 
// let b = 6; // 6
// let a = 3; 
// let b = 5; // -2

// if(a <= 1 && b >= 3) {
//     console.log(a+b);
// } else {
//     console.log(a-b);
// }

// -------4---------------------

// let a = 1; 
// let b = 3; // Неверно

// let a = 3; 
// let b = 5; // Верно

// let a = 1; 
// let b = 10; // Верно

// if(a > 2 && a < 11 || b >= 6 && b < 14) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// } 


// На switch-case------------------------------------------------------------

// var num = 5; // Ошибка
// var num = 1; // Зима
// var num = 3; // Лето
// var num = 2; // Весна

// switch (num) {
//     case 1: {
//     result = 'зима';
//     break; }
    
//     case 2: {
//     result = 'весна';
//     break; }
    
//     case 3: {
//     result = 'лето';
//     break; }
    
//     case 4: {
//     result = 'осень';
//     break; }
    
//     default: {
//     result = 'Ошибка';
//     break;
//     }
// }
// console.log(result); 

//Общие задачи-------------------------------------------------------------------

// -------1---------------------

// var day = 8; //'первая декада'
// var day = 17; //'вторая декада'
// var day = 23;//'третья декада'

// if (day >= 1 && day <= 10) {
//     console.log('первая декада');
// } else if (day >= 11 && day <= 20) {
//     console.log('вторая декада');
// } else if (day >= 21 && day <= 31) {
//     console.log('третья декада');
// }
// else {console.log('Ошибка');}

// -------2---------------------

//  var month= 8; // лето
// var month = 0; // ошибка
// var month = 23;// ошибка
// var month = 12; //зима
// var month = 1; //зима
// var month = 3; //весна
// var month = 10;//осень

// if (month == 1 || month == 2 || month == 12 ) {
//     console.log('зима');
// } else if (month >= 3 && month <= 5 ) {
//     console.log('весна');
// } else if (month >= 6 && month <= 8 ) {
//     console.log('лето');
// }
// else if (month >= 9 && month <= 11 ) {
//     console.log('осень');
// }
// else {console.log('Ошибка');}


// -------3---------------------


// for (i = 1; i < 101; i++) {
//     if( i%3==0 && i%5==0) {console.log('FizzBuzz');}
//     else if( i%5==0) {console.log('Buzz');}
//     else if( i%3==0) {console.log('Fizz');}
//     else {console.log(i);}
// }
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// 31
// 32
// Fizz
// 34
// Buzz
// Fizz
// 37
// 38
// Fizz
// Buzz
// 41
// Fizz
// 43
// 44
// FizzBuzz
// 46
// 47
// Fizz
// 49
// Buzz
// Fizz
// 52
// 53
// Fizz
// Buzz
// 56
// Fizz
// 58
// 59
// FizzBuzz
// 61
// 62
// Fizz
// 64
// Buzz
// Fizz
// 67
// 68
// Fizz
// Buzz
// 71
// Fizz
// 73
// 74
// FizzBuzz
// 76
// 77
// Fizz
// 79
// Buzz
// Fizz
// 82
// 83
// Fizz
// Buzz
// 86
// Fizz
// 88
// 89
// FizzBuzz
// 91
// 92
// Fizz
// 94
// Buzz
// Fizz
// 97
// 98
// Fizz
// Buzz


// -------4---------------------

// let str = 'abcde'; // Да
//     if (str[0] == 'a') {
//     console.log('Да');
//     } else {
//     console.log('Нет');
//     }

    // let str = 'bbbbcde'; // Нет
    // if (str[0] == 'a') {
    // console.log('Да');
    // } else {
    // console.log('Нет');
    // }

// -------5---------------------

// let str = '12345'; // Да
//     if (str[0] == '1' || str[0] == '2' || str[0] == '3') {
//     console.log('Да');
//     } else {
//     console.log('Нет');
//     }

    // let str = '9712345';// Нет
    // if (str[0] == '1' || str[0] == '2' || str[0] == '3') {
    // console.log('Да');
    // } else {
    // console.log('Нет');
    // }

// -------6---------------------

// let str = '971' // 17
// let sum = Number(str[0]) + Number(str[1]) + Number(str[2]);
// console.log(sum);

// -------7---------------------


// let str = '971678'; // нет
// let str1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
// let str2 = Number(str[3]) + Number(str[4]) + Number(str[5]);
// if (str1 == str2) {
// console.log('Да');
// } else {
// console.log('Нет');
// }

// let str = '154046'; // да
// let str1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
// let str2 = Number(str[3]) + Number(str[4]) + Number(str[5]);
// if (str1 == str2) {
// console.log('Да');
// } else {
// console.log('Нет');
// }
