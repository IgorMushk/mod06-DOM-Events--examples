// https://www.youtube.com/watch?v=LvMpu9DDwOE&t=827s
//
// Если изначально делать текст обрезанный с ..., то генерим страницу на JS с изнчально обрезанным текстом
// const arr = [
//     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo autem deserunt incidunt pariatur sint assumenda id dolore quibusdam, quod at quos nisi culpa nesciunt mollitia libero magnam voluptatibus harum possimus architecto reprehenderit vero ad. Numquam consequatur perspiciatis magni sit omnis id accusantium, minus dolore eum! Nisi esse ipsam officiis ipsa.',
//     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo autem deserunt incidunt pariatur sint assumenda id dolore quibusdam, quod at quos nisi culpa nesciunt mollitia libero magnam voluptatibus harum possimus architecto reprehenderit vero ad.',
//     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo autem deserunt incidunt pariatur sint assumenda id dolore quibusdam, quod .'
// ]

const title = document.querySelector(".js-title");
const title1 = document.querySelector(".js-title1");
const title2 = document.querySelector(".js-title2");

const maxLength = 50;
const totalLength = maxLength + 4;
console.dir(title);

// const str = title.textContent.slice(0, 50);
// console.log(str);
// const remainder = title.textContent.slice(50);
// console.log(remainder);

title.addEventListener("click", onClick);
title1.addEventListener("click", onClick);
title2.addEventListener("click", onClick);

function onClick(evt) {
  const title = evt.currentTarget;
  const str = title.textContent.slice(0, maxLength);

  if (title.textContent.length > totalLength) {
    //const str = evt.currentTarget.textContent.slice(0, 50);
    //const remainder = evt.currentTarget.textContent.slice(50);
    const remainder = title.textContent.slice(maxLength);

    title.setAttribute("data-title", remainder);
    title.textContent = str + " ...";
  } else {
    const remainder = title.dataset.title;
    title.textContent = str + remainder;
    //getAttribute
    //console.log(remainder);

    //if (remainder) {
    title.textContent = str + remainder;
    //}
  }

  //   console.dir(remainder);
  //   console.log(remainder);
}
