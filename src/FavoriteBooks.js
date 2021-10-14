import React, { Component } from 'react'
import { getFavorites } from './request-utils'

export default class FavoriteBooks extends Component {
    state = {
        FavoriteList: []
    }

    componentDidMount = async () => {
        const favorites = await getFavorites(this.props.token)
        this.setState({ FavoriteList: favorites })
    }
    render() {
        return (
            <div>
                {this.state.FavoriteList.map(book => <div>
                    <p>{book.title}</p>
                    <p>{book.author}</p>
                    <p>{book.isbn}</p>

                </div>)}
            </div>
        )
    }
}
