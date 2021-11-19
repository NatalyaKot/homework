// console.log("кот" > "код");
// console.log("2"+2*"2");
// console.log(undefined == null);
// console.log(undefined === null);
// console.log(null == 0);
// console.log(2>"3");
// console.log(null - false + true);
// console.log(1/"l");
// console.log("2" * "3");
// console.log(4+5+"O");
// console.log("l"+4+5);
// console.log("4"-2);
// console.log("4"-"4x");
// console.log(null == false);
// console.log("-4"/0+1);
// console.log(null+1);
// console.log(undefined + null);

// const a = 3;

// if (a===3) {
//    console.log("a===3"); 
// } else if(a==4) {
//     console.log("a==4"); 
// } else if(a==5) {
//     console.log("a==5"); 
// } else {
//     console.log("Я не знаю чему равно а"); 
// }

// const a = 1;

// const result = a > 3 ? 'a > 3' : 'a <= 3';
// console.log(result); 



// let result;
// if (a > 3) {
//    result = "a > 3"; 
// } else {
//     result = "a <= 3"; 
// } 
//     console.log(result); 

// console.log('кот' > 'код'); 


// const user = {
//     role: "user",
//     name: "Natalya"
// };

// const role = "manager";

// switch(role) {
//     case "user": {
//         console.log("Вам разрешено доступ в личный кабинет");
//         break;
//     }
//     case "manager": {
//         console.log("Вам разрешено доступ в панель контента");
//         break;
//     }
//     case "admin": {
//         console.log("Вам разрешено доступ в админку");
//         break;
//     }
//     default: {
// console.log("авторизируйтесь");
//     }
// }


// const temp = 40;

// if(temp < -30) {
//         console.log("Оставайтесь дома");
//     } else if(temp <=-10) {
//         console.log("Сегодня холодно");
//     } else if(temp <=5) {
//         console.log("Не холодно");
//     } else if(temp <=15) {
//         console.log("Тепло");
//     } else if(temp <=25){
//         console.log("Очень тепло");
//     } else {
//         console.log("Жарко");
//     }


// const l1 = 6;
// const l2 = 35;
// const l3 = 11;

// if(l1> l2 && l1 > l3) {
//     console.log("Первый отрезок самый длинный");
// } else if (l2> l1 && l2 > l3) {
//     console.log("второйотрезок самый длинный");
// }    else {
//         console.log("третий отрезок самый длинный");
//     }


// const b = 6;

// if(b < 0 || b === 6) {
//  console.log("!!!!!");
// }

// // Вывести строку

// let n=5;
// let string = "Строка, которую нужно повторить";

// for(let i = 0; i < n; i++) {
//     console.log(string);
// }

// let totalCount = 10;
// let minimumCount = 1;
// let day = 0;

// for(; totalCount > minimumCount; day++) {
//     totalCount = parseInt(totalCount / 2);
//     console.log(totalCount, minimumCount);
// }

// console.log(day);

let iterationCount = 0;
let current = 1800;
let end = 2021;

for (; current <= end; current++) {
    iterationCount++;
    if(current === 1961) {
        console.log(iterationCount);
    }
}