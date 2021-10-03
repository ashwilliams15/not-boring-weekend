import React from 'react';
import logo from '../../public/full-logo.png'
import { TextField, Box, Button, withStyles, Container, FormControl, FormGroup, Checkbox, FormControlLabel } from '@material-ui/core';
import { connect } from 'react-redux';
import { setZip } from '../store/zip';
import { setActivities } from '../store/activities';
import { setFood } from '../store/food';

const useStyles = () => ({
  container: {
    marginBottom: 35,
    marginTop: 35
  },
  checkBox: {
    display: 'flex',
    'flex-direction': 'row',
    justifyContent: 'center'
  },
  zipBox: {
    display: 'flex',
    'flex-direction': 'column',
    justifyContent: 'space-between'
  },
  zip: {
    maxWidth: '25%',
    alignSelf: 'center'
  },
  generate: {
    maxWidth: '15%',
    alignSelf: 'center'
  }
})

// Have food object and activity object in state with a key for each option, default value false
// Toggle to true
// Then send an array of all pieces of state that are true?

class Info extends React.Component {
  constructor() {
    super()
    this.state = {
      zip: '',
      zipError: false,
      activities: [
        {id: 1, name: 'Biking', yelpName: 'bikerentals', isChecked: false},
        {id: 2, name: 'Bowling', yelpName: 'bowling', isChecked: false},
        {id: 3, name: 'Golf', yelpName: 'golf', isChecked: false},
        {id: 4, name: 'Yoga', yelpName: 'yoga', isChecked: false},
        {id: 5, name: 'Arcades', yelpName: 'arcades', isChecked: false},
        {id: 6, name: 'Art Galleries', yelpName: 'galleries', isChecked: false},
        {id: 7, name: 'Art Museums', yelpName: 'artmuseums', isChecked: false},
        {id: 8, name: 'Day Spas', yelpName: 'spas', isChecked: false},
        {id: 9, name: 'Shopping', yelpName: 'shoppingcenters', isChecked: false}
      ],
      food: [
        {id: 1, name: 'American', yelpName: 'newamerican', isChecked: false},
        {id: 2, name: 'Asian Fusion', yelpName: 'asianfusion', isChecked: false},
        {id: 3, name: 'Barbeque', yelpName: 'bbq', isChecked: false},
        {id: 4, name: 'Chinese', yelpName: 'chinese', isChecked: false},
        {id: 5, name: 'Greek', yelpName: 'greek', isChecked: false},
        {id: 6, name: 'Indian', yelpName: 'indian', isChecked: false},
        {id: 7, name: 'Italian', yelpName: 'italian', isChecked: false},
        {id: 8, name: 'Japanese', yelpName: 'japanese', isChecked: false},
        {id: 9, name: 'Latin American', yelpName: 'latin', isChecked: false},
        {id: 10, name: 'Mediterranean', yelpName: 'mediterranean', isChecked: false},
        {id: 11, name: 'Mexican', yelpName: 'mexican', isChecked: false},
        {id: 12, name: 'Middle Eastern', yelpName: 'mideastern', isChecked: false},
        {id: 13, name: 'Pizza', yelpName: 'pizza', isChecked: false},
        {id: 14, name: 'Seafood', yelpName: 'seafood', isChecked: false},
        {id: 15, name: 'Steakhouses', yelpName: 'steakhouses', isChecked: false},
        {id: 16, name: 'Thai', yelpName: 'thai', isChecked: false}
      ]
    }
    this.handleZipChange = this.handleZipChange.bind(this)
    this.handleActChange = this.handleActChange.bind(this)
    this.handleFoodChange = this.handleFoodChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleZipChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleActChange(event) {
   let activities = this.state.activities
   activities.forEach(activity => {
     if (activity.name === event.target.name) {
       activity.isChecked = event.target.checked
     }
   })
   this.setState({activities: activities})
  }

  handleFoodChange(event) {
    let food = this.state.food
    food.forEach(food => {
      if (food.name === event.target.name) {
        food.isChecked = event.target.checked
      }
    })
    this.setState({food: food})
  }

  async handleSubmit() {
    const checkedActivities = this.state.activities.filter(activity => activity.isChecked === true)
    const checkedFood = this.state.food.filter(food => food.isChecked === true)

    if (this.state.zip.length !== 5) {
      this.setState({
        zipError: true
      })
      return
    }

    await this.props.setActivities(checkedActivities)
    await this.props.setFood(checkedFood)
    await this.props.setZip(this.state.zip)
    if (checkedActivities.length > 0 && checkedFood.length > 0) {
      this.props.history.push('/itinerary')
    } else {
      alert('Please select at least one activity and one food category')
    }
  }

  render() {
    const { classes } = this.props
    console.log(this.state.zipError)
    return (
      <div>
        <a href='/'>
          <img src={logo} alt='logo' className='logo' />
        </a>
        <div className='info-container'>
          <Container className={classes.container}>
            <h1>Select all activities that peak your interest</h1>
            <Box>
              <FormControl component='fieldset' variant='standard'>
                <FormGroup className={classes.checkBox}>
                  <FormControlLabel
                    control={
                      <Checkbox checked={this.state.activities[0].isChecked}
                      onChange={this.handleActChange} name='Biking'/>
                    }
                    label='Biking'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={this.state.activities[1].isChecked}
                      onChange={this.handleActChange} name='Bowling'/>
                    }
                    label='Bowling'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={this.state.activities[2].isChecked}
                      onChange={this.handleActChange} name='Golf'/>
                    }
                    label='Golf'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={this.state.activities[3].isChecked}
                      onChange={this.handleActChange} name='Yoga'/>
                    }
                    label='Yoga'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={this.state.activities[4].isChecked}
                      onChange={this.handleActChange} name='Arcades'/>
                    }
                    label='Arcades'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={this.state.activities[5].isChecked}
                      onChange={this.handleActChange} name='Art Galleries'/>
                    }
                    label='Art Galleries'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={this.state.activities[6].isChecked}
                      onChange={this.handleActChange} name='Art Museums'/>
                    }
                    label='Art Museums'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={this.state.activities[7].isChecked}
                      onChange={this.handleActChange} name='Day Spas'/>
                    }
                    label='Day Spas'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={this.state.activities[8].isChecked}
                      onChange={this.handleActChange} name='Shopping'/>
                    }
                    label='Shopping'
                  />
                </FormGroup>
              </FormControl>
            </Box>
          </Container>
          <hr/>
          <Container className={classes.container}>
            <h1>What type of food are you in the mood for?</h1>
            <Box>
              <FormControl component='fieldset' variant='standard'>
                <FormGroup className={classes.checkBox}>
                  <FormControlLabel
                    control={
                      <Checkbox checked={this.state.food[0].isChecked}
                      onChange={this.handleFoodChange} name='American'/>
                    }
                    label='American'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={this.state.food[1].isChecked}
                      onChange={this.handleFoodChange} name='Asian Fusion'/>
                    }
                    label='Asian Fusion'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={this.state.food[2].isChecked}
                      onChange={this.handleFoodChange} name='Barbeque'/>
                    }
                    label='Barbeque'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={this.state.food[3].isChecked}
                      onChange={this.handleFoodChange} name='Chinese'/>
                    }
                    label='Chinese'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={this.state.food[4].isChecked}
                      onChange={this.handleFoodChange} name='Greek'/>
                    }
                    label='Greek'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={this.state.food[5].isChecked}
                      onChange={this.handleFoodChange} name='Indian'/>
                    }
                    label='Indian'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={this.state.food[6].isChecked}
                      onChange={this.handleFoodChange} name='Italian'/>
                    }
                    label='Italian'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={this.state.food[7].isChecked}
                      onChange={this.handleFoodChange} name='Japanese'/>
                    }
                    label='Japanese'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={this.state.food[8].isChecked}
                      onChange={this.handleFoodChange} name='Latin American'/>
                    }
                    label='Latin American'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={this.state.food[9].isChecked}
                      onChange={this.handleFoodChange} name='Mediterranean'/>
                    }
                    label='Mediterranean'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={this.state.food[10].isChecked}
                      onChange={this.handleFoodChange} name='Mexican'/>
                    }
                    label='Mexican'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={this.state.food[11].isChecked}
                      onChange={this.handleFoodChange} name='Middle Eastern'/>
                    }
                    label='Middle Eastern'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={this.state.food[12].isChecked}
                      onChange={this.handleFoodChange} name='Pizza'/>
                    }
                    label='Pizza'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={this.state.food[13].isChecked}
                      onChange={this.handleFoodChange} name='Seafood'/>
                    }
                    label='Seafood'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={this.state.food[14].isChecked}
                      onChange={this.handleFoodChange} name='Steakhouses'/>
                    }
                    label='Steakhouses'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={this.state.food[15].isChecked}
                      onChange={this.handleFoodChange} name='Thai'/>
                    }
                    label='Thai'
                  />
                </FormGroup>
              </FormControl>
            </Box>
          </Container>
          <hr/>
          <Container className={classes.zipBox, classes.container}>
          <h1>Enter Your Zip Code</h1>
            <TextField
              label='Zipcode'
              required
              variant='outlined'
              name='zip'
              value={this.state.zip}
              onChange={this.handleZipChange}
              className={classes.zip}
              error={this.state.zipError}
              // errorText='Please enter a valid zip code'
            />
            </Container>
            <Button
              type='submit'
              variant='contained'
              color='secondary'
              className={classes.generate}
              onClick={this.handleSubmit}
              >
              Generate
            </Button>
        </div>
      </div>
    )
  }
}

const mapDispatch = (dispatch) => {
  return {
    setZip: (zip) => dispatch(setZip(zip)),
    setActivities: (activities) => dispatch(setActivities(activities)),
    setFood: (food) => dispatch(setFood(food))
  }
}

export default connect(null, mapDispatch)(withStyles(useStyles)(Info))
