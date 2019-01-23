import axios from 'axios'

const DOMAIN = 'https://pokeapi.co/api/v2'
const limit = 7

const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data
  }).catch(result => console.log(result.response.data))
}

export const common = {
  get (url) {
    return request('GET', url)
      .then(result => result.data)
  }
}

export const pokemon = {
  fetch () {
    return request('GET', `/pokemon/?limit=${limit}`)
      .then(result => result.data)
  }
}
