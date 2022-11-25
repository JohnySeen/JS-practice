// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

//тут будем добавлять тоггл для отображения списка навигации при маленьком экране. 
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    // console.log(links.classList);
    // console.log(links.classList.contains('links'));
    //Попробуем сделать через if
    /*  if (links.classList.contains('show-links')) {
            links.classList.remove('show-links');
        } else {
            links.classList.add('show-links');
        }*/
    //А вот так это можно реализовать одной строчкой через метод .toggle()
    links.classList.toggle('show-links');
});

// Суть всей этой доработки в том, что на маленькой экране при клике на бургер-меню мы проверяем есть ли у links class='show-links'. Если он есть, то при клике на бургер-меню мы его убираем и меню сворачивается, кликнув еще раз на бургер-меню класс show-links добавляется и меню с навигацией разворачивается

// Важно, чтобы в media query в links учитывалась высота auto. можно посмотреть в стили. Если этого свойства не будет, то на большом экране навигация отображаться не будет.