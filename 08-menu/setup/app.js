const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 39.99,
    img: "./images/item-10.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
];

const sectionCenter = document.querySelector(".section-center");
//console.log(sectionCenter);
const container = document.querySelector('.btn-container');
//const filterBtns = document.querySelectorAll(".filter-btn");
//console.log(filterBtns);

//load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});




function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    //console.log(item);
    return `<article class="menu-item">
    <img src="${item.img}" class="photo" alt="${item.title}">
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">${item.price}$</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
    </div>
  </article>`;
  });
  //После того, как сделали массив, каждый элемент которого содержит в себе outer html, теперь нужно, этот массив собрать в одну строку, чтобы потом вставить цельным куском в страницу.
  displayMenu = displayMenu.join("");
  //А теперь просто вставляем всю эту строку на страницу.
  sectionCenter.innerHTML = displayMenu;
  //console.log(displayMenu);
}

function displayMenuButtons(){
  const categories = menu.reduce(function(values, item){
    if (!values.includes(item.category)){
      values.push(item.category);
    }
    return values;
  },['all']);
  //console.log(categories);
  const categoryBtns = categories.map(function(category){
    return `<button type="button" class="filter-btn" data-id="${category}">${category}</button>`
  }).join('');
  //console.log(categoryBtns);
  container.innerHTML = categoryBtns;
  //переносим обращение к кнопкам после того, как мы их создадим на странице динмаически с помощью JS, если бы мы обращались к кнопкам до их создания, то получили бы undefined и ничего бы не работало. закомментированное обращение к кнопкам оставляю наверху в старом месте.
  const filterBtns = document.querySelectorAll(".filter-btn");

  // также функцию filter items нужно перенести сюда, потому что const filteBtns объявлена локально. и мы не смогли бы получить доступ к ней из вне.
  //filter items
  filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    //так как мне нужен кастомный идентификатор для моих фильтр-кнопок, то я устанавливаю его через data-... в файле html. а здесь я только обращаюсь к этому идентификатору
    //console.log(event.currentTarget.dataset.id);
    const category = event.currentTarget.dataset.id;
    const menuCategory = menu.filter(function (menuItem) {
      if (menuItem.category === category) {
        return menuItem;
      }
    });
    console.log(menuCategory);
    displayMenuItems(menuCategory);
    if (category === "all") {
      displayMenuItems(menu);
    } else {
      displayMenuItems(menuCategory);
    }
    });
  });
};