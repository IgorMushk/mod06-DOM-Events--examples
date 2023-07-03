// https://www.youtube.com/watch?v=LvMpu9DDwOE&t=6435s

const cars = [
  {
    id: 1,
    car: "Honda",
    type: "Civic",
    price: 12000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
  },
  {
    id: 2,
    car: "Audi",
    type: "Q7",
    price: 40000,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
  },
  {
    id: 33,
    car: "BMW",
    type: "5 siries",
    price: 9000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
  },
  {
    id: 3,
    car: "Honda",
    type: "Accord",
    price: 20000,
    number: "+380000000000",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
  },
  {
    id: 4,
    car: "Volvo",
    type: "XC60",
    price: 7000,
    img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
  },
];

const list = document.querySelector(".js-list");
//console.log(list);
const favoriteList = document.querySelector(".js-favorite-list");

const form = document.querySelector(".js-search-form");

form.addEventListener("submit", onSearch);

// Для добавдения в избранные
list.addEventListener("click", onclick);

function createMarkup(arr) {
  return arr
    .map(
      ({ id, car, type, price, img }) => `
      <li data-id="${id}">
        <img src="${img}" alt="${car}" width="480" />
        <div class="js-favorite">★</div>
        <h2>${car}</h2>
        <h3>${type}</h3>
        <p>${price}</p>
      </li>`
    )
    .join("");
}

// const markup = cars
//   .map(
//     ({ id, car, type, price, img }) => `
//     <li data-id="${id}">
//       <img src="${img}" alt="${car}" width="480" />
//       <h2>${car}</h2>
//       <h3>${type}</h3>
//       <p>${price}</p>
//     </li>`
//   )
//   .join("");

//console.log(markup);

//list.insertAdjacentHTML("beforeend", markup);
list.insertAdjacentHTML("beforeend", createMarkup(cars));

function onSearch(evt) {
  evt.preventDefault();
  const form = evt.currentTarget;
  //console.log(form);
  //console.dir(form);
  const { query, select } = form.elements;
  //console.dir(query.value);
  //console.dir(select.value);

  // const searchCars = cars.filter((item) => {
  //   console.log("item[select.value]:", item[select.value]);
  //   console.log("query.value :", query.value);
  //   item[select.value] === query.value;
  // });

  const searchCars = cars.filter((item) => item[select.value].toLowerCase() === query.value.trim().toLowerCase());
  //console.log(searchCars);

  list.innerHTML = createMarkup(searchCars);
}

// !!!
// item[select.value] -- car / type
// . . . . . . . . . . . . . . . . . . .
//  <select name="select">
//    <option value="car">Марка</option>
//    <option value="type">Модль</option>
//  </select>;

function onclick(evt) {
  //console.log(evt.currentTarget);
  //console.log(evt.target);
  if (evt.target.classList.contains("js-favorite")) {
    console.log(evt.target);
    //const id = evt.target.closest("li");
    //console.log(id);
    const { id } = evt.target.closest("li").dataset;
    console.log(id);

    evt.target.classList.add("js-favorite-active");

    //const currentCar = cars.find(({ id: carId }) => carId === Number(id)).car;
    const { car, type } = cars.find(({ id: carId }) => carId === Number(id));
    // Проблема с названием - диструктуризируем и переименовівем id в carId
    //console.log("Выбранный автомобиль:", currentCar);
    //addFavorite(currentCar);
    addFavorite(`${car} ${type}`);
  }

  function addFavorite(currentCar) {
    favoriteList.insertAdjacentHTML("beforeend", `<li>${currentCar}<li/>`);
  }
}
