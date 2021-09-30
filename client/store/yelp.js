import axios from 'axios';

//eventually these will take in params like categories

//activities
export const fetchMorning = async () => {
  try {
    const { data } = await axios.get('/api/yelp/morning')
    return data.businesses
  } catch (err) {
    console.log(err)
  }
}

//food
export const fetchAfternoon = async () => {
  try {
    const { data } = await axios.get('/api/yelp/afternoon')
    return data.businesses
  } catch (err) {
    console.log(err)
  }
}

//lunch
/*
export const fetchLunch = async () => {
  try {
    const { data } = await axios.get('/api/yelp/lunch')
    return data.businesses
  } catch (err) {
    console.log(err)
  }
}
*/

//dinner
/*
export const fetchDinner = async () => {
  try {
    const { data } = await axios.get('/api/yelp/dinner')
    return data.businesses
  } catch (err) {
    console.log(err)
  }
}
*/
