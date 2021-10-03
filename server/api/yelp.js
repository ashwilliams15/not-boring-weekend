const router = require('express').Router();
module.exports = router;
const axios = require('axios');

if (process.env.NODE_ENV !== 'production') require ('../../secrets');

const URL = 'https://api.yelp.com/v3/businesses/search'


router.get('/morning/:zip&:activity', async (req, res, next) => {
  try {
    const { data } = await axios.get(URL, {
      headers: {
        authorization: `Bearer ${process.env.YELP_API_KEY}`
      },
      params: {
        location: req.params.zip,
        categories: req.params.activity,
        limit: 30,
        radius: 30000
      }
    })
    res.json(data)
  } catch (err) {
    console.log(err)
  }
})

router.get('/afternoon/:zip&:activity', async (req, res, next) => {
  try {
    const { data } = await axios.get(URL, {
      headers: {
        authorization: `Bearer ${process.env.YELP_API_KEY}`
      },
      params: {
        location: req.params.zip,
        categories: req.params.activity,
        limit: 30,
        radius: 30000
      }
    })
    res.json(data)
  } catch (err) {
    console.log(err)
  }
})

router.get('/lunch/:zip&:food', async (req, res, next) => {
  try {
    const { data } = await axios.get(URL, {
      headers: {
        authorization: `Bearer ${process.env.YELP_API_KEY}`
      },
      params: {
        location: req.params.zip,
        categories: req.params.food,
        limit: 30,
        radius: 30000,
        price: '1, 2'
      }
    })
    res.json(data)
  } catch (err) {
    console.log(err)
  }
})

router.get('/dinner/:zip&:food', async (req, res, next) => {
  try {
    const { data } = await axios.get(URL, {
      headers: {
        authorization: `Bearer ${process.env.YELP_API_KEY}`
      },
      params: {
        location: req.params.zip,
        categories: req.params.food,
        limit: 30,
        radius: 30000,
        price: '2, 3, 4'
      }
    })
    res.json(data)
  } catch (err) {
    console.log(err)
  }
})


