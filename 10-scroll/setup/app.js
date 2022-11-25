// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    //linksContainer.classList.toggle('show-links'); - такой способ доваольно простой и судя по css он установит высоту для блока со ссылками равную 200px. но это значение статичное, а значит плохо. попробуем высчитывать высоту для этого блока автоматически и всегда корректно вне зависимости от количества ссылок.
    const containerHeight = linksContainer.getBoundingClientRect().height;
    console.log(containerHeight);
    const linksHeight = links.getBoundingClientRect().height;
    console.log(linksHeight);
    
    if (containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = `0px`;
    }
});

// ********** fixed navbar ************
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset; 
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    };

    if (scrollHeight > 500){
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
});
// ********** smooth scroll ************
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
    link.addEventListener('click', function(event){
        //Так как у ссылок уже был функционал, то нам нужно его сначала обнулить, а потом мы пропишем новый функицонал
        event.preventDefault();
        //прописываем новый функционал
        //1 перемещаемся в конкретное место страницы
        const id = event.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        //Считаем точную высоту, на которую нужно проскролить экран, чтобы попасть к нужному элементу
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-nav');
        //теперь используем метод offsetTop(), чтобы узнать точное местоположение в пикселях от верха до нужного нам элемента на стрнице
        let position = element.offsetTop - navHeight;
        if (!fixedNav){
            position = position - navHeight;
        };
        //поднастраиваем место куда скроллить на узком жкране. число 82 - это высота нашего navbar на мелких экранах
        if (navHeight > 82){
            position = position + containerHeight;
        }
        //используем метод ScrollTo() чтобы нас подвинуло к нашему элементу
        window.scrollTo({
            left: 0,
            top: position
        });
        linksContainer.style.height = 0;
    });
});
// select links