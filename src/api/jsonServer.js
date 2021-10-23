import axios from 'axios'

export default axios.create({
    baseURL: 'http://55b6-2600-8800-6006-fe00-15bf-4cc6-a800-1288.ngrok.io' //will change each time you run ngrok
})