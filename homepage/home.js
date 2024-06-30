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
        'contItem1': {
            'text2': 'What\'s new?',
            'text1': [
                'OLD QUESTS AND ABILITY OBTAINMENTS ARE BACK!',
                'INPUT DELAY ISSUES HAVE BEEN FIXED!',
                'MOST MOBILE ISSUES HAVE BEEN FIXED!',
                '[NEW ABILITY] Ope-Ope No Mi',
                '[FULL REWORK] Mero-Mero No Mi',
                'New areas, skins, items, mounts and MORE!'
            ]
        },
        'contItem2': {
            'text2': 'PVP news',
            'text1': [
                'Fixed inf health glitch',
                'Fixed no endlag on some moves',
                'PVP now has it\'s ranks!',
                'Added 2v2 gamemode!',
                'Added URF (ultra rapid fire) gamemode!',
                'Added secret ability.'
            ]
        },
        'contItem3': {
            'text2': 'PVE news',
            'text1': [
                'Fixed npcs flying away after some hits.',
                'Fixed npcs sometimes not dropping loot',
                'Fixed npcs being extremely laggy on EU servers',
                'Added npcs with Leg/Myth traits',
                'Fixed DAWN heal healing npcs',
                'New drops!'
            ]
        },
        'contItem4': {
            'text2': 'AUT incoming event',
            'text1': [
                'Summer event will launch in 5 days!',
                'Challenge new Summer boss for rewards!',
                'New Summer crates!',
                'New Summer related decorations!',
                'New Summer related quests!',
                'New Summer related ability!'
            ]
        }
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
        'contItem1': {
            'text2': 'Что нового?',
            'text1': [
                'Вернули старые квесты и способности!',
                'Исправлены проблемы с задержкой ввода!',
                'Большинство проблем с мобильной версией исправлены!',
                '[Новая способность] Опе-Опе Но Ми',
                '[Полная переделка] Меро-Меро Но Ми',
                'Новые зоны, скины, предметы, маунты и многое другое!'
            ]
        },
        'contItem2': {
            'text2': 'Новости PVP',
            'text1': [
                'Исправлен глюк с бесконечным здоровьем',
                'Исправлен отсутствие задержки после некоторых атак',
                'Добавлены ранги в PVP!',
                'Добавлен режим 2v2!',
                'Добавлен режим URF (ультра быстрые бои)!',
                'Добавлена секретная способность.'
            ]
        },
        'contItem3': {
            'text2': 'Новости PVE',
            'text1': [
                'Исправлены проблемы с NPC, улетающими после нескольких ударов.',
                'Исправлено отсутствие дропа от NPC в некоторых случаях',
                'Исправлено экстремальное торможение NPC на серверах EU',
                'Добавлены NPC с легендарными/мифическими характеристиками',
                'Исправлено лечение NPC при помощи DAWN',
                'Новые дропы!'
            ]
        },
        'contItem4': {
            'text2': 'Предстоящее событие в AUT',
            'text1': [
                'Летнее событие стартует через 5 дней!',
                'Испытайте нового летнего босса и получите награды!',
                'Новые летние сундуки!',
                'Новые летние украшения!',
                'Новые летние квесты!',
                'Новая летняя способность!'
            ]
        }
    }
};

$(function() {
    $('.translate').click(function() {
        var lang = $(this).attr('id');
        console.log("Language selected: " + lang); 

        
        $('.lang').each(function(index, item) {
            var key = $(this).attr('key');
            $(this).text(arrLang[lang][key]);
        });

        
        $('.contItem').each(function(index, item) {
            var section = $(this);
            var sectionKey = section.attr('id'); 

            
            var keyText2 = arrLang[lang][sectionKey]['text2'];
            section.find('.text2').text(keyText2);

            
            var text1Items = arrLang[lang][sectionKey]['text1'];
            section.find('.text1').each(function(i) {
                $(this).text(text1Items[i]);
            });
        });
    });
});
