function showProductDetails(name, price) {
  const modal = document.getElementById('product-modal');
  const modalProductName = document.getElementById('modal-product-name');
  const modalProductPrice = document.getElementById('modal-product-price');

  modal.style.display = 'block';
  modalProductName.textContent = name;
  modalProductPrice.textContent = `Price: $${price}`;
}

function closeProductDetails() {
  const modal = document.getElementById('product-modal');
  modal.style.display = 'none';
}


// dark mode
let isDarkMode = false;

function changeText() {
  const displayTextElement = document.getElementById('displayText');
  displayTextElement.textContent = 'Text changed!';
}

function toggleDarkMode() {
  const body = document.body;
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
}