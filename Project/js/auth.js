
/**
 * Shared Authentication Logic
 * Handles checking user sessions, retrieving current user, and common utilities.
 */

const AUTH_KEY = 'currentUser';
const USERS_KEY = 'registeredUsers';

const Auth = {
    /**
     * Check if user is logged in.
     * @returns {object|null} The user object if logged in, else null.
     */
    getCurrentUser: () => {
        const userJson = localStorage.getItem(AUTH_KEY);
        try {
            return userJson ? JSON.parse(userJson) : null;
        } catch (e) {
            console.error("Auth Error", e);
            return null;
        }
    },

    /**
     * Register a new user
     * @param {object} userData 
     * @returns {object} { success: boolean, message: string }
     */
    registerUser: (userData) => {
        const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
        
        // Check if email or username exists
        const exists = users.find(u => u.email === userData.email || u.username === userData.username);
        if (exists) {
            return { success: false, message: 'Username or Email already exists!' };
        }

        users.push(userData);
        localStorage.setItem(USERS_KEY, JSON.stringify(users));
        return { success: true, message: 'Registration successful!' };
    },

    /**
     * Login user
     * @param {string} identifier Email or Username
     * @param {string} password 
     * @returns {object} { success: boolean, message: string, user: object }
     */
    loginUser: (identifier, password) => {
        const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
        const user = users.find(u => 
            (u.email === identifier || u.username === identifier) && u.password === password
        );

        if (user) {
            // Set session
            // Don't store password in session ideally, but for this demo clone the object
            const sessionUser = { ...user };
            delete sessionUser.password; // slight security
            localStorage.setItem(AUTH_KEY, JSON.stringify(sessionUser));
            return { success: true, message: 'Login successful!', user: sessionUser };
        }

        return { success: false, message: 'Invalid credentials' };
    },

    /**
     * Logout user
     */
    logout: () => {
        localStorage.removeItem(AUTH_KEY);
        window.location.href = 'index.html';
    },

    /**
     * Redirect if not logged in
     */
    requireAuth: () => {
        if (!Auth.getCurrentUser()) {
            window.location.href = 'index.html';
        }
    },

    /**
     * Redirect if already logged in (for login/register pages)
     */
    redirectIfLoggedIn: () => {
        if (Auth.getCurrentUser()) {
            window.location.href = 'dashboard.html';
        }
    }
};
