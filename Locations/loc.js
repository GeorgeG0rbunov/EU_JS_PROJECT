$(document).ready(function() {
    $('.ch_item').click(function() {
        var index = $(this).index(); 
        var images = [
            '../images/center1.jpg',
            '../images/the_port.webp',
            '../images/the_field.webp',
            '../images/the_colosseum.webp',
            '../images/devils_palm.webp'
        ];
        var texts = [
            "Center City is the main location where you can find the most important NPCs, craft abilities, take quests, roll skins and other stuff.",
            "The Port is an area introduced in Update 2.6 of the New Universe. It replaces the once prominent beach. This new port however is home to the Hooligans. As well as the Ferry Captain, who allows you to travel to the 2 different islands in the map, mainly being The Colosseum and the Joestar Manor.",
            "The Soccer Field is an area that is located by the bike park and is a special pvp area in game where all traits and buffs are disabled. By the Soccer Field lies the NPCs Johnny Joestar (NPC) and Bartholomew Kuma. The Johnny Joestar NPC has been disabled due to Tusk being disabled and removed from the game due to a likely rework, and the Kuma NPC allows you to teleport to 3 One Piece themed islands if you have Kumas Bible in your inventory.",
            "The Colosseum is a medium island accessible through the Ferry Captain and choosing to travel to The Colosseum. This location is the natural spawning point of Diavolo.",
            "The Devils Palm is a small desert located past the soccer field at the outskirts of the desert on the left by Alabasta. It is the spawn locations of the various Sand Debris used to obtain the Corpse Parts. Be careful, as this place slowly damages and can kill the player over time."
        ];

        
        $('.main-content img').attr('src', images[index]);
        $('.main-content p').text(texts[index]);
    });
});


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




