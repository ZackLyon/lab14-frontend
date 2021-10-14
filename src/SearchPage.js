
import './App.css';
import { fetchBooks } from './request-utils.js'

import React, { Component } from 'react'

export default class SearchPage extends Component {
  state = {
    title: '',
    booksList: []
  }

  handleSubmit = async(e) => {
    e.preventDefault();

    const books = await fetchBooks(this.state.title);
    await this.setState({booksList: books});
    console.log("title ", this.state.title);
    console.log("bookslist ", this.state.booksList);
  }

  render() {
    const { booksList } = this.state;
    console.log(booksList);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title :
            <input value={this.state.title} onChange={(e) => this.setState({title: e.target.value})}></input>
          </label>
          <button type="submit">Submit</button>
        </form>

        <div>
          {
            booksList.map(({ author, titleweb, isbn, flapcopy, priceusa }) => <div key={isbn}>
              <h1>{author}</h1>
              <h2>{titleweb}</h2>
              <div dangerouslySetInnerHTML={{__html: flapcopy}}></div>
              <div> Price: ${priceusa} </div>
            </div>)
          }
        </div>
      </div>
    )
  }
}

