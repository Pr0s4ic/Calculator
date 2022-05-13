const button1 = document.querySelector(".b1");
const button2 = document.querySelector(".b2");
const button3 = document.querySelector(".b3");
const button4 = document.querySelector(".b4");
const button5 = document.querySelector(".b5");
const button6 = document.querySelector(".b6");
const button7 = document.querySelector(".b7");
const button8 = document.querySelector(".b8");
const button9 = document.querySelector(".b9");
const button0 = document.querySelector(".b0");

const initial = document.querySelector(".initial");
let initVal = [];

button1.addEventListener("click", function() {
    printNum(1);
});

button2.addEventListener("click", function() {
    printNum(2);
});

button3.addEventListener("click", function() {
    printNum(3);
});

button4.addEventListener("click", function() {
    printNum(4);
});

button5.addEventListener("click", function() {
    printNum(5);
});

button6.addEventListener("click", function() {
    printNum(6);
});

button7.addEventListener("click", function() {
    printNum(7);
});

button8.addEventListener("click", function() {
    printNum(8);
});

button9.addEventListener("click", function() {
    printNum(9);
});

button0.addEventListener("click", function() {
    printNum(0);
})

function printNum(num) {
    initVal.push(num);
    initial.textContent = (initVal.join(""));
};