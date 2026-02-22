const sampleData = {
    Month: "7月",
    Date: "21日",
    Payment: "CreditCard",
    price: 2000,
};
const sampleData2 = {
    Month: "7月",
    Date: "21日",
    Payment: "CreditCard",
    price: 1500,
};

const income = sampleData["price"];
const pay = sampleData2["price"];
const dif = income - pay;
document.querySelector(".income").textContent = income;
document.querySelector(".pay").textContent = pay;
document.querySelector(".dif").textContent = dif;

const test = document.querySelector(".list--genre--li");
const display = document.querySelector(".display");
test.addEventListener("mouseover", function () {
    display.classList.remove("hidden");
});
test.addEventListener("mouseleave", function () {
    display.classList.add("hidden");
});

const buttonTest = document.querySelector(".header__btn--prev");
buttonTest.addEventListener("click", function () {
    alert("6月");
});
const buttonTest2 = document.querySelector(".header__btn--next");
buttonTest2.addEventListener("click", function () {
    alert("8月");
});

const addGenreBtn = document.querySelector(".add-genre");
addGenreBtn.addEventListener("click", function () {
    const newGenre = prompt("あとでモ-ダルに変更");
    const addGenre = document.querySelector(".add-genre");
    addGenre.insertAdjacentHTML("beforebegin", `<li class="list--genre--li">${newGenre}</li>`);
});
