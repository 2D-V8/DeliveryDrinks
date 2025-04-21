import axios from "axios";

const ApiDrinks = axios.create({
    baseURL: 'http://192.168.18.172:3000/api',
    headers: {
        'Content-Type': 'application/json'
    }
})

export { ApiDrinks }