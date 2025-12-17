
// Check if already logged in
Auth.redirectIfLoggedIn();

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const identifier = document.getElementById('identifier').value;
        const password = document.getElementById('password').value;

        const result = Auth.loginUser(identifier, password);
        const errorDiv = document.getElementById('loginError');
        const passwordInput = document.getElementById('password');
        const identifierInput = document.getElementById('identifier');

        if (result.success) {
            // Set a flag to show motivation popup on dashboard
            sessionStorage.setItem('showMotivation', 'true');
            window.location.href = 'dashboard.html';
        } else {
            // Show inline error
            errorDiv.textContent = "Invalid username or password. Please try again.";
            errorDiv.classList.add('visible');
            
            // Add shake animation
            passwordInput.classList.add('shake');
            
            // Remove shake after animation ends
            setTimeout(() => {
                passwordInput.classList.remove('shake');
            }, 400);
        }

        // Clear error on input
        const clearError = () => {
             errorDiv.classList.remove('visible');
        };
        
        passwordInput.addEventListener('input', clearError);
        identifierInput.addEventListener('input', clearError);
    });
});
