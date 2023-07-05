import axios from 'axios';

const api = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie/`,
});

api.interceptors.request.use(async (req) => {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTY4MjA4N2NhMzBkZjI4MjEwZmMxMGM3MzAyNDgwZiIsInN1YiI6IjY0YTM3MmJlOGUyMGM1MDBhZTEzNWQ1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V3Dc84AnPUzbXki9S7kZM7rF0hDw2kC7uPTCAxO96cM';
    req.headers.Authorization = `Bearer ${token}`;
    return req;
  });

export default api;