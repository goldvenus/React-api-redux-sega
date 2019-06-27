import axios from "axios";

export const getDataAsync = async (url, data) => {
  return await axios.get(url, {
    params: data
  }).then(res => {
    if (res.status === 200) {
      return res.data.data;
    } else {
      return false;
    }
  }).catch(err => {
    return false;
  });
};

export const postDataAsync = async (url, data) => {
  console.log("post request: ", data);
  return await axios.post(url, data).then(res => {
    if (res.status === 200) {
      return res.data.data;
    } else {
      return false;
    }
  }).catch(err => {
    return false;
  });
};

export const putDataAsync = async (url, data) => {
  console.log("post request: ", data);
  return await axios.put(url, data).then(res => {
    if (res.status === 200) {
      return res.data.data;
    } else {
      return false;
    }
  }).catch(err => {
    return false;
  });
};

export const deleteDataAsync = async (url, data) => {
  return await axios.delete(url, {params: data}).then(res => {
    if (res.status === 200) {
      return res.data.data;
    } else {
      return false;
    }
  }).catch(err => {
    console.log(err.response);
    return false;
  });
};