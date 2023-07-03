// https://www.youtube.com/watch?v=LkdSS8maogM&t=6990s

// Створити модальне вікно яке буде відкриватися при кліку на кнопку всередині тега body.
// Модальне вікно має закриватися при кліку на напівпрозорий оверлей, та на іконку хрестика всередині модалки

// Додати в модалку логіку закриття при натисканні на кнопку Escape

// Створити форму реєстрації користувача за допомогою js де буде 2 поля
// Поле логіна
// Поле пароль
// Захаркодити вірні логін і пароль в константах
// Додати логіку сабміта форми, при сабміті перевіряємо введені логін і пароль.
// Якщо логін і пароль співпадають - видаляємо форму з документа і показуємо h2  з написом “Вхід успішний”
// Якщо логі і пароль не співпадають з даними з констант в пункті 3с
// - показуємо під формою помилку червоним кольором “Логін або пароль не вірні”

const modalTemplate = `
<div class="modal hidden">
    <div class="modal__content">
    <span class="modal__close">X</span>
    <h3>Authorization</h3>
    <form name="modal-form">
        <label>
          Login
          <input type="text" name="login" placeholder="Enter Login" />
        </label>
        <label>
          Password
          <input type="text" name="password" placeholder="Enter Password" />
        </label>
        <button type="submit">Sign In</button>
    </form>
    </div>
 </div>`;

document.body.insertAdjacentHTML("beforeend", modalTemplate);

const modalElement = document.querySelector(".modal");
const showButtonElemet = document.querySelector(".show");
const containerElement = document.querySelector(".modal__content");
const closeElement = document.querySelector(".modal__close");
const formElement = document.querySelector("form");
showButtonElemet.addEventListener("click", openModal);
const validLogin = "events";
const validPassword = "secret";

function subscribeListeners() {
  modalElement.addEventListener("click", closeModal);
  closeElement.addEventListener("click", closeModal);
  containerElement.addEventListener("click", stop);
  document.addEventListener("keyup", checkClose);
  formElement.addEventListener("submit", validateForm);
}

function unsubscribeListeners() {
  modalElement.removeEventListener("click", closeModal);
  containerElement.removeEventListener("click", stop);
  closeElement.removeEventListener("click", closeModal);
  document.removeEventListener("keyup", checkClose);
  formElement.removeEventListener("submit", validateForm);
}

function validateForm(event) {
  //console.log(event.currentTarget.elements);
  event.preventDefault();
  const { login, password } = event.currentTarget.elements;
  if (login.value === validLogin && password.value === validPassword) {
    const titleElement = document.createElement("h2");
    titleElement.textContent = "Lofgn Success!";
    formElement.remove();
    containerElement.append(titleElement);
  } else {
    const errorElement = formElement.querySelector(".error");
    if (errorElement) return;
    const errorTemplate = `<div class="error">Login or Password is incorrect! Try again.</div>`;
    const formButtonElement = formElement.querySelector("button");
    formButtonElement.insertAdjacentHTML("beforebegin", errorTemplate);
  }
}

function checkClose(event) {
  console.log(event.code);
  if (event.code === "Escape") closeModal();
}

function stop(event) {
  event.stopPropagation();
}

function openModal() {
  modalElement.classList.remove("hidden");
  // Подписаться на прослущшивани при открытиии модального окна
  subscribeListeners();
}

function closeModal() {
  // Отписаться от прослущшивания при закрытии модального окна
  unsubscribeListeners();
  modalElement.classList.add("hidden");
}
