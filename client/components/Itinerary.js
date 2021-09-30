import React from 'react';
import { fetchBusiness } from '../store/yelp';


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
    const dataArr = await fetchBusiness();
    console.log('itinerary', dataArr)

    this.setState({
      morning: dataArr
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
    //will need loading screen if ?state? is empty
    //this means the axios call and randomization is still running
    console.log(this.state.morning)
    return (
      <div>
        {this.state.morning.length > 0 ? (
           <div>
            <h1>Morning</h1>
              <h3>{this.state.morning[this.randomNum1()].name}</h3>
            <h1>Lunch</h1>
            <h1>Afternoon</h1>
            <h3>{this.state.afternoon[this.randomNum3()].name}</h3>
            </div>
         ) : <h1>Loading</h1>}
      </div>
    )
  }
}


export default Itinerary
