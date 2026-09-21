const orderButton = document.querySelector('#order');
const addButton = document.querySelectorAll('.add');
const cartCountSpan = document.querySelector('#cart-count');
let carCount = 0;
//Кнопка <<Заказать  кофе>>
orderButton.addEventListener('click', function() {
alert('Спасибо за заказ! Мы свяжемся с вами.');
});
//Кнопки <<В корзину>>
addButton.forEach(function(btn) {
btn.addEventListener('click', function() {
carCount = carCount + 1;
btn.textContent = 'В корзине ✔️';
btn.style.backgroundColor = '#4a2c1a';
btn.style.color = '#fff';
btn.disabled = true; // блокируем повторные  нажатия
cartCountSpan.textContent = carCount;
});
});
