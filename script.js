// Инициализируем AOS
AOS.init();




// scrollToTopBtn

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = 'block';
      scrollToTopBtn.classList.add('active');
    } else {
      scrollToTopBtn.style.display = 'none';
      scrollToTopBtn.classList.remove('active');
    }
  });

  scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });




  


// search-icon

document.getElementById('search-icon').addEventListener('click', function () {
  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  const items = document.querySelectorAll('.header__item a');

  // Если поле поиска пустое, ничего не делаем
  if (!searchTerm) return;

  // Фильтруем элементы на основе введенного текста
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      item.parentElement.style.fontWeight = 'bold'; // Можно выделить найденный элемент
    } else {
      item.parentElement.style.fontWeight = 'normal'; // Можно сделать обычным
    }
  });
});