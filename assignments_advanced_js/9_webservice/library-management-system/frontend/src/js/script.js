window.addEventListener('DOMContentLoaded', () => {

    const registerButton = document.getElementById('register');

    registerButton.addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const msg = document.getElementById('msg');

        // Fetch existing books
        fetch('http://localhost:3000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        })
            .then(response => response.text())
            .then(token => {
                // Save token to local storage for future requests (see developer tools -> application -> local storage)
                localStorage.setItem('token', token);
                msg.innerText = 'Successfully registered';
            });
    });
});
