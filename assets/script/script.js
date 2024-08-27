const pizza = document.querySelector('.main__backet_section-pizza');
const pasta = document.querySelector('.main__backet_section-pasta');
const cake = document.querySelector('.main__backet_section-cake');
const salad = document.querySelector('.main__backet_section-salad');

const pizzaNum = Number(document.getElementById('pizza').textContent);
const pastaNum = Number(document.getElementById('pasta').textContent);
const cakeNum = Number(document.getElementById('cake').textContent);
const saladNum = Number(document.getElementById('salad').textContent);
const sum = document.querySelector('.main__backet_price-sum');


const newSum = pizzaNum + pastaNum + cakeNum + saladNum;
sum.textContent = `${newSum.toLocaleString('ru-RU')} ₽`;

const pizzaNew = document.getElementById('pizzaNew');
const pastaNew = document.getElementById('pastaNew');
const cakeNew = document.getElementById('cakeNew');
const saladNew = document.getElementById('saladNew');

const btn = document.getElementById('button');
btn.addEventListener('click',function(e) {
    pizza.classList.add('sale');
    pasta.classList.add('sale');
    cake.classList.add('sale');
    salad.classList.add('sale');

    const discount = 0.2;

    function calculateDiscountedPrice(price, discount) {
        return price - (price * discount);
    }

    const pizzaNewPrice = calculateDiscountedPrice(pizzaNum, discount);
    pizzaNew.textContent = `${pizzaNewPrice.toLocaleString('ru-RU')} ₽ `;

    const pastaNewPrice = calculateDiscountedPrice(pastaNum, discount);
    pastaNew.textContent = `${pastaNewPrice.toLocaleString('ru-RU')} ₽ `;

    const cakeNewPrice = calculateDiscountedPrice(cakeNum, discount);
    cakeNew.textContent = `${cakeNewPrice.toLocaleString('ru-Ru')} ₽`;

    const saladNewPrice = calculateDiscountedPrice(saladNum, discount);
    saladNew.textContent = `${saladNewPrice.toLocaleString('ru-Ru')} ₽`;

    let resultSum = newSum - (newSum * discount);
    sum.textContent =`${resultSum.toLocaleString('ru-RU')} ₽`;
});