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
      'join': 'Join us!',
      
      
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

      
  }
};

$(function() {
  $('.translate').click(function() {
      var lang = $(this).attr('id');
      console.log("Language selected: " + lang); 

      $('.lang').each(function(index, item) {
          var key = $(this).attr('key');
          console.log("Key: " + key + ", Value: " + arrLang[lang][key]); 
          $(this).text(arrLang[lang][key]);
      });

      
  });
});

