import Axios from "axios";

// const url = "http://localhost:5001";
const url = "https://fruitsvegfrontend.herokuapp.com/";

export const onAuthenticated = async (payload) => {
  const axios = Axios.create({
    baseURL: url,
    headers: {
      "Content-type": "application/json",
    },
  });
  const res = await axios(payload.url, {
    method: payload.method,
    data: payload.data,
  });

  return res;
};
