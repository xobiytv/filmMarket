import { api_key } from "../constants";
import { apiRequse } from "./axios";

const base_url = 'https://api.themoviedb.org/3/';

const tredingMove = `${base_url}/trending/movie/day?api_key=${api_key}`;
const upcamingMovie = `${base_url}/movie/upcoming?api_key=${api_key}`;
const topRatedMovie = `${base_url}/movie/top_rated?api_key=${api_key}`;
const popularMovie = `${base_url}/movie/popular?api_key=${api_key}`;


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

export const image500 = posterPath => {
    return posterPath ? 'https://image.tmdb.org/t/p/w500' + posterPath : null;
}
export const image342 = posterPath => {
    return posterPath ? 'https://image.tmdb.org/t/p/w343' + posterPath : null;

}
export const image185 = posterPath => {
    return posterPath ? 'https://image.tmdb.org/t/p/w185' + posterPath : null;

}