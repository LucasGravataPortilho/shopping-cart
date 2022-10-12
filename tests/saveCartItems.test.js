const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  it('Verifica se ao executar SaveCartItems com argumento cartItem localStorage é chamado', () => {
    expect.assertions(1);
    saveCartItems('cartItem');
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  it('Verifica se ao executar SaveCartItems com argumento cartItem localStorage é chamado com dois parâmetros', () => {
    expect.assertions(1);
    saveCartItems('cartItem');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', 'cartItem');
  });
});
