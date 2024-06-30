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
        'info': 'What is AUT?',
        'info1': "A Universal Time is a Universal ROBLOX JoJo game owned and created by Universe Time Studio.. A Universal Time was originally launched in around 2018, and now the games' creation date is June 3, 2020. A Universal Time is an Adventure/PVP Game based on Araki's JoJo's Bizarre Adventure (「ジョジョの奇妙な冒険」) Manga Sequence/Series, and many other Manga Series/Fandoms'. The game implies fighting other players, farming for items, etc. A Universal Time is based on JJBA, written by Hirohiko Araki. The game is centered around many fanbases and fandoms example: Undertale, X!Tale, Dragon Ball, Glitchtale, Touhou, and more. There are also other fanbases in the game, and each fanbase has been molded into a JoJo's Bizarre Adventure game. AUT is somewhat of a PVP simulator and a trading and grinding simulator. The group of the game, Universe Time Studio. Art is drawn by SIXER!"
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
        'info': 'Что такое AUT?',
        'info1': 'A Universal Time - это игра в стиле JoJo на платформе ROBLOX, созданная и принадлежащая Universe Time Studio. Изначально A Universal Time была запущена в около 2018-ом году, и теперь датой создания игры считается 3 июня 2020 года. A Universal Time - это игра в жанре приключений/PVP, основанная на манге "JoJo\'s Bizarre Adventure" (「ジョジョの奇妙な冒険」) автора Араки и многих других манга-серий/фандомов. Игра подразумевает PVP с другими игроками, добычу предметов и т.д. A Universal Time основана на манге JJBA, написанной Хирохико Араки. Игра сосредоточена на многих фан-базах и фандомах, таких как Undertale, X!Tale, Dragon Ball, Glitchtale, Touhou и других. Также в игре присутствуют и другие фан-базы, каждая из которых адаптирована в стиле JoJo\'s Bizarre Adventure. AUT является чем-то вроде симулятора PVP, а также симулятора торговли и прокачки. Группа игры - Universe Time Studio. Автор рисунков - SIXER!'
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

        
        $('.info').text(arrLang[lang]['info']);
        $('.info1').text(arrLang[lang]['info1']);
    });
});
