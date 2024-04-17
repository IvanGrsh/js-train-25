// function loadFile(filename) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //   console.log("2222");
//       resolve(`Вміст файлу ${filename}`);
//     }, 2000);
//   });
// }

// function convertFile(content) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Конвертований вміст: ${content.toUpperCase()}`);
//     }, 1000);
//   });
// }

// function saveFile(convertedContent) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //   console.log("saveFile");
//       reject("Error test");
//       //   resolve();
//     }, 1500);
//   });
// }

// function sendFileToClient() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //   console.log("sendFileToClient");

//       reject("Error test2");
//       //   resolve();
//     }, 500);
//   });
// }

// function getInfoFromFile(file) {
//   //   console.log(file, 1111);

//   return Promise.resolve(file + 100);
//   //   return file;
// }

// async function performFile(path) {
//   const content = await loadFile(path);

//   return [
//     async () => {
//       const data = await convertFile(content);

//       return [
//         async () => {
//           const convertedContent = await getInfoFromFile(data);

//           await saveFile(convertedContent);

//           await sendFileToClient();
//         },
//         data,
//       ];
//     },
//     content,
//   ];
// }

// async function main() {
//   const [next, content] = await performFile("file.png");
//   console.log(next, content);

//   /////////////

//   await next();
// }

// main();

// // performFile("file.png").then(([next, content]) => console.log(next, content));

///================================================================
// function* myGenerator() {
//   console.log("Start");

//   yield 1;
//   console.log("Start 2");

//   yield 2;
//   console.log("Start 3");

//   yield 3;

//   console.log("End");

//   return 4;
// }

// const generator = myGenerator();

// const result1 = generator.next();
// console.log(result1);

// const result2 = generator.next();
// console.log(result2);

// const result3 = generator.next();
// console.log(result3);

// const result4 = generator.next();
// console.log(result4);

///================================================================

// function* processOrder(order) {
//   yield validateOrder(order);
//   yield processPayment(order);
//   yield sendOrderConfirmation(order);

//   return order;
// }

// function getOrderDetails() {
//   const order = { id: 123, product: "Tovar", quantity: 2 };
//   return order;
// }

// function validateOrder(order) {
//   const isValid = order.quantity > 0;
//   return isValid;
// }

// function processPayment(order) {
//   const isPaymentSuccessful = Math.random() < 0.5;
//   return isPaymentSuccessful;
// }

// function sendOrderConfirmation() {
//   const isConfirmationSent = true;
//   return isConfirmationSent;
// }

// //=================================

// const order = { id: 123, product: "Tovar", quantity: 2 };

// const orderProcessing = processOrder(order);

// //=================================

// const isValidateOrder = orderProcessing.next().value;
// if (isValidateOrder === false) {
// }

// //=================================

// const isProcessPayment = orderProcessing.next();
// if (isProcessPayment === false) {
// }

// //=================================

// // console.log(orderProcessing.next().value);
// console.log(orderProcessing.next());
// console.log(orderProcessing.next());
// console.log(orderProcessing.next());

///==========================================================================
// console.log("================================================================");

// function* generatorFunction() {
//   yield "First value";
//   yield "Second value";
//   return 3;
// }

// const generator = generatorFunction();

// for (let value of generator) {
//   console.log(value);
// }

///==========================================================================
// console.log("================================================================");

// function* generatorOne() {
//   yield "1  1";
//   yield "1  2";
// }

// function* generatorTwo() {
//   yield* generatorOne();
//   yield "2  1";
//   yield "2  2";
// }

// const generator = generatorTwo();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

///==========================================================================
// console.log("================================================================");

// function* myGenerator() {
//   try {
//     //   yield 1;

//     const test = yield 1;
//     console.log("test", test);
//     //   return 10;

//     const value = yield 2;

//     yield 3;

//     yield value;
//   } catch (e) {
//     // console.log(e);

//     yield 1000;

//     yield 2000;

//     yield 3000;

//     yield 4000;
//   } finally {
//     yield 5000;
//   }
//   yield 6000;

//   yield 7000;
// }

// const generator = myGenerator();

// console.log(generator.next().value);

// // console.log(generator.return(100));
// console.log(generator.throw(new Error()));

// // console.log(generator.next().value);
// console.log(generator.next(4).value);
// console.log(generator.next(4).value);
// console.log(generator.next().value);

///==========================================================================
// console.log("================================================================");

// const asyncFunc = () => new Promise((resolve) => setTimeout(resolve, 1000));
// async function* asyncGenerator() {
//   await asyncFunc();
//   yield "After 1 second";
//   await asyncFunc();
//   yield "After 2 seconds";
// }

// async function runGenerator() {
//   const generator = asyncGenerator();

//   for await (const result of generator) {
//     console.log(result);

//     await asyncFunc();
//   }

//   //   let result = null;
//   //   result = await generator.next();
//   //   console.log(result);

//   //   result = await generator.next();

//   //   result.value;

//   //   console.log(result);

//   //   console.log(await generator.next().value);
//   //   console.log(await generator.next().value);
// }
// runGenerator();

///==========================================================================
console.log("================================================================");

function fetchDataFromServer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.7) {
        resolve("Діні успішно завантажені");
      } else {
        reject("Помилка завантаження даних");
      }
    }, 1000);
  });
}

function convertData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const convertedData = data.toUpperCase();
      resolve(convertedData);
    }, 500);
  });
}

async function* fetchData() {
  try {
    const result = await fetchDataFromServer();
    yield "pending";
    const convertedData = await convertData(result);
    yield "success";
    return convertedData;
  } catch (error) {
    yield "error";
  }
}

(async () => {
  const generator = fetchData();

  console.log(await generator.next());

  console.log(await generator.next());

  console.log(await generator.next());
})();
