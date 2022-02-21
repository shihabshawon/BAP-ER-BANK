document.getElementById('login-submit').addEventListener('click', function () {

    //get user password
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    //get user password
    const passwordFField = document.getElementById('user-password');
    const userPassword = passwordFField.value;
    // chaking email and 
    if (userEmail == 'sontan@baap.com' && userPassword == 'secrect') {
        window.location.href = 'banking.html';
    }

})
