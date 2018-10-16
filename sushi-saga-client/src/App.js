import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    eatenSushis: [],
    startingSushi: 0,
    money: 100
  }

  componentDidMount(){
      fetch(API)
        .then(res => res.json())
        .then(obj => obj.map((sushi) => {
          let newSushi = sushi
          newSushi.eaten = false
          return newSushi}))
        .then(sushis => this.setState({sushis:sushis}))
  }


  handleSushiClick = (e) => {
    const sushiID = parseInt(e.target.parentElement.parentElement.dataset.id)
    let newSushis = [...this.state.sushis]
    let sushi = newSushis[sushiID - 1]
    if (sushi && this.state.money >= sushi.price){
      newSushis[sushiID - 1]["eaten"] = true;
      let newEatenSushis = [...this.state.eatenSushis]
      newEatenSushis.push(sushi)
      let newBalance = this.state.money - sushi.price
      this.setState({
        sushis: newSushis,
        eatenSushis: newEatenSushis,
        money: newBalance
      })
    }
  }

  findSushi(id){
    return this.state.sushis.filter((sushi) => {
      return sushi.id === id
    })
  }

  handleMoreClick = (e) => {
    this.setState({startingSushi: this.state.startingSushi+4})
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} handleSushiClick={this.handleSushiClick} i={this.state.startingSushi} handleMoreClick={this.handleMoreClick}/>
        <Table eatenSushis={this.state.eatenSushis} money={this.state.money}/>
      </div>
    );
  }
}

export default App;
