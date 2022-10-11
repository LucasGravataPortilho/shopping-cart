require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  it('Verifica se fetchItem é uma função', () => {
    expect.assertions(1);
    expect(typeof fetchItem).toBe('function');
  });
  it('Verifica se fetch foi chamada na função fetchItem com argumento MLB1615760527', async () => {
    expect.assertions(1);
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  it('Verifica se o retorno da função fetchItem com arg MLB1615760527 utiliza endpoint', async () => {
    expect.assertions(1);
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  it('Verifica se o retorno da função fetchItem com arg MLB1615760527 é uma estrutura igual a item', async () => {
    expect.assertions(1);
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  });
  it('Verifica se o retorno da função fetchItem sem arg retorna um erro "You must provide an url"', async () => {
    expect.assertions(1);
    const failRequest = await fetchItem();
    expect(failRequest).toEqual(new Error('You must provide an url'));
  });
});
