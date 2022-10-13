// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
const getIdFromProductItem = (product) => product.querySelector('span.id').innerText;

const cartItems = document.querySelector('.cart__items');

// const totalPrice = () => {
//   const precoTotal = document.querySelector('.total-price');
//   let valor = 0;

//   cartItems.forEach((produto) => {
//     valor += parseFloat(produto.value);
//   });
//   precoTotal.innerHTML = valor;
// };

const eraseCart = () => {
  const btn = document.querySelector('.empty-cart');

  btn.addEventListener('click', () => {
    cartItems.innerHTML = null;
  });
};

eraseCart();

const cartItemClickListener = ({ target }) => {
  target.remove();
  saveCartItems(cartItems.innerHTML);
  // totalPrice();
};

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */
const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const getItemFetch = async (product) => {
  const data = await fetchItem(product);
  cartItems.appendChild(createCartItemElement(data));
  saveCartItems(cartItems.innerHTML);
  // totalPrice();
};

const getId = (buttons) => {
  buttons.forEach((button) => {
    button.addEventListener('click', async (item) => {
      const id = item.target.parentNode.firstChild.innerText;
      getItemFetch(id);
    });
  });
};

const showElements = async () => {
  const itemSection = document.querySelector('.items');
  const data = await fetchProducts('computador');
  const { results } = data;
  results.forEach((product) => {
    itemSection.appendChild(createProductItemElement(product));
  });
  const btn = document.querySelectorAll('.item__add');
  getId(btn);
};

cartItems.addEventListener('click', cartItemClickListener);

window.onload = () => { showElements(); cartItems.innerHTML = getSavedCartItems(); };
