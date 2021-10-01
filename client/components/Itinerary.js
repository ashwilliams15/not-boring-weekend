import React from 'react';
import { fetchMorning, fetchAfternoon, fetchLunch, fetchDinner } from '../store/yelp';
import { Grid, Card, CardContent, Typography, withStyles, CardMedia, ThemeProvider, createTheme, Box, Link } from '@material-ui/core'

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
    'align-items': 'center'
  },
  name: {
    paddingTop: 25,
    'align-items': 'center'
  },
  rating: {
    paddingTop: 5,
    display: 'flex',
    'flex-direction': 'row',
    // 'justify-content': 'space-evenly',
    // 'align-items': 'center'
  },
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
    console.log('mNum', mNum)
    const lNum = randomNum(this.state.lunch.length)
    console.log('lNum', lNum)
    const aNum = randomNum(this.state.afternoon.length)
    console.log('aNum', aNum)
    const dNum = randomNum(this.state.dinner.length)
    console.log('dNum', dNum)

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
          <Grid container justifyContent='center' direction='column' className={classes.grid}>
            <div>
              <h1>Morning</h1>
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
                      <Typography gutterBottom variant="h6">
                        Rating: {morning[mNum].rating} stars
                      </Typography>
                      <Link href={morning[mNum].url}>
                        View on Yelp
                      </Link>
                    </CardContent>
                    <CardContent className={classes.rating}>
                      <Typography gutterBottom variant="h6">
                        Address: {morning[mNum].location.display_address.join(', ')}
                      </Typography>
                      <Typography gutterBottom variant='h6'>
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
                      <Typography gutterBottom variant="h6">
                        Rating: {lunch[lNum].rating} stars
                      </Typography>
                      <Link href={lunch[lNum].url}>
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
              <h1>Afternoon</h1>
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
                      <Typography gutterBottom variant="h6">
                        Rating: {afternoon[aNum].rating} stars
                      </Typography>
                      <Link href={afternoon[aNum].url}>
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
                      <Typography gutterBottom variant="h6">
                        Rating: {dinner[dNum].rating} stars
                      </Typography>
                      <Link href={dinner[dNum].url}>
                        View on Yelp
                      </Link>
                      <Typography gutterBottom variant="h6">>
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
            <Typography>
              Not sold?
            </Typography>
          </Grid>
        ) : <h1>Loading...</h1>}
      </div>
    )
  }
}


export default withStyles(useStyles)(Itinerary)
