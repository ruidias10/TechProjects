import Axios from 'axios';

Axios.interceptors.response.use((response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 404) {
      error.response.data.message = "Page not found: " + error.config.url;
    }
    console.log("==========> ", error);
    return Promise.reject(error);
  }
);


export default Axios;