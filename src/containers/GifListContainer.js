import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GiftListContainer extends Component {

    state = {
        gifs: []
    }
        

    componentDidMount() {
        fetch("https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g")
        .then(res => res.json())
        .then(
            data.setState()
        )
    }

    render() {
        return (
            <div>
                <GifList />
                <GifSearch />
            </div>
        )
    }
}