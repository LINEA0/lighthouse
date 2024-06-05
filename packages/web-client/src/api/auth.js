import axios from 'axios'

// if NODE_ENV is production use the production URL
// if not, use the development URL

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:3000'
}

export const registerRequest = user => axios.post('/api/register', user)
