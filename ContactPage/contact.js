const chatContainer = document.getElementById('chat-container');
    const userInput = document.getElementById('user-input');
    function botResponse(message) {
        const botMessage = document.createElement('div');
        botMessage.classList.add('message', 'bot-message');
        botMessage.innerHTML = `<p>${message}</p>`;
        chatContainer.appendChild(botMessage);
        chatContainer.scrollTop = chatContainer.scrollHeight; 
    }
    function userMessage(message) {
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'user-message');
        userMessage.innerHTML = `<p>${message}</p>`;
        chatContainer.appendChild(userMessage);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
    function sendMessage() {
        const message = userInput.value.trim();
        if (message !== '') {
            userMessage(message);
            userInput.value = ''; 
            
            setTimeout(() => {
                botResponse(generateBotResponse(message));
            }, 1000);
        }
    }
    function generateBotResponse(message) {
        const responses = [
            "Is that the first time you see this problem?",
            "Try enabling 'fast' gamemode!",
            "Please be patient, the game is under the maintance.",
            "We know about this problem and working on it's fixing.",           
        ];
        
        const randomIndex = Math.floor(Math.random() * responses.length);
        return responses[randomIndex];
    }
    userInput.focus();  
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
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
      'message': 'Enter message...',
      
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
      'message': 'Введите сообщение...',
      
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