import axios from "axios";

export const axiosSecure = axios.create({
     baseURL : 'https://remembering-our-heroes-server.vercel.app'
   //  baseURL : 'http://localhost:5000'
})

const useAxiosSecure = () => {
   return axiosSecure;
};

export default useAxiosSecure;