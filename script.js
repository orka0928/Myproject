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
const monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let curMonth = new Date().getMonth() + 1;

const income = sampleData["price"];
const pay = sampleData2["price"];
const dif = income - pay;

document.querySelector(".income").textContent = income;
document.querySelector(".pay").textContent = pay;
document.querySelector(".dif").textContent = dif;
document.querySelector(".header__month").textContent = `${curMonth}月`;

const nextMonth = document.querySelector(".header__btn--next");

nextMonth.addEventListener("click", () => {
    let nxtMon = (curMonth += 1);
    if (nxtMon === 13) {
        nxtMon = 1;
    }
    curMonth = nxtMon;
    document.querySelector(".header__month").textContent = `${curMonth}月`;
});
const prevMonth = document.querySelector(".header__btn--prev");

prevMonth.addEventListener("click", () => {
    let prvMon = (curMonth -= 1);
    if (prvMon === 0) {
        prvMon = 12;
    }
    curMonth = prvMon;
    document.querySelector(".header__month").textContent = `${curMonth}月`;
});

const test = document.querySelector(".list--genre--li");
const display = document.querySelector(".display");
test.addEventListener("mouseover", function () {
    display.classList.remove("hidden");
});
test.addEventListener("mouseleave", function () {
    display.classList.add("hidden");
});

// const buttonTest = document.querySelector(".header__btn--prev");
// buttonTest.addEventListener("click", function () {
//     alert("6月");
// });
// const buttonTest2 = document.querySelector(".header__btn--next");
// buttonTest2.addEventListener("click", function () {
//     alert("8月");
// });

const addGenreBtn = document.querySelector(".add-genre");
addGenreBtn.addEventListener("click", function () {
    const newGenre = prompt("あとでモ-ダルに変更");
    const addGenre = document.querySelector(".add-genre");
    addGenre.insertAdjacentHTML("beforebegin", `<li class="list--genre--li">${newGenre}</li>`);
});
