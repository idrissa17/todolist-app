import axios from 'axios'

export const register = newUser => {
  return axios
    .post('users/register', {
      name: newUser.name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  return axios
    .post('users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data.token)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getProfile = token => {
  return axios
    .get('users/profile', {
      headers: { Authorization: token }
    })
    .then(response => {
      response.data.status = 'success';
      return response.data
    })
    .catch(err => {
      console.dir(err)
      return {'error':err.message,'status':'failed'};
    })
}
