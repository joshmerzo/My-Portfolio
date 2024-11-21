const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if(activeLink != i){
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 1000);
        }
    })
})

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get values from the form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Check if fields are not empty
    if (name && email && message) {
        // Simulate a successful form submission response
        document.getElementById('form-response').innerHTML = 'Thank you, ' + name + '! Your message has been sent successfully.';
        document.getElementById('form-response').style.color = 'green';

        // Reset the form fields
        document.getElementById('contact-form').reset();
    } else {
        // Display an error message if fields are missing
        document.getElementById('form-response').innerHTML = 'Please fill out all fields before submitting.';
        document.getElementById('form-response').style.color = 'red';
    }
});
