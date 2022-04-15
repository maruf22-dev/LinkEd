import axios from 'axios'

const axios_util = async (URL, POST_OBJECT) => {
    URL = "http://localhost:3001/api/v1" + URL;
    let POST_RESPONSE = await axios.post(URL, POST_OBJECT);
    return POST_RESPONSE.data;
}

export default axios_util