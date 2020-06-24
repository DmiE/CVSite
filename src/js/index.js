// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

//CONTACT FORM

const form = document.getElementById('contact_form');
const email = document.getElementById('email');
const message = document.getElementById('message');

const validateEmail = input => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (input.value === '') {
    showError('Field is empty!');
    return false;
  } else if (!emailRegex.test(String(input.value).toLowerCase())) {
    showError('Incorrect email address!');
    return false;
  } else if (input.value.length > 150) {
    showError('Your email address is too long');
    return false;
  } else {
    return true;
  }
};

const validateTextField = (input, maxLength) => {
  if (input.value === '') {
    showError('Field is empty!');
    return false;
  } else if (input.value >= maxLength) {
    showError('Your message is too long');
    return false;
  } else {
    return true;
  }
};

const showError = message => {
  console.log(message);
};

const hideError = () => {
  console.log('error hidden');
};

form.addEventListener('submit', event => {
  validateEmail(email);
  validateTextField(message);

  if (!validateEmail(email) || !validateTextField(message)) {
    console.log('walidacja nie przeszła');
  }

  if (true) {
    // showError();
    event.preventDefault();
  }
});
