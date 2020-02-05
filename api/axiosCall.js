import axios from 'axios'

// Make a request for a user with a given ID
const authcall = (() =>
  axios.create({
    headers: {
      'content-type': 'application/json'
    }
  })
)()

export {authcall}