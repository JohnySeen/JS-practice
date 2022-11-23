const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// сложный цвет будет состоять из #_ _ _ _ _ _
const btn = document.getElementById('btn');
const colors = document.querySelector('.color');
console.log(color);

btn.addEventListener('click', function(){
    let hexColor = '#';
    for (let i = 0; i < 6; i++ ) {
        hexColor += hex[getRandomNumber()];
    }
    console.log(hexColor);
    color.innerHTML = hexColor;
    document.body.style.backgroundColor = hexColor;
    console.log('new color is:' + hexColor);
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
};
