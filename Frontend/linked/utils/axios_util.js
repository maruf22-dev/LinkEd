import axios from 'axios'

const axios_util = async (URL, POST_OBJECT) => {
    let POST_RESPONSE = await axios.post(
        URL,
        POST_OBJECT
    );
    return POST_RESPONSE;
}

export default axios_util