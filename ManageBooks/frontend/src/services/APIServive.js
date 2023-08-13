import Axios from './AxiosInterceptor';
import Config from "../config/Config"


export const APIServiceGet = async (path, token = null) => {
  const url = Config.baseURl + path;
  
  try {
    const headers = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers.Authorization = token;
    }

    const response = await Axios.get(url, {
      headers,
    });   
    
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const APIServicePost = async (path, data, token = null) => {
  const url = Config.baseURl + path;

  try {
    const headers = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers.Authorization = token;
    }
    
    const response = await Axios.post(url, JSON.stringify(data), {
      headers,
    });       

    return response;

  } catch (error) {
    return Promise.reject(error);
  }
};

export const APIServiceDelete = async (path, token) => {
  const url = Config.baseURl + path;

  try {
    const headers = {
      "Content-Type": "application/json",
      "Authorization": token
    };

    const response = await Axios.delete(url, {
      headers,
    });   
    
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const APIServiceUpdate = async (path, data, token) => { 
  const url = Config.baseURl + path;

  try {
    const headers = {
      "Content-Type": "application/json",
      "Authorization": token
    };

    const response = await Axios.put(url, JSON.stringify(data), {
      headers,
    });   
    
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}; 
