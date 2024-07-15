function showRecommendedProducts() {
    const minIngredients = 2; // Minimum number of selected ingredients required
    const selectedIngredients = [];
    const checkboxes = document.querySelectorAll('input[name="ingredient"]:checked');

    checkboxes.forEach(checkbox => {
        selectedIngredients.push(checkbox.value);
    });

    if (selectedIngredients.length < minIngredients) {
        alert(`Please select at least ${minIngredients} ingredients.`);
    } else {
        // Store selected ingredients in localStorage for use in products.js
        localStorage.setItem('selectedIngredients', JSON.stringify(selectedIngredients));

        // Redirect to products.html
        window.location.href = 'products.html';
    }
}

function toggleSelectAll(checkbox) {
    const checkboxes = document.getElementsByName('ingredient');
    checkboxes.forEach(cb => {
        cb.checked = checkbox.checked;
    });
}
