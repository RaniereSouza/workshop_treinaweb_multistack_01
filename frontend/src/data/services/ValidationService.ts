export const ValidationService = {
  cep (value = '') {
    return (value.replace(/\D/g, '').length === 8);
  }
};