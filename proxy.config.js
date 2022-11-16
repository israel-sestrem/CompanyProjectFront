const proxy = [
    {
      context: '/address/registration',
      target: 'https://viacep.com.br/ws/{cep}/json',
      pathRewrite: {'^/address/registration' : ''}
    }
  ];
module.exports = proxy;