import React from 'react';
import { fetchMorning, fetchAfternoon, fetchLunch, fetchDinner } from '../store/yelp';
import { Grid, Card } from '@material-ui/core'


class Itinerary extends React.Component {
  constructor(){
    super()
    this.state = ({
      morning: [],
      lunch: [],
      afternoon: [],
      dinner: []
    })
    this.randomNum1 = this.randomNum1.bind(this)
    this.randomNum2 = this.randomNum2.bind(this)
    this.randomNum3 = this.randomNum3.bind(this)
    this.randomNum4 = this.randomNum4.bind(this)
  }

  async componentDidMount() {
    //await call to thunk to make server request
    const morningArr = await fetchMorning();
    console.log('Morning Array', morningArr)
    const afternoonArr = await fetchAfternoon();
    console.log('Afternoon Array', afternoonArr)
    const lunchArr = await fetchLunch();
    console.log('Lunch Array', lunchArr)
    const dinnerArr = await fetchDinner();
    console.log('Dinner Array', dinnerArr)


    this.setState({
      morning: morningArr,
      lunch: lunchArr,
      afternoon: afternoonArr,
      dinner: dinnerArr
    })
  }

  randomNum1 () {
    return Math.floor(Math.random() * this.state.morning.length)
  }

  randomNum2 () {
    return Math.floor(Math.random() * this.state.lunch.length)
  }

  randomNum3 () {
    return Math.floor(Math.random() * this.state.afternoon.length)
  }

  randomNum4 () {
    return Math.floor(Math.random() * this.state.dinner.length)
  }

  render() {
    return (
      <div>
        {this.state.morning.length > 0 ? (
           <div>
            <h1>Morning</h1>
              <h3>{this.state.morning[this.randomNum1()].name}</h3>
            <h1>Lunch</h1>
            <h3>{this.state.lunch[this.randomNum2()].name}</h3>
            <h1>Afternoon</h1>
            <h3>{this.state.afternoon[this.randomNum3()].name}</h3>
            <h1>Dinner</h1>
            <h3>{this.state.dinner[this.randomNum4()].name}</h3>
            </div>
         ) : <h1>Loading</h1>}
      </div>
    )
  }
}


export default Itinerary
