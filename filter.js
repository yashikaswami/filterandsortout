const btns = [
    { id: 1, name: 'Anklets' },
    { id: 2, name: 'Hand Bags' },
    { id: 3, name: 'Beautiful Dress' },
    { id: 4, name: 'Bangles' },
    { id: 5, name: 'Rings' },
	{ id: 5, name: 'Hair Accessories' }
];

const products = [
    // Anklets
    { id: 1, image: '1.webp', title: 'Traditional Silver Anklet', price: 374, category: 'Anklets' },
    { id: 2, image: '2.webp', title: 'Gold Plated Anklet', price: 499, category: 'Anklets' },
    { id: 3, image: '3.webp', title: 'Beaded Anklet', price: 299, category: 'Anklets' },
    { id: 4, image: '4.webp', title: 'Kundan Anklet', price: 449, category: 'Anklets' },
    { id: 5, image: '5.webp', title: 'Embroidered Anklet', price: 499, category: 'Anklets' },
    { id: 6, image: '6.webp', title: 'Delicate Charm Anklet', price: 374, category: 'Anklets' },

    // Hand Bags
    { id: 7, image: '7.webp', title: 'Leather Clutch Bag', price: 699, category: 'Hand Bags' },
    { id: 8, image: '8.webp', title: 'Silk Embroidered Handbag', price: 799, category: 'Hand Bags' },
    { id: 9, image: '9.webp', title: 'Beaded Evening Bag', price: 624, category: 'Hand Bags' },
    { id: 10, image: '10.webp', title: 'Traditional Potli Bag', price: 749, category: 'Hand Bags' },
    { id: 11, image: '11.webp', title: 'Elegant Clutch', price: 674, category: 'Hand Bags' },
    { id: 12, image: '12.webp', title: 'Vintage Handbag', price: 874, category: 'Hand Bags' },

    // Beautiful Dress
    { id: 13, image: '13.webp', title: 'Embroidered Saree', price: 1499, category: 'Beautiful Dress' },
    { id: 14, image: '14.webp', title: 'Designer Lehenga', price: 1874, category: 'Beautiful Dress' },
    { id: 15, image: '15.webp', title: 'Silk Anarkali Dress', price: 1374, category: 'Beautiful Dress' },
    { id: 16, image: '16.webp', title: 'Chiffon Sari', price: 1749, category: 'Beautiful Dress' },
    { id: 17, image: '17.webp', title: 'Cotton Kurti', price: 749, category: 'Beautiful Dress' },
    { id: 18, image: '18.webp', title: 'Embroidered Dupatta', price: 374, category: 'Beautiful Dress' },

    // Bangles
    { id: 19, image: '19.webp', title: 'Gold Bangles', price: 874, category: 'Bangles' },
    { id: 20, image: '20.webp', title: 'Silver Bangles', price: 499, category: 'Bangles' },
    { id: 21, image: '21.webp', title: 'Kundan Bangles', price: 624, category: 'Bangles' },
    { id: 22, image: '22.webp', title: 'Charm Bangles', price: 749, category: 'Bangles' },
    { id: 23, image: '23.webp', title: 'Enamel Bangles', price: 549, category: 'Bangles' },
    { id: 24, image: '24.webp', title: 'Diamond Bangles', price: 1499, category: 'Bangles' },

    // Rings
    { id: 25, image: '25.webp', title: 'Gold Ring', price: 449, category: 'Rings' },
    { id: 26, image: '26.webp', title: 'Diamond Ring', price: 1124, category: 'Rings' },
    { id: 27, image: '27.webp', title: 'Silver Ring', price: 249, category: 'Rings' },
    { id: 28, image: '28.webp', title: 'Pearl Ring', price: 374, category: 'Rings' },
    { id: 29, image: '29.webp', title: 'Sapphire Ring', price: 874, category: 'Rings' },
    { id: 30, image: '30.webp', title: 'Ruby Ring', price: 999, category: 'Rings' },

    // Hair Accessories
    { id: 31, image: '31.webp', title: 'Decorative Hair Pins', price: 149, category: 'Hair Accessories' },
    { id: 32, image: '32.webp', title: 'Gold Hair Band', price: 299, category: 'Hair Accessories' },
    { id: 33, image: '33.webp', title: 'Silver Hair Clips', price: 199, category: 'Hair Accessories' },
    { id: 34, image: '34.webp', title: 'Embroidered Hair Band', price: 249, category: 'Hair Accessories' },
    { id: 35, image: '35.webp', title: 'Crystal Hair Comb', price: 349, category: 'Hair Accessories' },
    { id: 36, image: '36.webp', title: 'Vintage Hair Brooch', price: 499, category: 'Hair Accessories' }
];



let filteredProducts = []; // Initialize as an empty array
let currentFilter = null;
let currentSort = null;

// Render filter buttons
document.getElementById('btns').innerHTML = btns.map(btn => 
    `<button class='fil-p' onclick='filterItems("${btn.name}")'>${btn.name}</button>`
).join('');

// Filter items by category
function filterItems(category) {
    currentFilter = category;
    filteredProducts = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].category === category) {
            filteredProducts.push(products[i]);
        }
    }
    applyCurrentSortAndFilter();
    showClearButtons();
}

// Sort items by property
function sortItems(property, order) {
    currentSort = { property: property, order: order };
    applyCurrentSortAndFilter();
    showClearButtons();
}

// Apply current filter and sort
function applyCurrentSortAndFilter() {
    let items = filteredProducts.slice(); // Clone the array

    // Apply sorting
    if (currentSort) {
        items.sort(function(a, b) {
            if (currentSort.order === 'asc') {
                if (a[currentSort.property] > b[currentSort.property]) return 1;
                if (a[currentSort.property] < b[currentSort.property]) return -1;
                return 0;
            } else {
                if (a[currentSort.property] < b[currentSort.property]) return 1;
                if (a[currentSort.property] > b[currentSort.property]) return -1;
                return 0;
            }
        });
    }

    displayItems(items);
}

// Clear the filter and reset products
function clearFilter() {
    currentFilter = null;
    filteredProducts = products.slice(); // Reset to full product list
    applyCurrentSortAndFilter();
    showClearButtons();
}

// Clear the sort and reapply current filter
function clearSort() {
    currentSort = null;
    applyCurrentSortAndFilter();
    showClearButtons();
}

// Display products
function displayItems(items) {
    document.getElementById('root').innerHTML = items.map(item => 
        `<div class='box'>
            <h3>${item.title}</h3>
            <div class='img-box'>
                <img class='images' src=${item.image} alt="${item.title}"></img>
            </div>
            <div class='bottom'>
                <h2>₹${item.price}.00</h2>
                <button>Add to cart</button>
            </div>
        </div>`
    ).join('');
}

// Show or hide clear buttons based on filter and sort state
function showClearButtons() {
    const filterBtn = document.getElementById('clearFilterBtn');
    const sortBtn = document.getElementById('clearSortBtn');

    if (currentFilter) {
        filterBtn.style.display = 'inline-block';
    } else {
        filterBtn.style.display = 'none';
    }
    
    if (currentSort) {
        sortBtn.style.display = 'inline-block';
    } else {
        sortBtn.style.display = 'none';
    }

    if (!currentFilter && !currentSort) {
        filterBtn.style.display = 'none';
        sortBtn.style.display = 'none';
    }
}

// Initially hide clear buttons
function hideClearButtons() {
    document.getElementById('clearFilterBtn').style.display = 'none';
    document.getElementById('clearSortBtn').style.display = 'none';
}

// Initially display all products
function initialize() {
    filteredProducts = products.slice(); // Start with full product list
    displayItems(filteredProducts);
    hideClearButtons();
}

initialize();
