import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-fir-with-nextjs-tutorial.cloudfunctions.net",
});

// export default instance;

// utils/axios.js
// import axios from "axios";

// const instance = axios.create({
//   baseURL: "https://us-central1-fir-with-nextjs-tutorial.cloudfunctions.net",
//   headers: {
//     "Content-Type": "application/json",
//     // Add any other headers you need
//   },
// });

// // Add interceptors or other global configurations if needed
// instance.interceptors.request.use(
//   (config) => {
//     // Modify the request config if needed
//     return config;
//   },
//   (error) => {
//     // Handle request error
//     return Promise.reject(error);
//   }
// );

export default instance;
