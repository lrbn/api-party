import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import PokemonInfo from './PokemonInfo'
import './Pokemon.css'

class Pokemon extends Component {
  render = () => {
    return (
      <div className="pokemon">
        <img 
          className="pokemon-logo" 
          src="https://seeklogo.com/images/P/Pokemon-logo-497D61B223-seeklogo.com.png"
          alt="pokemon"
        />
        <h2>Select a pokemon.</h2>
        <ul className="nav-links">
          <li>
            <NavLink to='/pokemon/bulbasaur'>Bulbasaur</NavLink>
          </li>
          <li>
            <NavLink to='/pokemon/charmander'>Charmander</NavLink>
          </li>
          <li>
            <NavLink to='/pokemon/squirtle'>Squirtle</NavLink>
          </li>
        </ul>

        <Route 
          exact path={this.props.match.url} 
          render={() => (<h2>No pokemon selected.</h2>)}
        />

        <Route
          path={`${this.props.match.url}/:pokemon`} component={PokemonInfo}
        />

      </div>
    )
  }
}

export default Pokemon