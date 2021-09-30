import axios from 'axios';

//call to server to call yelp

//eventually this will take in params like categories
export const fetchBusiness = async () => {
  try {
    const { data } = await axios.get('/api/yelp')
    return data.businesses
  } catch (err) {
    console.log(err)
  }
}
