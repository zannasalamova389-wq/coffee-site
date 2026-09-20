const orderButton = document.querySelector('#order');
const addButtons = document.querySelector('.add');
let cartCount = 0;
//Кнопка <<Заказать кофе
orderButton.addEventListener('click',< function(){
alert('Спасибо за заказ! Мы свяяжимся с вам.');
});
// Кнопки <<В корзину>>
addButtons.forEach(function(btn) {
btn.addEventListener('click', function() {
cartCount = cartCount +1;
btn.textContent = 'В корзине  ✔️ ';
btn.style.backgroundColor = '#4a2c1a';
alert('Товар в корзине: ' + cartCount);
});
});