const passwords = document.querySelectorAll('input[type="password"]');

passwords.forEach(element => {
  element.addEventListener('input', function (event) {
    if (passwords[0].value != passwords[1].value && passwords[0].value !== '' && passwords[1].value !== '') {
      passwords[0].style.outline = 'red 1px solid';
      passwords[1].style.outline = 'red 1px solid';
    } else {
      passwords[0].style.outline = 'none';
      passwords[1].style.outline = 'none';
    };
  });
});