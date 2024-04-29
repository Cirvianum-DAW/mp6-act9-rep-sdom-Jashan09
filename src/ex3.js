

let hola = document.querySelector("ul:nth-of-type(2)");

let firstOg = hola.querySelector("li:first-child");
let lastOg = hola.querySelector("li:nth-of-type(3)");

firstOg.textContent = lastOg.textContent;