const router = require('express').Router();
module.exports = router;
const axios = require('axios');

if (process.env.NODE_ENV !== 'production') require ('../../secrets');

const URL = 'https://api.yelp.com/v3/businesses/search'

//call to yelp fusion api
router.get('/', async (req, res, next) => {
  try {
    const { data } = await axios.get(URL, {
      headers: {
        authorization: `Bearer ${process.env.YELP_API_KEY}`
      },
      params: {
        location: 'Salt Lake City',
        categories: 'artmuseums',
        limit: 10,
        radius: 25000
      }
    })
    res.json(data)
  } catch (err) {
    console.log(err)
  }
})
