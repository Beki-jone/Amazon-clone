import axios from "axios"
const axiosInstance= axios.create({
    baseURL: "https://api-gucimhmeia-uc.a.run.app"
})
export {axiosInstance}