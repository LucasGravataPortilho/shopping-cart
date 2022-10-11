require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  it('Verifica se fetchProducts é uma função', () => {
    expect.assertions(1);
    expect(typeof fetchProducts).toBe('function');
  });
  it('Verifica se fetch foi chamada na função fetchProducts com argumento computador', async () => {
    expect.assertions(1);
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  it('Verifica se o retorno da função fetchProducts com arg computador utiliza endpoint', async () => {
    expect.assertions(1);
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });
  it('Verifica se o retorno da função fetchProducts com arg computador é uma estrutura igual computadorSearch', async () => {
    expect.assertions(1);
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  });
  it('Verifica se o retorno da função fetchProducts sem arg retorna um erro "You must provide an url"', async () => {
    expect.assertions(1);
    const failRequest = await fetchProducts();
    expect(failRequest).toEqual(new Error('You must provide an url'));
  });
});
