// Поведение страницы: мобильное меню, плавная прокрутка и кнопка «наверх»

// 1. МОБИЛЬНОЕ МЕНЮ: открываем и закрываем список ссылок
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

// При нажатии на бургер добавляем или убираем класс open
menuBtn.addEventListener('click', function () {
  nav.classList.toggle('open');
});

// Когда человек нажимает на ссылку в меню, меню закрывается
nav.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    nav.classList.remove('open');
  });
});

// 2. КНОПКА «НАВЕРХ»: показываем, когда прокрутили вниз больше 300 пикселей
const toTop = document.getElementById('toTop');

window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    toTop.classList.add('show');
  } else {
    toTop.classList.remove('show');
  }
});

// По нажатию плавно возвращаем страницу наверх
toTop.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
