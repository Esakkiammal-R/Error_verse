
Auth.requireAuth();

document.addEventListener('DOMContentLoaded', () => {
    // Check Protocol - Warning removed as we have FallbackData now
    if (window.location.protocol === 'file:') {
        console.warn("Running via file:// protocol. Fetch API will fail, switching to fallback data.");
    }

    // User Welcome
    const user = Auth.getCurrentUser();
    if (user) {
        document.getElementById('welcomeMsg').textContent = `Welcome, ${user.username}!`;
    }

    // Logout
    document.getElementById('logoutBtn').addEventListener('click', () => {
        Auth.logout();
    });

    // Notifications (Registration or Motivation)
    const regMsg = sessionStorage.getItem('registrationMessage');
    if (regMsg) {
        showToast(regMsg);
        sessionStorage.removeItem('registrationMessage');
    } else if (sessionStorage.getItem('showMotivation') === 'true') {
        showMotivationPopup();
        sessionStorage.removeItem('showMotivation');
    }

    // Search Logic
    const identifyBtn = document.getElementById('identifyBtn');
    const resultContainer = document.getElementById('resultContainer');

    // Clear results on input or language change
    const clearResults = () => {
        resultContainer.innerHTML = '';
        resultContainer.classList.add('hidden');
    };

    errorInput.addEventListener('input', clearResults);
    document.getElementById('languageSelect').addEventListener('change', clearResults);

    identifyBtn.addEventListener('click', async () => {
        const language = document.getElementById('languageSelect').value; // python, c, cpp, java
        const errorName = document.getElementById('errorInput').value.trim();

        if (!errorName) {
            alert("Please enter an error name.");
            return;
        }

        resultContainer.innerHTML = '<p>Searching...</p>';
        resultContainer.classList.remove('hidden');

        try {
            const data = await fetchErrors(language);
            const foundError = findError(data, errorName);

            if (foundError) {
                displayResult(foundError);
            } else {
                resultContainer.classList.remove('hidden');
                resultContainer.innerHTML = `
                    <div class="not-found-message">
                        This error is not available yet.<br>
                        We are constantly improving our error library.
                    </div>
                `;
            }
        } catch (err) {

            // Fallback Logic
            if (typeof FallbackData !== 'undefined' && FallbackData[language]) {
                const data = FallbackData[language];
                const foundError = findError(data, errorName);
                if (foundError) {
                    displayResult(foundError);
                } else {
                    resultContainer.classList.remove('hidden');
                    resultContainer.innerHTML = `
                        <div class="not-found-message">
                            This error is not available yet.<br>
                            We are constantly improving our error library.
                        </div>
                    `;
                }
                return; // Succesfully used fallback
            }

            // Original Error Display if Fallback also fails
            resultContainer.innerHTML = `
                <div class="result-card" style="border-left-color: var(--error-color)">
                    <h3>Error Loading Data</h3>
                    <p>Failed to load error data via Fetch API and Fallback data missing.</p>
                    <p><strong>Details:</strong> ${err.message}</p>
                </div>
            `;
        }
    });
});

const slogans = [
    "Code. Debug. Learn. Repeat.",
    "Errors are proof that you are learning.",
    "Every bug makes you a better programmer.",
    "It’s not a bug, it’s a feature.",
    "First, solve the problem. Then, write the code."
];

function showMotivationPopup() {
    const slogan = slogans[Math.floor(Math.random() * slogans.length)];
    showToast(slogan);
}

function showToast(message) {
    const toast = document.getElementById('motivationToast');
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

async function fetchErrors(language) {
    // Map language selection to file names
    const fileMap = {
        'python': 'python_errors.json',
        'c': 'c_errors.json',
        'cpp': 'cpp_errors.json',
        'java': 'java_errors.json'
    };

    // Check if map exists
    const fileName = fileMap[language];
    if (!fileName) throw new Error("Unknown language");

    // Use explicit relative path
    const url = `./data/${fileName}`;
    console.log(`Attempting to fetch: ${url}`);

    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP Error: ${response.status} ${response.statusText} for file ${url}`);
    return await response.json();
}

function findError(data, searchName) {
    searchName = searchName.toLowerCase();

    // Data is object with categories as keys: { "SyntaxErrors": [...], ... }
    for (const category in data) {
        if (Array.isArray(data[category])) {
            const errors = data[category];
            const match = errors.find(err => err.name.toLowerCase().includes(searchName));
            if (match) {
                // Determine category from key if not in object (though prompt said it should be in object, we can infer it)
                return { ...match, category: category };
            }
        }
    }
    return null;
}



function displayResult(error) {
    const container = document.getElementById('resultContainer');
    container.innerHTML = `
        <div class="result-card">
            <h2>${error.name}</h2>
            <div class="result-item"><span class="result-label">Type:</span> ${error.category || 'General'}</div>
            <div class="result-item"><span class="result-label">Meaning:</span> ${error.meaning}</div>
            <div class="result-item"><span class="result-label">Reason:</span> ${error.reason}</div>
            <div class="result-item"><span class="result-label">Analogy:</span> ${error.analogy}</div>
            <div class="result-item" style="margin-top: 15px; border-top: 1px solid #444; padding-top: 10px;">
                <span class="result-label" style="color: var(--secondary-color)">Fix / Solution:</span>
                <p>${error.fix}</p>
            </div>
        </div>
    `;
}
