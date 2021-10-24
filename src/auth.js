export const BASE_URL = 'https://api.nomoreparties.co';

export const register = (/* здесь должны быть параметры */) => {
  return fetch(`${BASE_URL}/auth/local/register`, {
    method: 'POST',
    headers: {
      // а здесь — заголовки
    },
    body: JSON.stringify(/* отправляем данные на сервер */)
  })
  .then((response) => {
    return response.json();
  })
  .then((res) => {
    return res;
  })
  .catch((err) => console.log(err));
};