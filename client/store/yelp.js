import axios from 'axios';


export const fetchMorning = async (zip, activities) => {
  try {
    let morningActivity = activities[Math.floor(Math.random() * activities.length)]

    const { data } = await axios.get(`/api/yelp/morning/${zip}&${morningActivity.yelpName}`)
    return data.businesses
  } catch (err) {
    console.log(err)
  }
}

export const fetchAfternoon = async (zip, activities) => {
  try {
    let afternoonActivity = activities[Math.floor(Math.random() * activities.length)]



    const { data } = await axios.get(`/api/yelp/afternoon/${zip}&${afternoonActivity.yelpName}`)
    return data.businesses
  } catch (err) {
    console.log(err)
  }
}

export const fetchLunch = async (zip, food) => {
  try {
    let lunchSpot = food[Math.floor(Math.random() * food.length)]

    const { data } = await axios.get(`/api/yelp/lunch/${zip}&${lunchSpot.yelpName}`)
    return data.businesses
  } catch (err) {
    console.log(err)
  }
}

export const fetchDinner = async (zip, food) => {
  try {
    let dinnerSpot = food[Math.floor(Math.random() * food.length)]

    const { data } = await axios.get(`/api/yelp/dinner/${zip}&${dinnerSpot.yelpName}`)
    return data.businesses
  } catch (err) {
    console.log(err)
  }
}


