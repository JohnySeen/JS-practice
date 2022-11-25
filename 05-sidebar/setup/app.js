//Для появления боковой панели по нажатию на кнопку бургер-меню, нам всего навсего нужно сделать следующее: найти кнопку бургер-меню, повешать на нее слушатель события клик и по клику добавить нашей боковой панели класс .show-sidebar, который уже стилизован в css
const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', function(){
    //Долгий путь через if
    // if (sidebar.classList.contains('show-sidebar')){
    //     sidebar.classList.remove('show-sidebar');
    // } else {
    //     sidebar.classList.add('show-sidebar');
    // };
    //быстрый путь через toggle
    sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar');
});