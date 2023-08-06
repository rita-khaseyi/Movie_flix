const BASE_URL = process.env.REACT_APP_BASE_URL;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

export const getMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/3/discover/movie`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return error.message;
  }
};

export const getCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}/3/movie/now_playing`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return error.message;
  }
};

export const MostViewed = async () => {
  try {
    const response = await fetch(`${BASE_URL}3/movie/latest`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return error.message;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}/3/search/movie?query=${query}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );

    const result = await response.json();
    return result;
  } catch (error) {
    return error.message;
  }
};

export const getMovieDetails = async (movieId) => {
  try {
    const response = await fetch(`${BASE_URL}/3/movie/${movieId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });

    const result = await response.json();
    return result;
  } catch (error) {
    return error.message;
  }
};

export const getMovieCredits = async (movieId) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch movie credits');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getGenres = async () => {
  try {
    const response = await fetch(`${BASE_URL}/3/genre/movie/list`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error('Error fetching genres: ' + error.message);
  }
};

export const getGenre = async () => {
  try {
    const response = await fetch(`${BASE_URL}/3/genre/movie/list`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchMovieTrailers = async (movieId) => {
  
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${ACCESS_TOKEN}&language`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch movie trailers');
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  
  export const fetchMovieVideos = async (movieId) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch movie videos');
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  


