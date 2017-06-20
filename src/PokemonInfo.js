import React, { Component } from 'react'
import './PokemonInfo.css'

const pokemonImages = {
  bulbasaur: 1,
  charmander: 4,
  squirtle: 7
}

class PokemonInfo extends Component {
  state = {
    pokemon: {
      name: '',
      imageUrl: '',
    }
  }

  componentWillMount = () => {
    this.fetchPokemonData(this.props)
  }

  componentWillReceiveProps(nextProps) {
    const locationChanged = nextProps.location !== this.componentWillReceiveProps.location
    if (locationChanged) {
      this.fetchPokemonData(nextProps)
    }
  }

  fetchPokemonData(props) {
    fetch(`https://pokeapi.co/api/v2/pokemon-form/${pokemonImages[props.match.params.pokemon]}`)
      .then(res => res.json())
      .then(data => {
        const pokemon = {
          name: data.name,
          imageUrl: data.sprites.front_default,
        }
        this.setState({pokemon})
      })
      .catch(err => console.warn(err))
  }

  render = () => {
    const { name, imageUrl } = this.state.pokemon
    return (
      <div className="pokemon-info">
       {/* TODO: Capitalize the name variable .... how?*/}
        <h2>pokemon Name: {name}</h2>
        <img src={imageUrl} alt="pokemon" />
      </div>
    )
  }
}

export default PokemonInfo