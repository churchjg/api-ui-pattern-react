import React, { Component } from 'react';
import './App.css';
import Slides from './Slides'
import Container from './Container';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recipes: []
    }
  }
  componentDidMount() {
    for (let i = 0; i < 50; i++) {
      fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(data => {
          let theMeals = {
            title: data.meals[0].strMeal,
            meal: data.meals[0].strArea,
            image: data.meals[0].strMealThumb,
            recipe: data.meals[0].strInstructions
          }
          let foods = this.state.recipes
          foods.push(theMeals)
          this.setState({
            recipes: foods
          })
        })
    }
  }
  render() {
    if (!this.state.recipes.length) {
      return null
    } else {
      return (
        <div className='App'>
          <header>Find A Recipe!</header>
          <Container content={this.state.recipes} />
        </div>
      )
    }
  }
}

export default App;
