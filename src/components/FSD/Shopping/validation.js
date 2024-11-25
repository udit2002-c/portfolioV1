document.getElementById('registration-form').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let country = document.getElementById('country').value;
    let city = document.getElementById('city').value;
    let address = document.getElementById('address').value;
    let genderMale = document.getElementById('male').checked;
    let genderFemale = document.getElementById('female').checked;
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;

    if (name === "" || age === "" || country === "" || city === "" || address === "" || (!genderMale && !genderFemale) || username === "" || email === "" || password === "" || confirmPassword === "") {
        event.preventDefault(); 
        alert("All fields must be filled out");
    } else if (password !== confirmPassword) {
        event.preventDefault(); 
        alert("Passwords do not match");
    }
});
