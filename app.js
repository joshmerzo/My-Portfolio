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


    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;


    if (name && email && message) {

        document.getElementById('form-response').innerHTML = 'Thank you, ' + name + '! Your message has been sent successfully.';
        document.getElementById('form-response').style.color = 'green';


        document.getElementById('contact-form').reset();
    } else {

        document.getElementById('form-response').innerHTML = 'Please fill out all fields before submitting.';
        document.getElementById('form-response').style.color = 'red';
    }
});
