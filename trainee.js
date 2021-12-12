//чтобы импортировать модуль, запишем в переменную и сразу деструктризируем, вызовем require,  в скобках путь к файлу
// const { getCurrentDate } = require("./dateUtils");
// global.testData = "123";
// console.log(`get current date function result: ${getCurrentDate()}`);
// console.log(global.testData);

//смотрим переменное окружение, в него можно добавлять свои переменные
// console.log(process.env);

//показывает с какими аргументами в командной строке было запущено приложение, можно добавлять параметры через --имя значение
// console.log(process.argv);

//нужно завершить выполнение приложения
// process.exit();

//указывает директорию и название файла, в котором находится проект соответственно
// console.log(__dirname);
// console.log(__filename);

// подключаем библиотеку, например, calc-js
// const Calc = require("calc-js").Calc;

// console.log(process.argv);
//игнорируем первые два параметра, т.к. это первичные аргументы node, index, потом передаем свои, например а и b
// const [, , a, b] = process.argv; //передается как строка, нужно сделать парс в число ParseInt, or ParseFloat если десятичное

// console.log(new Calc(parseInt(a)).sum(parseInt(b)).finish());
//============================================================================================================
//Работа с модулями
// Подключение модуля path
// const path = require("path");
// console.log(path.resolve("dateUtils.js"));
//============================================================================================================
//Работа с файлами
// Подключение
// const fs = require("fs");
// //работает через коллбек
// fs.readFile("./data.txt", "utf8", (error, data) => {
//   if (error) {
//     console.error(error);
//   }
//   console.log(data);
// });
//============================================================================================================
// //работа с промисами
const fs = require("fs").promises;
const path = require("path");

// fs.readFile(path.resolve("./data.txt"), "utf8")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error;
//   });

// console.log(123);
// создадим обертку
// (async () => {
//   const data = await fs.readFile(path.resolve("./data.txt"), "utf8");
//   console.log(data);
// })();
(async () => {
  try {
    const data = await fs.readFile(path.resolve("./data1.txt"), "utf8");
    console.log(data);
    const newContent = `${data} school`;
    // await fs.writeFile("./data1.txt", newContent, "utf8");
    // await fs.rename("./dateUtilsNewName.js", "./tmp/dateUtilsNewName.js");
    // console.log(await fs.readdir("./tmp"));
    // await fs.unlink("./tmp/dateUtilsNewName.js");
    fs.appendFile("./data1.txt", " lecture", "utf8");
  } catch (err) {
    console.error(err);
  }
})();
