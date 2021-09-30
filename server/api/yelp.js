const router = require('express').Router();
module.exports = router;
const axios = require('axios');

if (process.env.NODE_ENV !== 'production') require ('../../secrets');

const URL = 'https://api.yelp.com/v3/businesses/search'

//morning activity call to yelp fusion api
router.get('/morning', async (req, res, next) => {
  try {
    const { data } = await axios.get(URL, {
      headers: {
        authorization: `Bearer ${process.env.YELP_API_KEY}`
      },
      params: {
        location: 'Salt Lake City',
        categories: 'artmuseums',
        limit: 10,
        radius: 30000
      }
    })
    res.json(data)
  } catch (err) {
    console.log(err)
  }
})

//afternoon activity call to yelp fusion api
router.get('/afternoon', async (req, res, next) => {
  try {
    const { data } = await axios.get(URL, {
      headers: {
        authorization: `Bearer ${process.env.YELP_API_KEY}`
      },
      params: {
        location: 'Salt Lake City',
        categories: 'fashion',
        limit: 10,
        radius: 30000
      }
    })
    res.json(data)
  } catch (err) {
    console.log(err)
  }
})

//lunch call to yelp fusion api
/*
router.get('/lunch', async (req, res, next) => {
  try {
    const { data } = await axios.get(URL, {
      headers: {
        authorization: `Bearer ${process.env.YELP_API_KEY}`
      },
      params: {
        location: 'Salt Lake City',
        categories: 'artmuseums',
        limit: 10,
        radius: 30000
      }
    })
    res.json(data)
  } catch (err) {
    console.log(err)
  }
})
*/

//dinner activity call to yelp fusion api
 /*
router.get('/dinner', async (req, res, next) => {
  try {
    const { data } = await axios.get(URL, {
      headers: {
        authorization: `Bearer ${process.env.YELP_API_KEY}`
      },
      params: {
        location: 'Salt Lake City',
        categories: 'artmuseums',
        limit: 10,
        radius: 30000
      }
    })
    res.json(data)
  } catch (err) {
    console.log(err)
  }
})

*/
