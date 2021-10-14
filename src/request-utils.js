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
    .send({ email, password})

    return response.body;
}

async function signUp(email, password) {
  const response = await request
    .post(`${URL}/auth/signup`)
    .send({ email, password})

    return response.body;
}