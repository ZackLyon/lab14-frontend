// heroku-url/books?search=something
import request from 'superagent';
export { fetchBooks, login, signUp };

const URL = 'https://mighty-mesa-96426.herokuapp.com'

async function fetchBooks(searchTerm) {
  const response = await request.get(`${URL}/books/?search=${searchTerm}`);

  return response.body;
}

async function login(email, password) {
  const response = await request
    .post(`${URL}/auth/signin`)
    .send({ email, password })

  return response.body;
}

async function signUp(email, password) {
  const response = await request
    .post(`${URL}/auth/signup`)
    .send({ email, password })

  return response.body;
}

export async function createFavorites(title, author, isbn, token) {
  const response = await request.post(`${URL}/api/favorite`)
    .send({ title: title, author: author, isbn: isbn })
    .set('Authorization', token)

  return response.body
}

export async function getFavorites(token) {
  const response = await request.get(`${URL}/api/favorite`)
    .set('Authorization', token)

  return response
}
