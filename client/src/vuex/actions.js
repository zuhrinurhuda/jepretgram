import axios from 'axios'

const http = axios.create({
  baseURL: 'ec2-54-149-213-170.us-west-2.compute.amazonaws.com'
})

const actions = {
  addPhoto: ({ commit }, payload) => {
    // console.log('--> ini di action', payload)
    http.post('/photos', payload, { headers: { token: localStorage.getItem('token') } })
    .then(({ data }) => {
      commit('setNewPhoto', data)
    })
    .catch(err => console.log(err))
  },
  getPhotos: ({ commit }) => {
    // console.log('--> ini di action', payload)
    http.get('/photos')
    .then(({ data }) => {
      commit('setPhotos', data)
    })
    .catch(err => console.log(err))
  }
}

export default actions
