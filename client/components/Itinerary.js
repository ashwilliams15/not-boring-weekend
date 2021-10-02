import React from 'react';
import { fetchMorning, fetchAfternoon, fetchLunch, fetchDinner } from '../store/yelp';
import { Grid, Card, CardContent, Typography, withStyles, CardMedia, ThemeProvider, createTheme, Box, Link, Button } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Loading from './Loading';

const useStyles = () => ({
  grid: {
    maxWidth: '75%',
    margin: 'auto',
  },
  root: {
    maxWidth: '100%',
    margin: 'auto',
    display: 'flex',
  },
  media: {
    height: 225,
    width: 200
  },
  box: {
    display: 'flex',
    flex: 1,
    'flex-direction': 'column',
    'align-items': 'center',
  },
  name: {
    paddingTop: 25,
    'align-items': 'center'
  },
  rating: {
    display: 'flex',
    'flex-direction': 'row',
    justifyContent: 'space-around',
    width: '100%',
    '&:last-child': {
      paddingBottom: 0
    }
  },
  elements: {
    paddingLeft: 15,
    paddingRight: 15
  },
  button: {
    marginTop: 20
  }
})

const theme = createTheme({
  typography: {
    fontFamily: 'Noto Sans Display',
  }
})

class Itinerary extends React.Component {
  constructor() {
    super()
    this.state = ({
      morning: [],
      mNum: 0,
      lunch: [],
      lNum: 0,
      afternoon: [],
      aNum: 0,
      dinner: [],
      dNum: 0
    })
  }

  async componentDidMount() {
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

    const randomNum = (length) => {
      return Math.floor(Math.random() * length)
    }

    const mNum = randomNum(this.state.morning.length)
    const lNum = randomNum(this.state.lunch.length)
    const aNum = randomNum(this.state.afternoon.length)
    const dNum = randomNum(this.state.dinner.length)

    this.setState({
      mNum: mNum,
      lNum: lNum,
      aNum: aNum,
      dNum: dNum
    })
  }

  render() {
    const { classes } = this.props
    const { morning, afternoon, lunch, dinner, mNum, lNum, aNum, dNum } = this.state

    return (
      <div>
        {this.state.morning.length > 0 ? (
          <Grid container justifyContent='center' direction='column' className={classes.grid} >
            <div>
              <h1>Morning Activity</h1>
            </div>
            <Grid item>
              <ThemeProvider theme={theme}>
                <Card className={classes.root}>
                  <CardMedia
                    className={classes.media}
                    component='img'
                    image={morning[mNum].image_url}
                    alt={morning[mNum].name}
                  />
                  <Box className={classes.box}>
                    <CardContent className={classes.name}>
                      <Typography gutterBottom variant="h4">
                        {morning[mNum].name}
                      </Typography>
                    </CardContent>
                    <CardContent className={classes.rating}>
                      <Rating name='read-only' value={morning[mNum].rating} readOnly className={classes.elements}/>
                      <Link href={morning[mNum].url} target='_blank' className={classes.elements}>
                        View on Yelp
                      </Link>
                    </CardContent>
                    <CardContent className={classes.rating}>
                      <Typography gutterBottom variant="h6" className={classes.elements}>
                        Address: {morning[mNum].location.display_address.join(', ')}
                      </Typography>
                      <Typography gutterBottom variant='h6' className={classes.elements}>
                        Phone Number: {morning[mNum].display_phone}
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
              </ThemeProvider>
            </Grid>
            <div>
              <h1>Lunch</h1>
            </div>
            <Grid item>
              <ThemeProvider theme={theme}>
                <Card className={classes.root}>
                  <CardMedia
                    className={classes.media}
                    component='img'
                    image={lunch[lNum].image_url}
                    alt={lunch[lNum].name}
                  />
                  <Box className={classes.box}>
                    <CardContent className={classes.name}>
                      <Typography gutterBottom variant="h4">
                        {lunch[lNum].name}
                      </Typography>
                    </CardContent>
                    <CardContent className={classes.rating}>
                      <Rating name='read-only' value={morning[mNum].rating} readOnly />
                      <Link href={lunch[lNum].url} target='_blank'>
                        View on Yelp
                      </Link>
                      <Typography gutterBottom variant="h6">
                        Price: {lunch[lNum].price}
                      </Typography>
                    </CardContent>
                    <CardContent className={classes.rating}>
                      <Typography gutterBottom variant="h6">
                        Address: {lunch[lNum].location.display_address.join(', ')}
                      </Typography>
                      <Typography gutterBottom variant='h6'>
                        Phone Number: {lunch[lNum].display_phone}
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
              </ThemeProvider>
            </Grid>
            <div>
              <h1>Afternoon Activity</h1>
            </div>
            <Grid item>
              <ThemeProvider theme={theme}>
                <Card className={classes.root}>
                  <CardMedia
                    className={classes.media}
                    component='img'
                    image={afternoon[aNum].image_url}
                    alt={afternoon[aNum].name}
                  />
                  <Box className={classes.box}>
                    <CardContent className={classes.name}>
                      <Typography gutterBottom variant="h4">
                        {afternoon[aNum].name}
                      </Typography>
                    </CardContent>
                    <CardContent className={classes.rating}>
                      <Rating name='read-only' value={morning[mNum].rating} readOnly />
                      <Link href={afternoon[aNum].url} target='_blank'>
                        View on Yelp
                      </Link>
                    </CardContent>
                    <CardContent className={classes.rating}>
                      <Typography gutterBottom variant="h6">
                        Address: {afternoon[aNum].location.display_address.join(', ')}
                      </Typography>
                      <Typography gutterBottom variant='h6'>
                        Phone Number: {afternoon[aNum].display_phone}
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
              </ThemeProvider>
            </Grid>
            <div>
              <h1>Dinner</h1>
            </div>
            <Grid item>
              <ThemeProvider theme={theme}>
                <Card className={classes.root}>
                  <CardMedia
                    className={classes.media}
                    component='img'
                    image={dinner[dNum].image_url}
                    alt={dinner[dNum].name}
                  />
                  <Box className={classes.box}>
                    <CardContent className={classes.name}>
                      <Typography gutterBottom variant="h4">
                        {dinner[dNum].name}
                      </Typography>
                    </CardContent>
                    <CardContent className={classes.rating}>
                      <Rating name='read-only' value={morning[mNum].rating} readOnly />
                      <Link href={dinner[dNum].url} target='_blank'>
                        View on Yelp
                      </Link>
                      <Typography gutterBottom variant="h6">
                        Price: {dinner[dNum].price}
                      </Typography>
                    </CardContent>
                    <CardContent className={classes.rating}>
                      <Typography gutterBottom variant="h6">
                        Address: {dinner[dNum].location.display_address.join(', ')}
                      </Typography>
                      <Typography gutterBottom variant='h6'>
                        Phone Number: {dinner[dNum].display_phone}
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
              </ThemeProvider>
            </Grid>
            <center id='regenerate'>
              <h1>Not sold?</h1>
              <h3>Click the button below to receive a new itinerary!</h3>
              <Button
                variant='contained'
                color='secondary'
                className={classes.button}
                onClick={() => window.location.reload()}
                >
                Try Again
              </Button>
            </center>
          </Grid>
        ) : <Loading />}
      </div>
    )
  }
}

export default withStyles(useStyles)(Itinerary)
