import React from 'react'
import { Box, Button } from '@material-ui/core';

export const Home = props => {
  const { classes } = props;

  return (
    <div className='home-container'>
      <center className='home-content'>
      <h1>Sick of boring weekends? Let's plan your day off.</h1>
      <h3>Click the button below to generate your itinerary</h3>
      <Box pt={3}>
      <Button variant='contained' color='secondary'>
        Generate
      </Button>
      </Box>
      </center>
    </div>
  )
}

// import React from 'react'
// import { Card, CardContent, Button, Typography, withStyles, Paper } from '@material-ui/core';

// const useStyles = () => ({
//   root: {
//     maxWidth: '100%',
//     height: '100%',
//     margin: 'auto',
//     display: 'flex'
//   },
//   content: {
//     margin: 'auto'
//   }
// })

// export const Home = props => {
//   const { classes } = props;

//   return (
//     <Paper className={classes.root}>
//       <div className={classes.content}>
//       <h1>Hello World!</h1>
//       </div>
//     </Paper>
//   )
// }


// export default withStyles(useStyles)(Home);
export default Home;
