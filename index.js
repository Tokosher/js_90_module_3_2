// const user = {
//     email: '123@gmail.com',
//     age: 20
// }

// const { email: userEmail } = user;
// console.log(number);

// function foo ({ username } = {  }) {
//     console.log(username);
// }

// foo();

// ******************************Деструктуризація масива***************************************\\
// const arr = [1, 2, 3, 4, 5];

// const firstElement = arr[0];
// const secondElement = arr[1];
// const thirdElement = arr[2];
// console.log(firstElement, secondElement, thirdElement);

// const [ first, second, third ] = arr;
// console.log(first, second, third);
// console.log(arr)



// ******************************Деструктуризація об'єкта***************************************\\
// const user = {
//     name: 'Test name',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }

// const { skills, name } = user;
// console.log(skills);
// console.log(name);




// ************************Глибока деструктуризація об'єкта***************************************\\

// const user = {
//     name: 'Test name',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }

// const { skills: { html, css, js } } = user; // const { html, css, js } = user.skills;
// console.log(html);
// console.log(css);
// console.log(js);




// *************************Деструктуризація об'єкта в циклі***********************************\\

// const users = [{ name: 'Kate' }, { name: 'Alex' }, { name: 'Mark' }];


// ********Без деструктуризації*******
// const names = [];

// for (const user of users) {
//     console.log(user)
//     names.push(user.name)
// }

// console.log(names);



// ********З деструктуризацією*********
// const names = [];

// for (const { name } of users) {
//     names.push(name)
// }

// console.log(names);








// *************************Операція rest та spread********************************\\

// const numbers = [1, 2, 3];
// const copy = [...numbers]; //spread
// console.log(numbers);
// console.log(copy);
// console.log(numbers === copy)


// const numbers = [1, 2, 3, 4];
// const [...args] = numbers; // rest
// console.log(first);
// console.log(second);
// console.log(args);



// ************Операція rest та spread в функціях********************************\\

// 1
// const numbers = [1, 2, 3];

// function foo (...params) { //rest
//     console.log(params)
// }
// foo(...numbers)// spread



// 2
// const names = ['Alice', 'Kate', 'Emma'];

// function foo(first, second, third) {
//     console.log('first', first);
//     console.log('second', second);
//     console.log('third', third);
// }


// foo(...names) // foo('Alice', 'Kate', 'Emma')// spread




// 3
// function foo(first, second, third, fourth, ...args) { //rest
//     console.log(second);
//     console.log(fourth);
//     console.log(args);
// }

// foo('Alice', 'Kate', 'Emma', 'Mia', 'Lily')




// 4
// const user = {
//     name: 'Test name',
//     age: 22,
//     city: 'Lviv',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }

// const { name, age, ...userData } = user;
// console.log(name, age);
// console.log(userData)



// function foo({ name, age, ...userData }) {
//     console.log(name);
//     console.log(age);
//     console.log(userData);
// }

// foo(user)


// const firstObject = { A: 1, B: 2 };

// const secondObject = { A: 3, C: 4 };

// const thirdObject = {
//     A: 5, // { A: 5 }
//     ...firstObject, // { A: 1, B:2 }
//     ...secondObject, // { A: 3, C: 4, B: 2 }
//     C: 6 // { A: 3, C: 6, B: 2 }
// }

// console.log(thirdObject)


// Task - 1 - Деструктуризація
// Деструктуризуй об'єкт таким чином щоб отримати значення name, surname, username

// const user = {
//     id: 1,
//     username: 'harry_potter',
//     profile: {
//       name: 'Harry',
//       surname: 'Potter',
//       age: 25
//     }
//   };

// // Деструктуризація об'єкта для отримання окремих змінних
// const { username, profile: { name, surname } } = user;


// // Виведення отриманих значень
// console.log(`Ім'я користувача: ${name}`);
// console.log(`Прізвище користувача: ${surname}`);
// console.log(`Ім'я користувача (за нікнеймом): ${username}`);





// Task - 2 Деструктуризація
// Допиши функцію таким чином щоб кожна властивість об'єкта product була незалежним параметром

// const product = {
//     name: 'Smart TV',
//     price: 25000,
//     category: 'Electronics',
//     details: {
//       brand: 'Samsung',
//       color: 'Black',
//       weight: '15.5'
//     }
//   };

// function displayProductInfo({ 
//     name, 
//     price, 
//     category,
//     details: { 
//         brand: tvBrand,
//         color,
//         weight
//      }
// }) {
//     console.log(`Назва товару: ${name}`);
//     console.log(`Ціна: ${price} грн`);
//     console.log(`Категорія: ${category}`);
//     console.log('Деталі:');
//     console.log(`- Бренд: ${tvBrand}`);
//     console.log(`- Колір: ${color}`);
//     console.log(`- Вага: ${weight} кг`);
// }

// displayProductInfo(product);





// Task - 3 - Операція rest
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.

// function transformUsername({ firstName, lastName, ...userData }) {
//     const fullName = `${firstName} ${lastName}`;

//     return {
//         fullName, // fullName: fullName
//         ...userData
//     }
// }

// console.log(
//     transformUsername({
//         id: 1,
//         firstName: 'Jacob',
//         lastName: 'Mercer',
//         email: 'j.mercer@mail.com',
//         friendCount: 40,
//     }),
// );


// console.log(
//     transformUsername({
//         id: 2,
//         firstName: 'Adrian',
//         lastName: 'Cross',
//         email: 'a.cross@hotmail.com',
//         friendCount: 20,
//     }),
// );


// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Dragon breath", price: 780 },
//       { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//       return this.potions;
//     },
//     addPotion(newPotion) {
//     //   if (this.potions.includes(newPotion)) {
//     //     return `Error! Potion ${newPotion} is already in your inventory!`;
//     //   }

//     for (const { name } of this.potions) {
//         if (name === newPotion.name) {
//             return `Error! Potion ${name} is already in your inventory!`;
//         }
//     }
  
//       this.potions.push(newPotion);
//     },
//     removePotion(potionName) {
//       for (let i = 0; i < this.potions.length; i++) {
//         const name = this.potions[i].name;

//         if (name === potionName) {
//           this.potions.splice(i, 1);
//           return;
//         }
//       }

//       return `Potion ${potionName} is not in inventory!`

//       // const potionIndex = this.potions.indexOf(potionName);
  
//       // if (potionIndex === -1) {
//       //   return `Potion ${potionName} is not in inventory!`;
//       // }
  
//       // this.potions.splice(potionIndex, 1);
//     },
//     updatePotionName(oldName, newName) {
//       const potionIndex = this.potions.indexOf(oldName);
  
//       if (potionIndex === -1) {
//         return `Potion ${oldName} is not in inventory!`;
//       }
  
//       this.potions.splice(potionIndex, 1, newName);
//     },
//     // Change code above this line
//   };

//   // console.log(atTheOldToad.getPotions());
//   // console.log(atTheOldToad.addPotion({ name: "Speed potion", price: 460 }));
//   // console.log(atTheOldToad.getPotions());

//   console.log(atTheOldToad.getPotions());
//   console.log(atTheOldToad.removePotion("Stone skin"));
//   console.log(atTheOldToad.getPotions());