import axios from '../../node_modules/axios';
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
const emailErrorMessage = document.getElementById('email_error_message');
const textMessage = document.getElementById('message');
const textErrorMessage = document.getElementById('text_error_message');
const finalSuccessMsg = document.getElementById(
  'contact_form__final_success_message'
);
const finalErrorMsg = document.getElementById(
  'contact_form__final_error_message'
);
const submitButton = document.getElementById('contact_form__submit_button');

const validateEmail = (input, errorTextArea) => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (input.value === '') {
    showError('Field is empty!', input, errorTextArea);
    return false;
  } else if (!emailRegex.test(String(input.value).toLowerCase())) {
    showError('Incorrect email address!', input, errorTextArea);
    return false;
  } else if (input.value.length > 150) {
    showError('Your email address is too long', input, errorTextArea);
    return false;
  } else {
    return true;
  }
};

const validateTextField = (input, errorTextArea) => {
  if (input.value === '') {
    showError('Field is empty!', input, errorTextArea);
    return false;
  } else if (input.value.length > 5000) {
    showError('Your message is too long', input, errorTextArea);
    return false;
  } else {
    return true;
  }
};

const showError = (message, errorTarget, errorTextArea) => {
  errorTextArea.textContent = message;
  errorTarget.classList.add('error');
};

const hideError = (errorTarget, errorTextArea) => {
  errorTextArea.textContent = '';
  errorTarget.classList.remove('error');
};

email.addEventListener('focus', () => {
  hideError(email, emailErrorMessage);
});

email.addEventListener('blur', () => {
  validateEmail(email, emailErrorMessage);
});

textMessage.addEventListener('focus', () => {
  hideError(textMessage, textErrorMessage);
});

textMessage.addEventListener('blur', () => {
  validateTextField(textMessage, textErrorMessage);
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const isEmailValid = validateEmail(email, emailErrorMessage);
  const isTextFieldValid = validateTextField(textMessage, textErrorMessage);

  if (isEmailValid || isTextFieldValid) {
    const dataToSend = new FormData();
    submitButton.disabled = true;

    dataToSend.append('email', email.value);
    dataToSend.append('message', textMessage.value);

    axios({
      method: 'post',
      url: '../php/SendMessage.php',
      data: dataToSend
    })
      .then(response => {
        form.style.display = 'none';
        finalSuccessMsg.style.display = 'flex';
      })
      .catch(error => {
        form.style.display = 'none';
        finalErrorMsg.style.display = 'flex';
      });
  }
});
