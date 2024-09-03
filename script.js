// Update the clock every second
function updateClock() {
    const now = new Date();
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    const timeString = now.toLocaleTimeString('en-US', options);
    document.getElementById('clock').textContent = timeString;
}

// Update the counter every second
let counter = 0;
function updateCounter() {
    counter += 1;
    document.getElementById('counter').textContent = counter;
}

// Fetch a random fact from an API
async function fetchRandomFact() {
    try {
        const response = await fetch('https://api.api-ninjas.com/v1/facts?limit=1', {
            headers: { 'X-Api-Key': 'YOUR_API_KEY' } // You can get a free API key from API Ninjas or use any other fact API
        });
        const data = await response.json();
        if (data && data.length > 0) {
            document.getElementById('fact').textContent = data[0].fact;
        } else {
            document.getElementById('fact').textContent = 'No fact found.';
        }
    } catch (error) {
        document.getElementById('fact').textContent = 'Error fetching fact.';
    }
}

// Initialize the page
function init() {
    // Update the clock and counter every second
    setInterval(updateClock, 1000);
    setInterval(updateCounter, 1000);

    // Fetch a random fact on page load
    fetchRandomFact();
}

// Run the initialization function
init();
