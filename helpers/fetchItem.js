const fetchItem = async (param) => {
  const url = `https://api.mercadolibre.com/items/${param}`;
  
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
