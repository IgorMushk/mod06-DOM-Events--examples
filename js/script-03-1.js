// https://www.youtube.com/watch?v=iAAtYwGp_II&t=2470s

/*
 * - Событие submit
 * - Действия браузера по умолчанию
 * - Свойство elements
 * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

const form = document.querySelector(".js-register-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  //
  console.log(event.currentTarget.elements);
  console.log(event.currentTarget.elements.email.value);
  console.log(event.currentTarget.elements.password.value);
  console.log(event.currentTarget.elements.subscription.value);
  //
  const formData = new FormData(event.currentTarget);

  console.log(formData);

  formData.forEach((value, name) => {
    console.log("onFormSubmit -> name", name);
    console.log("onFormSubmit -> value", value);
  });
}
