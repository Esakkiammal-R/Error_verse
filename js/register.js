
// Check if already logged in
Auth.redirectIfLoggedIn();

document.addEventListener('DOMContentLoaded', () => {
    const professionSelect = document.getElementById('profession');
    const studentFields = document.getElementById('studentFields');
    const employeeFields = document.getElementById('employeeFields');
    const registerForm = document.getElementById('registerForm');

    // Toggle fields based on profession
    professionSelect.addEventListener('change', (e) => {
        const value = e.target.value;
        if (value === 'student') {
            studentFields.classList.remove('hidden');
            employeeFields.classList.add('hidden');
            // Add required attributes dynamically
            document.getElementById('collegeName').setAttribute('required', 'true');
            document.getElementById('yearStudy').setAttribute('required', 'true');
            document.getElementById('orgName').removeAttribute('required');
            document.getElementById('experience').removeAttribute('required');
        } else if (value === 'employee') {
            employeeFields.classList.remove('hidden');
            studentFields.classList.add('hidden');
            // Add required attributes dynamically
            document.getElementById('orgName').setAttribute('required', 'true');
            document.getElementById('experience').setAttribute('required', 'true');
            document.getElementById('collegeName').removeAttribute('required');
            document.getElementById('yearStudy').removeAttribute('required');
        }
    });

    const passwordInput = document.getElementById('password');
    const registerBtn = document.querySelector('button[type="submit"]');

    // Real-time Password Validation
    passwordInput.addEventListener('input', () => {
        const password = passwordInput.value;
        const errorDiv = document.getElementById('passwordError');

        // Regex: at least 8 chars, 1 lower, 1 upper, 1 special
        const valid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

        if (valid) {
            errorDiv.classList.remove('visible');
            passwordInput.classList.remove('input-error');
            passwordInput.classList.add('input-success');
            registerBtn.disabled = false;
            registerBtn.style.opacity = '1';
        } else {
            errorDiv.textContent = "Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 special character.";
            errorDiv.classList.add('visible');
            passwordInput.classList.add('input-error');
            passwordInput.classList.remove('input-success');
            registerBtn.disabled = true;
            registerBtn.style.opacity = '0.5';
        }
    });

    // Handle Form Submission
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Final check just in case
        const errorDiv = document.getElementById('passwordError');
        if (errorDiv.classList.contains('visible')) {
            return;
        }

        const profession = professionSelect.value;
        const userData = {
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            password: password,
            profession: profession
        };

        if (profession === 'student') {
            userData.collegeName = document.getElementById('collegeName').value;
            userData.yearStudy = document.getElementById('yearStudy').value;
        } else {
            userData.orgName = document.getElementById('orgName').value;
            userData.experience = document.getElementById('experience').value;
        }

        const result = Auth.registerUser(userData);

        if (result.success) {
            // Show success message
            const successDiv = document.getElementById('successMessage');
            successDiv.textContent = "Successfully registered. Please log in to continue.";
            successDiv.classList.add('visible');

            // Disable button
            const btn = document.querySelector('button[type="submit"]');
            btn.disabled = true;
            btn.style.opacity = '0.7';

            // Delay redirect to login page
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 3500);
        } else {
            alert(result.message);
        }
    });
});
