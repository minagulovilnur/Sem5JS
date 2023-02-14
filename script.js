/*Задание 1
Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.*/

const numbers = {
  keyin1: 1,
  keyin2: 2,
  keyin3: 3,
  keyin4: 4,
  keyin5: 5,
  keyin6: 6,
  keyin7: 7,
};

const array = Object.values(numbers); //получение массива из объекта numbers
for (let i = 0; i < array.length; i++) {
  if (i >= 3) {
    console.log(`Значение подходящее под условие задачи это число  ${i}`);
  }
}

/*Задание 2
Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.*/

const post = {
  author: "John", // вывести этот текст
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: "Alex",
      text: "lorem ipsum",
      rating: {
        likes: 10,
        dislikes: 2, // вывести это число
      },
    },
    {
      userId: 5, // вывести это число
      userName: "Jane",
      text: "lorem ipsum 2", // вывести этот текст
      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
};

const author = Object.values(post.author);
console.log(`Автором является ${author} `);

const dislakes = Object.values(post.comments);
console.log(`Число дизлайков равняется ${dislakes[0].rating.dislikes}`);

const userId = Object.values(post.comments);
console.log(`Номер айди юзера равен  ${dislakes[1].userId}`);

const text = Object.values(post.comments);
console.log(`Текст юзера под номером 5 это ${dislakes[1].text}`);

/*Задание 3
Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.*/

const products1 = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];

console.log(
  `Цены до уменьшения - ${products1[0].price}, ${products1[1].price}, ${products1[2].price}`
);
 
const upPrice =  products1.forEach((item, index) => {
  return products1[index] = item.price * 0.85;
});

console.log(`Цены после уменьшения  -  ${products1}`);

/*Задание 4*/

const products = [
  {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg"],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: ["3.jpg"],
  },
  {
    id: 8,
    price: 78,
  },
];

/*1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.*/


const imageArr = products.filter(function(number) {
  return number.photos;
});
console.log (`Массивы продуктов в котором есть хотя бы одна фотография приведены ниже`); 
console.log (imageArr); 

/*2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.*/

const arrMinPrice = products.sort((a,b)=> a.price - b.price);
console.log (`Массивы с сортировкой по цене  от миниального к максимальному приведены ниже`); 
console.log(products);

/*
**Задание 5*
Дано 2 массива
Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.*/

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const newWeek = {};
for (let i = 0; i < en.length; i++) {
    newWeek[en[i]] = ru[i];
    
}

console.log(newWeek);