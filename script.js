const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (event) {
  event.preventDefault(); // prevent form from submitting normally

  // send form data to server using AJAX
  const formData = new FormData(contactForm);
  fetch(contactForm.action, {
    method: contactForm.method,
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      // display confirmation message
      const confirmation = document.createElement('p');
      confirmation.textContent = 'Thank you for your message!';
      contactForm.parentNode.insertBefore(confirmation, contactForm.nextSibling);

      // reset form fields
      contactForm.reset();
    })
    .catch((error) => {
      console.error(error);
    });
});
