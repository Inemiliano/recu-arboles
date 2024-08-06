import { addProduct, showProducts, searchProduct, getMinProduct, getMaxProduct, showSortedProducts } from './controllers/productController.js';

const productForm = document.getElementById('product-form');
const showProductsButton = document.getElementById('show-products');
const searchProductButton = document.getElementById('search-product');
const minProductButton = document.getElementById('min-product');
const maxProductButton = document.getElementById('max-product');
const sortedProductsButton = document.getElementById('sorted-products');

productForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const productId = parseInt(document.getElementById('product-id').value);
    const productName = document.getElementById('product-name').value;
    
    addProduct(productId, productName);
    productForm.reset();
});

showProductsButton.addEventListener('click', () => {
    showProducts();
});

searchProductButton.addEventListener('click', () => {
    const productId = parseInt(prompt('Enter Product ID to search:'));
    searchProduct(productId);
});

minProductButton.addEventListener('click', () => {
    getMinProduct();
});

maxProductButton.addEventListener('click', () => {
    getMaxProduct();
});

sortedProductsButton.addEventListener('click', () => {
    showSortedProducts();
});
