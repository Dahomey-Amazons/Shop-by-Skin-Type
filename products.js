// products.js

document.addEventListener('DOMContentLoaded', function() {
    // Retrieve selected ingredients from localStorage
    const selectedIngredients = JSON.parse(localStorage.getItem('selectedIngredients'));

    // Define products data (mock data for demonstration)
    const products = [
        {
            brand: 'Brand A',
            name: 'Product 1',
            ingredients: ['Salicylic Acid', 'Niacinamide'],
            image: 'images/product1.png'
        },
        {
            brand: 'Brand A',
            name: 'Product 2',
            ingredients: ['Lactic Acid', 'Rose Water', 'Sulfur', 'Hyaluronic Acid', 'Retinol', 'Chamomile', 'Jojoba Oil', 'Zinc Oxide', 'Honey', 'Vitamin C'],
            image: 'images/BAP2.png'
        },
        {
            brand: 'Brand B',
            name: 'Product 3',
            ingredients: ['Salicylic Acid', 'Niacinamide'],
            image: 'images/BBP1.png'
        },
        {
            brand: 'Brand B',
            name: 'Product 4',
            ingredients: ['Retinol', 'Chamomile'],
            image: 'images/BBP2.png'
        },
        {
            brand: 'Brand C',
            name: 'Product 5',
            ingredients: ['Benzoyl Peroxide', 'Tea Tree Oil', 'Witch Hazel', 'Aloe Vera', 'Glycolic Acid', 'Retinol', 'Chamomile'],
            image: 'images/BCP1.png'
        },
        {
            brand: 'Brand C',
            name: 'Product 6',
            ingredients: ['Charcoal', 'Green Tea', 'Rose Water', 'Sulfur', 'Hyaluronic Acid', 'Jojoba Oil', 'Vitamin C'],
            image: 'images/BCP2.png'
        },
        {
            brand: 'Brand D',
            name: 'Product 7',
            ingredients: ['Green Tea', 'Aloe Vera', 'Lactic Acid', 'Sulfur', 'Retinol', 'Zinc Oxide', 'Honey'],
            image: 'images/BDP1.png'
        },
        {
            brand: 'Brand D',
            name: 'Product 8',
            ingredients: ['Tea Tree Oil', 'Benzoyl Peroxide', 'Witch Hazel', 'Charcoal', 'Glycolic Acid', 'Chamomile', 'Vitamin C'],
            image: 'images/BDP2.png'
        },
        {
            brand: 'Brand E',
            name: 'Product 9',
            ingredients: ['Salicylic Acid', 'Niacinamide', 'Tea Tree Oil', 'Benzoyl Peroxide', 'Witch Hazel', 'Glycolic Acid', 'Hyaluronic Acid', 'Retinol'],
            image: 'images/BEP1.png'
        },
        {
            brand: 'Brand E',
            name: 'Product 10',
            ingredients: ['Lactic Acid', 'Rose Water', 'Sulfur', 'Charcoal', 'Green Tea', 'Aloe Vera', 'Jojoba Oil', 'Zinc Oxide'],
            image: 'images/BEP2.png'
        }
    ];

    // Function to filter and display products
    function filterProducts() {
        const brandFilter = document.getElementById('brand-filter').value;

        // Clear previous product list
        const productListDiv = document.getElementById('product-list');
        productListDiv.innerHTML = '';

        // Filter products based on selected brand
        const filteredProducts = products.filter(product => {
            return brandFilter === 'all' || product.brand === brandFilter;
        });

        // Display filtered products
        let currentRow = null;
        filteredProducts.forEach(product => {
            // Check if we need to start a new row
            if (!currentRow || currentRow.dataset.brand !== product.brand) {
                currentRow = document.createElement('div');
                currentRow.classList.add('product-item');
                currentRow.dataset.brand = product.brand;
                productListDiv.appendChild(currentRow);
            }

            // Create product item
            const productDiv = document.createElement('div');
            productDiv.classList.add('product-info');
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.brand}</h2>
                <p>${product.name}</p>
            `;
            currentRow.appendChild(productDiv);
        });

        // Inform user if no products match the criteria
        if (filteredProducts.length === 0) {
            const noProductsDiv = document.createElement('div');
            noProductsDiv.classList.add('no-products');
            noProductsDiv.textContent = 'No products found matching the selected criteria, please try selecting more ingredients';
            productListDiv.appendChild(noProductsDiv);
        }
    }

    // Event listener for brand filter change
    document.getElementById('brand-filter').addEventListener('change', filterProducts);

    // Initial filter based on default settings
    filterProducts();
});
