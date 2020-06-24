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

const validate = input => {
  if (input.type === 'email') {
    console.log('email validation');
  } else if (input.type === 'textarea') {
    console.log('text validation');
  }
};

const showError = () => {
  console.log('show error');
};

form.addEventListener('submit', event => {
  validate(email);
  validate(message);

  if (true) {
    // showError();
    event.preventDefault();
  }
});
