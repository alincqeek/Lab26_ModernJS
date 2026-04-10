// console.log("\n=== Денструризация массивов ====");
// const colors = ["red", "green", "blue"];
// const color1=colors[0];
// const color2=colors[1];
// console.log(color1,color2);
// const[firstColor,secondColor,thirdColor]=colors;
// console.log(firstColor,secondColor,thirdColor);

// const[primary,,tertiary]=colors;
// console.log(primary,tertiary);

// const [c1, c2, c3, c4 = "yellow"]=colors;
// console.log(c4); 

// const user = {
//   name: "Алиса",
//   age: 25,
//   city: "Москва",
// };

// const userName = user.name;
// const userAge = user.age;
// console.log(userName, userAge);


// const { name, age, city } = user;
// console.log(name, age, city);

// const { name: userName2, age: userAge2, city: userCity } = user;
// console.log(userName2, userAge2, userCity);

// function prrintUserOld(user){
//     console.log(`Имя: ${user.name}`);
//  console.log(`Возраст: ${user.age}`);
//   console.log(`Город: ${user.city}`);
// }
// prrintUserOld(user);   
// console.log();
// prrintUserOld(user);

// const product = {
//     name: "apple",
//     price: 4,
//     category: "fruits",
//     inStock: true,
// }

// const Name =product.name;
// console.log(Name);

// const { name, price, category, inStock} = product;
// console.log(name, price, category, inStock);

// const { name: Name, price: Price, category: Category, city: City } = product;
// console.log(Name,Price,Category,City)

// function printProduct(product) {
//     console.log(`Name: ${product.name}`);
//     console.log(`Price: ${product.price}`);
//     console.log(`Category: ${product.category}`);
//     console.log(`City: ${product.city}`);
// }
// printProduct(product);

// console.log("Spread для массивов");

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];


// const combined = [...arr1, ...arr2];
// console.log("Объединённый массив:", combined);

// const coppy = [...arr1,];
// console.log(coppy);
// const extended =[0, ...arr1,7,8];
// console.log(extended)

// const person={
//     name: "Иван",
//     age: 30,
// };

// const address={
//     city:"Санкт-Питербург",
//     street:"Невский проспект" ,
// };
// const fullInfo ={...person, ...address}
// console.log("Полная информация:",fullInfo)

// const personCopy = { ...person };
// console.log("Копия объекта:", personCopy);


// const updated = { ...person, age: 31, occupation: "Developer" };
// console.log("Обновлённый объект:", updated);

// function sum(...numbers){
//     return numbers.reduce((total,num) => total+num,0)
// ;}
// console.log("Сумма 1,2,3:", sum(1, 2, 3));
// console.log("Сумма 1,2,3,4,5:", sum(1, 2, 3, 4, 5));


// const numbers = [10, 20, 30, 40, 50];
// const [first, second, ...rest] = numbers;
// console.log("Первое число:", first);
// console.log("Второе число:", second);
// console.log("Остальные числа:", rest);


// const mas1 = [1, 2, 3];
// const mas2 = [4, 5, 6];
// const mas3 = [...mas1, ...mas2]
// function findMax(...rest) {
//     return rest.reduce((max, num) => rest.reduce((max, num) => {
//         return num > max ? num : max;
//     }, 0));
// }
// console.log(mas3)
// console.log(findMax(4,6,8,2))

// const obj1 = { name: "Иван", age: 30 };
// const obj2 = { city: "Москва", occupation: "Developer" };
// const mergedObj = { ...obj1, ...obj2 };
// console.log( mergedObj);

// import {greet,add,PI} from "./utils.js"
// console.log("Модули");
// console.log(greet("Алексей"));
// console.log("5+3=",add(5,3));
// console.log("Значение PI",PI );

// import {multiply as умножить} from "./utils.js";
// console.log("4*7=",умножить(4,7));

// import * as Utils from "./utils.js";
// console.log(Utils.greet("Мария"));
// console.log("Умножение: ",Utils.multiply(3 ,9));

// import * as Utils from "./math.js";
// console.log("4√7=",Utils.square(4,2));
// console.log("4**7=",Utils.cube(4,2));
// console.log("Значение E=",Utils.E );

// console.log("Промисы");
// const simplePromise=new Promise((resolve,reject)=>{
//     const success=true;
//     if (success){
//         resolve ("Операция выполнена успешно!") ;
//     }else{
//         reject("Произошла ошибка") ;
//     }
// })
// simplePromise
//     .then((result) => console.log("Результат:",result))
//     .catch((error) => console.log("Ошибка:", error));

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Прошло ${ms} миллисекунд`);
        }, ms);
    })
}
// delay(1000)
//     .then((message)=>console.log(message));

// function fetchUserData(userId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             if (userId >0){
//                 resolve({
//                    id:userId,
//                    name:"Иван Иванович",
//                    email:"ivan@example.com" ,
//                 });
//             }else{
//                 reject("Неверный ID пользователя")
//             }
//         }, 1500);
//     })
// }
// fetchUserData(1)
//     .then((user)=>console.log(user))
//     .catch((error)=>console.log(error));

// function step1() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Шаг 1 завершён"), 500);
//   });
// }

// function step2(previousResult) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(`${previousResult} -> Шаг 2 завершён`), 500);
//   });
// }

// function step3(previousResult) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(`${previousResult} -> Шаг 3 завершён`), 500);
//   });
// }


// step1()
//     .then((result1)=>step2(result1))
//     .then((result2)=>step3(result2))
//     .then((finalResult)=>consol.log("Финальный результат:", finalResult))
//     .catch((error)=>console.log("Ошибка",error))


// function checkInventory(product) {
//     return new Promise((resolve, reject) => {

//         const inventory = {
//             'laptop': 5,
//             'phone': 0,
//             'tablet': 3,
//             'headphones': 0
//         };
//         setTimeout(() => {
//             if (product in inventory){
//                 resolve (`Товар "${product}" есть в наличии`)
//             }
//             else{reject("Товар не найден")}
//         }, 1500);
//     })
// }

//  checkInventory(`phone`)
//         .then((product) => console.log(product)) 
//         .catch((noproduct) => console.log(noproduct)) 

// checkInventory(`phone1`)
//         .then((product) => console.log(product)) 
//         .catch((noproduct) => console.log(noproduct)) 



// console.log("Async/Await");

// async function greet() {
//   return "Привет!";
// }

// greet().then((message) => console.log(message));

// function getWeather() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ temp: 22, condition: "Солнечно" });
//         }, 1000);
//     });
// }

// async function showWeather() {
//     console.log("Загрузка погоды...");
//     const weather = await getWeather();
//     console.log(`Температура: ${weather.temp}°C, ${weather.condition}`);
// }
// showWeather()


// async function fetchData(shouldFail) {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             if (shouldFail) {
//                 reject("Ошибка при загрузке данных");
//             } else {
//                 resolve({
//                     data: "Выжные данные"
//                 });
//             }
//         },800);
//     })

// }

// async function getData() {
//     try {
//         const result = await fetchData(false);
//         console.log("Успешно:", result.data);

//         const failedResult = await fetchData(true);
//         console.log("Это не выполнится");
//     } catch (error) {
//         console.log("Поймана ошибка:", error);
//     }
// }
// getData()
// async function cookDinner() {
//     console.log("Начинаем готовить...");

//     const pasta = await delay(1000).then(() => "Паста готова");
//     console.log(pasta);

//     const sauce = await delay(500).then(() => "Соус готов");
//     console.log(sauce);

//     const salad = await delay(700).then(() => "Салат готов");
//     console.log(salad);

//     return "Ужин готов!";
// }
// cookDinner().then((result) => console.log(result));

// async function cookDinnerFast() {
//   console.log("Готовим всё одновременно...");

//   const [pasta, sauce, salad] = await Promise.all([
//     delay(1000).then(() => "Паста готова"),
//     delay(500).then(() => "Соус готов"),
//     delay(700).then(() => "Салат готов")
//   ]);

//   console.log(pasta, sauce, salad);
//   return "Ужин готов быстрее!";
// }

// cookDinnerFast().then((result) => console.log(result));



// async function processOrder(food) {
//     try {
//         console.log("Ожидайте...");
//         const mas = {
//             apple: 600,
//             carrot: 450,
//             potato: 300,
//             onion: 250
//         };

//         const [cost, product, order] = await Promise.all([
//             delay(1000).then(() => {
//                 if (food in mas) {
//                     return mas[food];
//                 } else {
//                     throw  Error;
//                 }
//             }),
//             delay(500).then(() => food),
//             delay(2000).then(() => `Заказ ${food} готов!`)
//         ]);

//         console.log(`Товар: ${product}`);
//         console.log(`Цена: ${cost}`);
//         console.log(order);

//         return { cost, product, order };

//     } catch (error) {
//         console.log("Ошибка");}
// }

// processOrder("apple");
// processOrder("burger");

// console.log("Fetch API");

// async function getUsers() {
//     try {
//         const response = await fetch(" http://www.cbr.ru/DailyInfoWebServ/DailyInfo.asmx");
//         if (!response.ok) {
//             throw new Error(`HTTP ошибка! Статус: ${response.status}`);
//         }

//         const users = await response.json();
//         console.log("Первые 3 пользователя:");
//         users.slice(0, 3).forEach((user) => {
//             console.log(`- ${user.name} (${user.email})`);
//         });
//     } catch (error) {
//         console.log("Ошибка при загрузке пользователей:", error.message);
//     }
// }
// getUsers();

// async function getUserById(id) {
//   try {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//     const user = await response.json();
//     console.log(`Пользователь #${id}:`);
//     console.log(user.name);
//     console.log(`Город: ${user.address.city}`);
//     console.log(`Компания: ${user.company.name}`);
//   } catch (error) {
//     console.log("Ошибка:", error.message);
//   }
// }

// getUserById(101);

// async function createPost() {
//   try {
//     const newPost = {
//       title: "Моя первая запись",
//       body: "Это содержание моей первой записи в блоге",
//       userId: 1,
//     };
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newPost),
//     });
//     const createdPost = await response.json();
//     console.log("Создана новая запись:");
//     console.log("ID:", createdPost.id);
//     console.log("Заголовок:", createdPost.title);
//   } catch (error) {
//     console.log("Ошибка при создании записи:", error.message);
//   }
// }

// createPost();

// console.log("Optional Chaining");
// const user1={
//     nme:"Андрей",
//     address:{
//         city:"Волжский",
//         street:"Пушкина",
//     },
// };
// const user2 = {
//     name:"Дмитрий",
// };
// const city = user2.address.city;

// const city1 = user2.address && user2.address.city;
// console.log("Город (старый способ): ", city1);
// const street = user1.address?.street;
// console.log("Улица: ", street);

// const admin = {
//   name: "Администратор",
//   permissions: {
//     canDelete: () => true,
//   },
// };

// const guest={
//     name:"Гость",
// };
// console.log("Админ может удалять?", admin.permissions?.canDelete?.());
// console.log("Гость может удалять?", guest.permissions?.canDelete?.());

// const company = {
//   name: "Tech Corp",
//   employees: [
//     { name: "Надежда", role: "Developer" },
//     { name: "Анна", role: "Designer" },
//   ],
// };

// const startup = {
//   name: "New Startup",
// };

// console.log("Первый сотрудник:", company.employees?.[0]?.name);
// console.log("Первый сотрудник стартапа:", startup.employees?.[0]?.name);

// const company = {
//     name: "Tech Corp",
//     employees: [
//         { name: "Надежда", role: "Developer" },
//         { name: "Анна", role: "Designer" },
//     ],
// };

// const startup = {
//     name: "New Startup",
// };

// console.log("Первый сотрудник:", company.employees?.[0]?.name);
// console.log("Первый сотрудник стартапа:", startup.employees?.[0]?.name);

// console.log("Nullish Coalescing");

// const value1 = 0;
// const value2 = "";
// const value3 = false;
// const value4 = null;
// const value5 = undefined;

// console.log('value1 || "default":', value1 || "default");
// console.log('value2 || "default":', value2 || "default");
// console.log('value3 || "default":', value3 || "default");
// console.log('value1 ?? "default":', value1 ?? "default");
// console.log('value2 ?? "default":', value2 ?? "default");
// console.log('value3 ?? "default":', value3 ?? "default");
// console.log('value4 ?? "default":', value4 ?? "default");
// console.log('value5 ?? "default":', value5 ?? "default");

// function displayUserSettings(settings) {
//   const theme = settings?.theme ?? "light";
//   const fontSize = settings?.fontSize ?? 14;
//   const notifications = settings?.notifications ?? true;

//   console.log("Настройки пользователя:");
//   console.log("Тема:", theme);
//   console.log("Размер шрифта:", fontSize);
//   console.log("Уведомления:", notifications);
// }

// displayUserSettings({ theme: "dark", fontSize: 16 });
// displayUserSettings({ notifications: false });
// displayUserSettings({});

// const apiResponse = {
//   data: {
//     user: {
//       profile: {
//         settings: {
//           language: "ru",
//         },
//       },
//     },
//   },
// };

// const language = apiResponse?.data?.user?.profile?.settings?.language ?? "en";
// console.log("Язык:", language);

// const emptyResponse = {};
// const defaultLanguage = emptyResponse?.data?.user?.profile?.settings?.language ?? "en";
// console.log("Язык по умолчанию:", defaultLanguage);

// const order = {
//     customer: {
//         name: "Иван",
//         shipping: {
//             payment: true,
//             cost: 1500
//         }
//     }
// };

// const optional = order?.customer?.shipping?.payment;
// const nullish = order?.customer?.shipping?.payment?.cost ?? false;

// console.log(optional);
// console.log(nullish);

// function displayOrder(data) {
//     console.log(`customer: ${data?.customer?.name ?? "неизвестно"}`);
//     console.log(`shipping: ${data?.customer?.shipping ?? "нет"}`);
//     console.log(`payment: ${data?.customer?.shipping?.payment ?? false}`);
// }

// displayOrder(order);