import axios from 'axios';


export const fetchMorning = async (zip) => {
  try {
    const { data } = await axios.get(`/api/yelp/morning/${zip}`)
    return data.businesses
  } catch (err) {
    console.log(err)
  }
}

export const fetchAfternoon = async (zip) => {
  try {
    const { data } = await axios.get(`/api/yelp/afternoon/${zip}`)
    return data.businesses
  } catch (err) {
    console.log(err)
  }
}

export const fetchLunch = async (zip) => {
  try {
    const { data } = await axios.get(`/api/yelp/lunch/${zip}`)
    return data.businesses
  } catch (err) {
    console.log(err)
  }
}

export const fetchDinner = async (zip) => {
  try {
    const { data } = await axios.get(`/api/yelp/dinner/${zip}`)
    return data.businesses
  } catch (err) {
    console.log(err)
  }
}


