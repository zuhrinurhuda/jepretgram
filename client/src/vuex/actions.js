import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000'
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
