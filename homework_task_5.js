// 1. Удаление указанного количества символов из строки
// Напишите функцию delete_characters(str, length), которая возвращает подстроку, 
//состоящую из указанного количества символов.

// let str = 'Каждый охотник желает знать';


// function delete_characters(str, length) {
  
//   };
// console.log(delete_characters(str));



// 2. Вставить тире между словами строки
// Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и вставляет 
// тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.

// let str = "HTML JavaScript PHP";

// function insert_dash(str) {
//      for (let i = 0; i < str.length; i++) {
//   return str.replaceAll(" ", "-").toUpperCase(); 
//      }
// };

// console.log(insert_dash(str)); //HTML-JAVASCRIPT PHP

// let str = "HTML JavaScript PHP";
// let re = ' ';
// let result = str.match(re);
// for (let i = 0; i < result.length; i++) {
  
//   str = str.replace(" ", "-");
  
// }
// console.log(str.replace(" ", "-").toUpperCase()); //HTML-JAVASCRIPT-PHP
// 3. Сделать первую букву строки прописной
// Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа 
// строки из нижнего регистра в верхний.

// let str = "string not starting with capital";  

// function cursive_letter(str) {

//     return (str.charAt(0).toUpperCase()+str.slice(1));
// };
// console.log(cursive_letter(str)); //String not starting with capital



// 4. Первая буква каждого слова заглавнаяНапишите функцию capitalize(str), которая возвращает 
//строку, в которой каждое слово начинается с заглавной буквы.

// let str = "каждый охотник желает знать";  
//  let arr = str.split(' ');
// let newarr = [];

// function capitalize(str) {

//  for(let x = 0; x < arr.length; x++){
//       newarr.push(arr[x].charAt(0).toUpperCase()+arr[x].slice(1));
//   }
//   return newarr.join(' ');
// };
// console.log(capitalize(str)); //Каждый Охотник Желает Знать



// 5. Смена регистра символов строки
// Напишите функцию change_register(str), которая принимает в качестве аргумента строку и и заменяет 
// регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

// let str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";  
//  let str2= '';
// function change_register(str) {
//     for (var i = 0; i < str.length; i++) {
//         if (str.charAt(i) === str.charAt(i).toLowerCase()) {
//             str2 += str.charAt(i).toUpperCase();
//         } else if (str.charAt(i) === str.charAt(i).toUpperCase()) {
//             str2 += str.charAt(i).toLowerCase()
//         } else {
//             str2 += str.charAt(i);
//         }
//     }
    
// };

// change_register(str);
// console.log(str2); //кАжДыЙ оХоТнИк ЖеЛаЕт ЗнАтЬ


// 6. Удалить все не буквенно-цифровые символы
// Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.


// let str = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";  

// function remove_char(str) {
//  return (str.replace(/[^A-Za-z0-9]/g, ''));

// };

// console.log(remove_char(str)); //everyhunterwishestoknow



// 7. Нулевое заполнение строки
// Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение 
// с дополнительным знаком «+» или « -« в зависимости от передаваемого аргумента.


// function zeros (num, len) {
//     ...ваш код...
// };


// function truncate(str, maxlength) {
//   return (str.length > maxlength) ?
//     str.slice(0, maxlength - 1) + '…' : str;
// }
// 8. Сравнение строк без учёта регистра
// Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.

// let str1 = 'rhYhHbH';
// let str2 = 'RhyHhBH';

// function comparison(str1, str2) {
//     return (str1.toUpperCase() === str2.toUpperCase());
// };


// console.log(comparison(str1, str2)); //true 

// let str1 = 'jgkjlknkl';
// let str2 = 'RhyHhBH';

// function comparison(str1, str2) {
//     return (str1.toUpperCase() === str2.toUpperCase());
// };


// console.log(comparison(str1, str2)); //false

// 9. Поиск без учета регистра
// Напишите функцию insensitive_search(str1, str2), которая осуществляет 
//поиск подстроки str2 в строкеstr1 без учёта регистра символов.

// let str1 = 'Напишите функцию insensitive_search(str1, str2), которая осуществляет' 

// let str2 = 'существляет';

// function insensitive_search(str1, str2) {
//     str1.toUpperCase() === str2.toUpperCase();
//     return (str1.search(str2));
// };
// console.log(insensitive_search(str1, str2)); //58

// 10. ВерблюжийРегистр (CamelCase)
// Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, 
// при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.

// let str = "hEllo world";
// let arr = str.split(' ');
// let newarr = [];

// function initCap(str) {

//  for(let x = 0; x < arr.length; x++){
    
//       newarr.push(arr[x].charAt(0).toUpperCase()+arr[x].slice(1).toLowerCase());
//   }
//   return newarr.join('');
// };


// console.log(initCap(str)); //HelloWorld


// 11. Змеиный_регистр (snake_case)
// Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase 
// в snake_case, при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.

// let str = "HelloWorld";
// let str2 = [];
// function initSnake(str) {
//    str2=str.split(/ |\B(?=[A-Z])/);
//    return (str2.join('_').toLowerCase());
// };
// console.log(initSnake(str)); //hello_world

// 12. Повторить строку n раз
// Напишите функцию repeatStr(str, n), которая вовращает строку повторяемую определённое количество раз.
// let str = "HelloWorld";
// function repeatStr(str, n) { 
//     return (str.repeat(n));
// };
// console.log(repeatStr(str, 5)); //HelloWorldHelloWorldHelloWorldHelloWorldHelloWorld


// 13. Получить имя файла
// Напишите функцию path(pathname), которая вовращает имя файла (подстрока после последнего символа "\" )
// из полного пути к файлу.

// let pathname = "/home/user/dir/file.txt";
// let slovo = "file.txt";
// function path(pathname) { 
//     return (pathname.lastIndexOf(slovo));
// };
// console.log(path(pathname)); //15

// let pathname = "/home/user/dir/file.txt";
// let slovo = "file.txt";
// function path(pathname) { 
    
// };
// console.log(path(pathname)); 

// 14. Заканчивается ли строка символами другой строки
// Создайте метод объекта String endsWith(), который сравнивает подстроку str1 с окончанием исходной 
//строки str  и определяет заканчивается ли строка символами подстроки.

// var str = "Каждый охотник желает знать"; 
// var str1 = "скрипт";
// var str2 = "знать";

// String.prototype.endsWith = function(substring) {
//     ...ваш код...
// };
// 15. Подстрока до/после указанного символа
// Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, расположенную после или до указанного 
// символа char в зависимости от параметра pos.

// var str = 'Астрономия — Наука о небесных телах';

// function getSubstr(str, char, pos) {
//     ...ваш код...
// };

// 16. Вставить подстроку в указанную позицию строки
// Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указханную позицию pos строки str. 
// По умолчанию подстрока вставляется в начало строки.

// function insert(str, substr, pos) {
//     ...ваш код...
// };

// 17. Ограничить длину строки
// Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n. 
// Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.

// function limitStr(str, n, symb) {
//     ...ваш код...
// };

// 18. Поделить строку на фрагменты
// function cutString(str, n) {
//     ...ваш код...
// };

// 19. Количество вхождений символа в строке
// Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.

// var symb = "о", str = "Астрономия это наука о небесных объектах";
// function count(str, symb) {
//     ...ваш код...
// };

// 20. Удалить лишние пробелы из строки
// Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.

// var str = "    Max is a good      boy     "; 

// function strip(str) {
//     ...ваш код...
// };




// 21. Удалить лишние слова из строки
// Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.

// var str = "Сила тяжести приложена к центру масс тела"; 

// function cutString(str, n) {
//     ...ваш код...
// };


// 22. Сортировка символов строки по алфавиту
// Напишите функцию alphabetize(str), которая возвращает строку, отсортировав её символы в алфавитном порядке.

// function alphabetize(str) {
//     ...ваш код...
// };


// 23. Найти слово в строке
// Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.

// var str = 'abc def ghi jkl mno pqr stu';

// function findWord(word, str) {
//     ...ваш код...
// };

// 24. Преобразовать строку в массив слов
// Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

// var str = 'Каждый охотник желает знать';
// function stringToarray(str) {

// // Ваш код

// };

// var arr = stringToarray(str);

// 25. Реализовать объект Создать объект с начальным полем title. Добавить поле с ключом description начальным значением строкой. 
// Добавить метод addField, который при вызове добавляет новое поле в объект с переданным именем и значением addField(fieldName, value),
//  добавить метод editField(fieldName, value), который меняет указанное свойство объекта. Добавить метод удаление 
//  свойства deleteField(fieldName), удаляющий указанное поле. Добавить и изменить поля с помощью этих методов.

// 26.Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
// 27.Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей 
// задачи.
// 28.Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным 
// числом (9 и менее).
