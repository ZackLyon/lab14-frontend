// heroku-url/books?search=something
import request from 'superagent';
export { fetchBooks };

async function fetchBooks(searchTerm) {
  const response = await request.get(`https://mighty-mesa-96426.herokuapp.com/books/?search=${searchTerm}`);

  return response.body;
}