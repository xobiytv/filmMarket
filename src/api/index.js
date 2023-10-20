import { api_key } from "../constants";
import { apiRequse } from "./axios";

const base_url = 'https://api.themoviedb.org/3/';

const tredingMove = `${base_url}/trending/movie/day?api_key=${api_key}`;
const upcamingMovie = `${base_url}/movie/upcoming?api_key=${api_key}`;
const topRatedMovie = `${base_url}/movie/top_rated?api_key=${api_key}`;
const popularMovie = `${base_url}/movie/popular?api_key=${api_key}`;

const movieDetail = id =>
	`${base_url}/movie/${id}?api_key=${api_key}`;
const movieCredits = id =>
	`${base_url}/movie/${id}/credits?api_key=${api_key}`;
const similarMovie = id =>
	`${base_url}/movie/${id}/similar?api_key=${api_key}`;

const personDetail = id => `${base_url}/person/${id}?api_key=${api_key}`
const personMovies = id => `${base_url}/person/${id}/movie_credits?api_key=${api_key}`

const searchMovie = `${base_url}/search/movie?api_key=${api_key}`

export const fetchTrendingMovie = () => {
    return apiRequse(tredingMove)
};
export const fetchUpcomingMovie = () => {
    return apiRequse(upcamingMovie)
};
export const fetchTopratedMovie = () => {
    return apiRequse(topRatedMovie)
};
export const fetchPopularMovie = () => {
    return apiRequse(popularMovie)
};

export const fetchMovieDetail = id => {
    return apiRequse(movieDetail(id))
    
};
export const fetchMovieCredits = id => {
    return apiRequse(movieCredits(id))
};
export const fetchSimilarMovie = id => {
    return apiRequse(similarMovie(id))
};

export const fetchPersonDetail = id => {
    return apiRequse(personDetail(id))
};
export const fetchPersonMovies = id => {
    return apiRequse(personMovies(id))
};

export const fetchSearchMovie = (params) => {
    return apiRequse(searchMovie, params)
}

export const image500 = posterPath => {
    return posterPath ? 'https://image.tmdb.org/t/p/w500' + posterPath : null;
}
export const image342 = posterPath => {
	return posterPath
		? 'https://image.tmdb.org/t/p/w342' + posterPath
		: null;
};

export const image185 = posterPath => {
    return posterPath ? 'https://image.tmdb.org/t/p/w185' + posterPath : null;

}