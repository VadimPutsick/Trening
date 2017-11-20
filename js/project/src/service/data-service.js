import axios from 'axios';
export class DataService {
    constructor(url) {     
        this.getData = (url) => {
            return axios.get(url)
               
        }
    }
}

