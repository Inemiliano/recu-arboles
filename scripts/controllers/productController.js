import { BST } from '../models/BST.js';
import { addProductToList, clearProductList, showAlert, showModal } from '../views/ui.js';

const productTree = new BST();

export function addProduct(id, name) {
    const success = productTree.insert({ id, name });
    if (success) {
        addProductToList({ id, name });
    } else {
        showModal('Error', `El producto con ID ${id} ya existe.`);
    }
}

export function searchProduct(id) {
    const product = productTree.search(id);
    if (product) {
        showModal(`Producto encontrado`, `ID: ${product.id}, Nombre: ${product.name}`);
    } else {
        showModal('Error', 'Producto no encontrado');
    }
}

export function getMinProduct() {
    const product = productTree.findMin();
    showModal('Producto con menor ID', `ID: ${product.id}, Nombre: ${product.name}`);
}

export function getMaxProduct() {
    const product = productTree.findMax();
    showModal('Producto con mayor ID', `ID: ${product.id}, Nombre: ${product.name}`);
}

export function showProducts() {
    clearProductList();
    productTree.inOrder(addProductToList);
}

export function showSortedProducts() {
    const products = [];
    productTree.inOrder((data) => {
        products.push(data);
    });
    const productListHtml = products.map(product => `ID: ${product.id}, Nombre: ${product.name}`).join('<br>');
    showModal('Productos ordenados de menor a mayor', productListHtml);
}
