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

    const pizzaNewPrice = pizzaNum - (pizzaNum * 0.2);
    pizzaNew.textContent = `${pizzaNewPrice.toLocaleString('ru-RU')} ₽ `;

    const pastaNewPrice = pastaNum - (pastaNum * 0.2);
    pastaNew.textContent = `${pastaNewPrice.toLocaleString('ru-RU')} ₽ `;

    const cakeNewPrice = cakeNum - (cakeNum * 0.2);
    cakeNew.textContent = `${cakeNewPrice.toLocaleString('ru-Ru')} ₽`;

    const saladNewPrice = saladNum - (saladNum * 0.2);
    saladNew.textContent = `${saladNewPrice} ₽`;

    let resultSum = newSum - (newSum * 0.2);
    sum.textContent =`${resultSum.toLocaleString('ru-RU')} ₽`;
});