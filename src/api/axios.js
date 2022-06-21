import axios from 'axios'

const api =
  require[
    {
      user: 'Karthik',
      email: 'karthik@gmail.com',
      pwd: '@@12345Dfg',
    }
  ]

export default axios.create({
  baseURL: 'http://localhost:3500',
})
