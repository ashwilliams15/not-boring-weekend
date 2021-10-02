const router = require('express').Router();
module.exports = router;
const axios = require('axios');

if (process.env.NODE_ENV !== 'production') require ('../../secrets');

const URL = 'https://api.yelp.com/v3/businesses/search'

//morning activity call to yelp fusion api
router.get('/morning/:zip', async (req, res, next) => {
  try {
    const { data } = await axios.get(URL, {
      headers: {
        authorization: `Bearer ${process.env.YELP_API_KEY}`
      },
      params: {
        location: req.params.zip,
        categories: 'artmuseums',
        limit: 30,
        radius: 30000
      }
    })
    res.json(data)
  } catch (err) {
    console.log(err)
  }
})

//afternoon activity call to yelp fusion api
router.get('/afternoon/:zip', async (req, res, next) => {
  try {
    const { data } = await axios.get(URL, {
      headers: {
        authorization: `Bearer ${process.env.YELP_API_KEY}`
      },
      params: {
        location: req.params.zip,
        categories: 'fashion',
        limit: 30,
        radius: 30000
      }
    })
    res.json(data)
  } catch (err) {
    console.log(err)
  }
})

//lunch call to yelp fusion api

router.get('/lunch/:zip', async (req, res, next) => {
  try {
    const { data } = await axios.get(URL, {
      headers: {
        authorization: `Bearer ${process.env.YELP_API_KEY}`
      },
      params: {
        location: req.params.zip,
        categories: 'chinese',
        limit: 30,
        radius: 30000
      }
    })
    res.json(data)
  } catch (err) {
    console.log(err)
  }
})


//dinner call to yelp fusion api

router.get('/dinner/:zip', async (req, res, next) => {
  try {
    const { data } = await axios.get(URL, {
      headers: {
        authorization: `Bearer ${process.env.YELP_API_KEY}`
      },
      params: {
        location: req.params.zip,
        categories: 'newamerican',
        limit: 30,
        radius: 30000,
        // attributes: 'reservation'
      }
    })
    res.json(data)
  } catch (err) {
    console.log(err)
  }
})


