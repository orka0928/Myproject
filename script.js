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
const prevMonth = document.querySelector(".header__btn--prev");

// const moveMonth = function (query) {
//     let month = curMonth;
//     if (query === nextMonth) {
//         month += 1;
//         if (month >= 13) {
//             month = 1;
//         }
//     } else if (query === prevMonth) {
//         month -= 1;
//         if (month <= 0) {
//             month = 12;
//         }
//     }
//     curMonth = month;
//     document.querySelector(".header__month").textContent = `${curMonth}月`;
// };

const moveMonth = function (num) {
    curMonth += num;
    if (curMonth > 12) {
        curMonth = 1;
    } else if (curMonth < 1) {
        curMonth = 12;
    }
    document.querySelector(".header__month").textContent = `${curMonth}月`;
};

nextMonth.addEventListener("click", () => {
    moveMonth(1);
});
prevMonth.addEventListener("click", () => {
    moveMonth(-1);
});

const test = document.querySelector(".list--genre--li");
const display = document.querySelector(".display");
test.addEventListener("mouseover", function () {
    display.classList.remove("hidden");
});
test.addEventListener("mouseleave", function () {
    display.classList.add("hidden");
});

const addGenreBtn = document.querySelector(".add-genre");
addGenreBtn.addEventListener("click", function () {
    const newGenre = prompt("あとでモ-ダルに変更");
    const addGenre = document.querySelector(".add-genre");
    addGenre.insertAdjacentHTML("beforebegin", `<li class="list--genre--li">${newGenre}</li>`);
});
