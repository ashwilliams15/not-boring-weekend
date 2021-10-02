import React from 'react';
import logo from '../../public/full-logo.png'
import { TextField, Box, Button, withStyles, Container } from '@material-ui/core';

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
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    const { classes } = this.props
    console.log('zip state', typeof this.state.zip)
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

export default withStyles(useStyles)(Info)
