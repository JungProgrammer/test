let box = document.querySelector(".box"),
    btn = document.querySelector(".btn");

let width = box.offsetWidth,
    height = box.scrollHeight;

btn.addEventListener('click', function() {
    //box.scrollBy(0, 100); //на 100 пикселей вниз
    box.scrollTo(0,100); //на 100 пиксель по y
});

console.log(width);
console.log(height);
console.log(box.getBoundingClientRect());
console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);
console.log(document.documentElement.scrollTop);