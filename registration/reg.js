$(document).ready(function() {
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
            'emailLabel': 'Email:',
            'passwordLabel': 'Password:',
            'confirmPasswordLabel': 'Confirm Password:',
            'birthDateLabel': 'Birth Date:',
            'usernameLabel': 'Username:',
            'countryLabel': 'Country:',
            'cityLabel': 'City:',
            'phoneLabel': 'Mobile Number:',
            'registerButton': 'Register',
            'invalidEmailFormat': 'Invalid email format!',
            'passwordsNotMatch': 'Passwords do not match!',
            'requiredField': 'This field is required.',
            'emailValidation': 'Email address must contain "@" symbol. The address "{email}" is missing the "@" symbol.'
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
            'emailLabel': 'Электронная почта:',
            'passwordLabel': 'Пароль:',
            'confirmPasswordLabel': 'Подтвердите пароль:',
            'birthDateLabel': 'Дата рождения:',
            'usernameLabel': 'Имя пользователя:',
            'countryLabel': 'Страна:',
            'cityLabel': 'Город:',
            'phoneLabel': 'Мобильный номер:',
            'registerButton': 'Зарегистрироваться',
            'invalidEmailFormat': 'Неверный формат электронной почты!',
            'passwordsNotMatch': 'Пароли не совпадают!',
            'requiredField': 'Это поле обязательно для заполнения.',
            'emailValidation': 'Адрес электронной почты должен содержать символ "@". В адресе "{email}" отсутствует символ "@".'
        }
    };

    $('.translate').click(function() {
        var lang = $(this).attr('id');
        updateLanguage(lang);
    });

    function updateLanguage(lang) {
        $('.lang').each(function() {
            var key = $(this).attr('key');
            $(this).text(arrLang[lang][key]);
        });

        $('#email').prev('label').text(arrLang[lang]['emailLabel']);
        $('#password').prev('label').text(arrLang[lang]['passwordLabel']);
        $('#confirmPassword').prev('label').text(arrLang[lang]['confirmPasswordLabel']);
        $('#regDate').prev('label').text(arrLang[lang]['birthDateLabel']);
        $('#customerName').prev('label').text(arrLang[lang]['usernameLabel']);
        $('#country').prev('label').text(arrLang[lang]['countryLabel']);
        $('#city').prev('label').text(arrLang[lang]['cityLabel']);
        $('#phone').prev('label').text(arrLang[lang]['phoneLabel']);
        $('.joinbut1').text(arrLang[lang]['registerButton']);

        $('#errorMessage').html('');
    }

    $('#password').keyup(function() {
        var password = $(this).val();
        var strength = checkPasswordStrength(password);
        $('#passwordStrength').html(strength);
    });

    function checkPasswordStrength(password) {
        var strength = '';
        if (/^[0-9]+$/.test(password) || /^[a-z]+$/.test(password)) {
            strength = 'Weak';
        } else if (/^[0-9a-z]+$/.test(password)) {
            strength = 'Medium';
        } else if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(password)) {
            strength = 'Strong';
        }
        return strength;
    }

    $('#registrationForm').submit(function(event) {
        event.preventDefault();

        var email = $('#email').val();
        var password = $('#password').val();
        var confirmPassword = $('#confirmPassword').val();
        var errorMessage = '';

        var lang = $('.translate.active').attr('id') || 'en';

        if (!validateEmail(email)) {
            errorMessage += arrLang[lang]['invalidEmailFormat'] + '<br>';
        }

        if (password !== confirmPassword) {
            errorMessage += arrLang[lang]['passwordsNotMatch'] + '<br>';
        }

        if (errorMessage) {
            $('#errorMessage').html(errorMessage);
        } else {
            $('#errorMessage').html('');
            displaySuccessMessage(lang);
        }
    });

    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        return re.test(email);
    }

    function displaySuccessMessage(lang) {
        var message = lang === 'en' ? 'Registration Complete!' : 'Регистрация завершена!';
        $('#successMessage').html('<p>' + message + '</p>');
    }

    
    $('input').each(function() {
        $(this).on('invalid', function(e) {
            e.preventDefault();
            var lang = $('.translate.active').attr('id') || 'en';
            var validationMessage = arrLang[lang]['requiredField'];

            if (this.validity.valueMissing) {
                validationMessage = arrLang[lang]['requiredField'];
            } else if (this.validity.typeMismatch && this.type === 'email') {
                validationMessage = arrLang[lang]['emailValidation'].replace('{email}', this.value);
            }

            this.setCustomValidity(validationMessage);
            this.reportValidity();
        });

        $(this).on('input', function() {
            this.setCustomValidity('');
        });
    });
});
