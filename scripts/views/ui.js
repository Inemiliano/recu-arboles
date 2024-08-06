const productList = document.getElementById('product-list');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');
const closeModalButton = document.getElementById('close-modal');

function addProductToList(product) {
    const li = document.createElement('li');
    li.textContent = `ID: ${product.id}, Nombre: ${product.name}`;
    productList.appendChild(li);
}

function clearProductList() {
    productList.innerHTML = '';
}

function showAlert(message) {
    alert(message);
}

function showModal(title, content) {
    modalTitle.textContent = title;
    modalContent.innerHTML = content;
    modal.style.display = 'block';
}

closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

export { addProductToList, clearProductList, showAlert, showModal };

