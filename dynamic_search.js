// dynamic_search.js

document.addEventListener('DOMContentLoaded', function () {
    // Sample list of items
    const items = [
        'Apple',
        'Banana',
        'Cherry',
        'Date',
        'Grape',
        'Lemon',
        'Orange',
        'Peach',
        'Strawberry',
        'Watermelon'
    ];

    // Function to update the search results
    function updateResults(query) {
        const resultList = document.getElementById('resultList');
        resultList.innerHTML = ''; // Clear previous results

        const filteredItems = items.filter(item => item.toLowerCase().includes(query.toLowerCase()));

        filteredItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.classList.add('resultItem');
            listItem.textContent = item;
            resultList.appendChild(listItem);
        });
    }

    // Event listener for input changes
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function() {
        const query = this.value;
        updateResults(query);
    });
});