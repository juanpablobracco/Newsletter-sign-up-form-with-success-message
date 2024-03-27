
document.getElementById('form').addEventListener('submit', (Event) => {
    Event.preventDefault();

    const email = document.getElementById('email').value;
    const emailConfirmation = document.getElementById('email-confirmation');
    const error = document.getElementById('error');
    console.log(email);


    if (email.trim() === '') {
        error.textContent = 'Please fill the field';
    } else {
        error.textContent = ''; //Clear previous error

        let emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

        if (!emailRegex.test(email)) {
            error.textContent = 'Wrong email format.';
        } else {
            // If the email is ValidityState and not empty you can proceed with the form submission
            emailConfirmation.innerHTML = email;
            document.getElementById('container_signup_check').style.display = 'flex';
            document.getElementById('container').style.width = '500px';
            document.getElementById('container').style.height = '400px';

            document.getElementById('container_signup').style.display = 'none';
            document.getElementById('container_background').style.display = 'none';
            
        }
    }
})

document.getElementById('continue').addEventListener('click', ()=> {
    location.reload() })