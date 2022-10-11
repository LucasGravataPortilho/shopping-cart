  // const fetch = require('node-fetch');
  
const fetchProducts = async (param) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${param}`;
  
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};

fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
