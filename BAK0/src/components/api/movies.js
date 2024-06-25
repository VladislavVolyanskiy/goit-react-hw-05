import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '1d0db205f4afc65ebf6adbf1c9b73dc6',
    // Authorization:
    //   'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDBkYjIwNWY0YWZjNjVlYmY2YWRiZjFjOWI3M2RjNiIsIm5iZiI6MTcxOTE3MzUyMi42MzIyODIsInN1YiI6IjY0NDJmMTNkZDM1ZGVhMDUwNWZiMWViYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iNVfOYc16I-CbVU3uSjKXPr37OIjNOAXbEJ1F3mkg34',
  },
});

export const getTrendingMovies = async page => {
  const { data } = await instance.get('/trending/movie/week', {
    params: {
      page,
    },
  });

  return data;
};

export const getSingleMovie = async id => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};

export const getSingleMovieCredits = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data;
};

export const getSingleMovieReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data;
};

export const getSearchMovie = async query => {
  const { data } = await instance.get(`/search/movie`, {
    params: {
      query,
    },
  });
  return data;
};
