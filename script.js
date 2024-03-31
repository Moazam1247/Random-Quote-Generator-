const quoteCountInput = document.getElementById('quoteCount');
const generateBtn = document.getElementById('generateBtn');
const quotesContainer = document.getElementById('quotesContainer');

async function fetchRandomQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        if (!response.ok) {
            throw new Error('Failed to fetch quote');
        }
        const data = await response.json();
        return data.content + ' - ' + data.author;
    } catch (error) {
        console.error('Error fetching quote:', error.message);
        return 'Failed to fetch quote';
    }
}

generateBtn.addEventListener('click', async () => {
    quotesContainer.innerHTML = ''; // Clear previous quotes
    const quoteCount = parseInt(quoteCountInput.value);
    if (quoteCount <= 0) {
        alert('Please enter a valid number of quotes (greater than 0).');
        return;     
    }
    for (let i = 0; i < quoteCount; i++) {
        const randomQuote = await fetchRandomQuote();
        const quoteElement = document.createElement('div');
        quoteElement.textContent = randomQuote;
        quotesContainer.appendChild(quoteElement);
    }
});
