//Тут решаем двумя разными способами задачку. Нам нужно по клику открывать ответ на вопрос. При повторном клике на кнопку в этом же вопросе сворачивает текст ответа. При нажатии на другой вопрос(его кнопку) предыдущий ответ сворачивается.
//1 using selectors inside the element тут фишка в том, что я не обращаюсь каждый раз к document., чтобы найти какой-то элемент на странице, а я могу обращаться уже к questions. или item. и уже внутри них что-то делать.

const questions = document.querySelectorAll('.question');
questions.forEach(function(question){
    const button = question.querySelector('.question-btn');
    button.addEventListener('click', function(){
        //А вот этот кусок кода поможет мне скрывать неактивные ответы на вопросы. item & question это по сути одно и то же 
        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove('show-text');
            }
        });
        question.classList.toggle('show-text');
    });
    
});

//2 traversing the dom а тут фишка в том, что мы можем подняться до родителя-родителя элемента применив метод .parentElement.parentElement два раза. Также можно было бы сделать и с sibling

// const buttons = document.querySelectorAll(".question-btn");
// buttons.forEach(function (but) {
//   but.addEventListener("click", function (event) {
//     const question = event.currentTarget.parentElement.parentElement;
//     console.log(question);
//     question.classList.toggle('show-text');
//   });
// });