import axios from 'axios'

const DOMAIN = 'https://pokeapi.co/api/v2'
const limit = 10

const request = (method, url, data) => {
  return axios({
    method,
    url: url,
    data
  }).catch(result => console.log(result.response.data))
}

export const common = {
  fetch (url = `${DOMAIN}/pokemon/?limit=${limit}`) {
    return request('GET', url)
      .then(result => result.data)
  }
}

export const pokemon = {
  get (id) {
    return request('GET', `${DOMAIN}/pokemon/${id}`)
      .then(result => result.data)
  }
}
