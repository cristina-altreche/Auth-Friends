import axios from "axios";
//THIS IS STANDARD FORMAT FOR AXIOSWITHAUTH

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      authorization: token,
    },
  });
};
