import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-6f1bf-default-rtdb.europe-west1.firebasedatabase.app'
})