function validateForm(event) {
    event.preventDefault();

    document.querySelectorAll('.error').forEach(element => element.textContent = '');

    let valid = true;

    const name = document.getElementById('name').value;
    if (!/^[a-zA-Z ]+$/.test(name)) {
        document.getElementById('nameError').textContent = 'Please enter a valid name';
        valid = false;
    }

    const mobile = document.getElementById('mobile').value;
    if (!/^[0-9]{10}$/.test(mobile)) {
        document.getElementById('mobileError').textContent = 'Please enter a valid 10-digit mobile number';
        valid = false;
    }

    const email = document.getElementById('email').value;
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        valid = false;
    }

    if (valid) {
        const userName = encodeURIComponent(name);
        window.location.href = `welcome.html?name=${userName}`;
    }
}
