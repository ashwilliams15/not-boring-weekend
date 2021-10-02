import React from 'react';
import logo from '../../public/full-logo.png'
import { TextField, Box, Button, withStyles, Container } from '@material-ui/core';
import Itinerary from './Itinerary';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setZip } from '../store/zip';

const useStyles = () => ({
  box: {
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
    alignSelf: 'center',
    marginTop: 25
  }
})

class Info extends React.Component {
  constructor() {
    super()
    this.state = {
      zip: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  async handleSubmit() {
    //await call thunk that will update redux store with zipcode
    //then redirect to /itinerary
    await this.props.setZip(this.state.zip)
    this.props.history.push('/itinerary')
  }

  render() {
    const { classes } = this.props
    console.log('zip state', this.state.zip)

    return (
      <div>

        <img src={logo} alt='logo' className='logo' />
        <div className='info-container'>
          <h1>Enter Your Zip Code</h1>
          <Container className={classes.box}>
            <TextField
              label='Zipcode'
              required
              variant='outlined'
              name='zip'
              value={this.state.zip}
              onChange={this.handleChange}
              className={classes.zip}
            />
            <Button
              type='submit'
              variant='contained'
              color='secondary'
              className={classes.generate}
              onClick={this.handleSubmit}
              >
              Generate
            </Button>
          </Container>
        </div>
      </div>
    )
  }
}

const mapDispatch = (dispatch) => {
  return {
    setZip: (zip) => dispatch(setZip(zip))
  }
}

export default connect(null, mapDispatch)(withStyles(useStyles)(Info))
