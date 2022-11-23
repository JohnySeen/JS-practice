//Устанавлиаем начальное значение count
let count = 0;

// выбираем value и все buttons
const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');

//Вместо того, чтобы вешать слушатель события на каждую кнопку отдельно, QuerySelectorAll выберет нам все кнопки с классом .btn
//а потом пройдемся по Nodelist методом forEach и навесим слушатель события "клик"
// 1 вариант с кучей if

buttons.forEach(function(button) {
    button.addEventListener('click', function(element) {
       const styles = element.currentTarget.classList;
       if (styles.contains('decrease')) {
        count--;
       }
       else if (styles.contains('increase')) {
        count++;
       } 
       else {
        count = 0;
       }
       if (count > 0) {
        document.body.style.backgroundColor = 'green';
       } 
       else if (count < 0) {
        document.body.style.backgroundColor = 'red';
       }
       else document.body.style.backgroundColor = 'white';
       value.textContent = count;
    });
});


// 2 вариант через switch case не рабочий, потому что для case нужны точные значения а у меня диапазон

/*buttons.forEach(function (button){
    button.addEventListener('click', function (element){
        const styles = element.currentTarget.classList;
        if (styles.contains('decrease')) {
        count--;
       }
       else if (styles.contains('increase')) {
        count++;
       } 
       else {
        count = 0;
       };
        value.textContent = count;
        switch (count) {
            case  > 0:
                value.style.color = 'green';
                break;
            case  < 0:
                value.style.color = 'red';
                break;
            case count = 0: 
                value.style.color = 'black';
                break;
        };
    });
});
*/