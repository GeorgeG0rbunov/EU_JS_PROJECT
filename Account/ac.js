let currentSlide = 0;

function changeSlide(direction) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

var arrLang = {
  'en': {
      'home': 'Home',
      'about': 'About AUT',
      'contact': 'Contact Us!',
      'skills': 'Abilities',
      'locs': 'Locations',
      'sign': 'Sign Up',
      'acc': 'Account',
      'join': 'Join Us!',
      'username': 'Username:',
      'password': 'Password:',
      'confirmPassword': 'Confirm Password:',
      'loginButton': 'Log In'
  },
  'ru': {
      'home': 'Домашняя',
      'about': 'Об AUT',
      'contact': 'Напишите нам!',
      'skills': 'Способности',
      'locs': 'Локации',
      'sign': 'Регистрация',
      'acc': 'Профиль',
      'join': 'Играть!',
      'username': 'Имя пользователя:',
      'password': 'Пароль:',
      'confirmPassword': 'Подтвердите пароль:',
      'loginButton': 'Войти'
  }
};

$(function() {
  $('.translate').click(function() {
      var lang = $(this).attr('id');

      $('.lang').each(function(index, item) {
          var key = $(this).attr('key');
          $(this).text(arrLang[lang][key]);
      });

      
      $('.joinbut1 a').text(arrLang[lang]['loginLink']);
  });
});

