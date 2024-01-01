import { api } from "./api"

export const getTrending = async () => {
    const { data } = await api(`/trending/movie/day?api_key=2e39566998eaefb55fd8d83f773b6784`)
    return data
}

export const getMovieDetails = async (id) => {
    const { data } = await api(`/movie/${id}?api_key=2e39566998eaefb55fd8d83f773b6784&language=en-US`)
    return data
}

export const getSearchMovie = async (query) => {
    const { data } = await api(`/search/movie?api_key=2e39566998eaefb55fd8d83f773b6784&query=${query}&include_adult=false&language=en-US&page=1`)
    return data
}

export const getCastMovie = async (id) => {
    const { data } = await api(`movie/${id}/credits?language=en-US&api_key=2e39566998eaefb55fd8d83f773b6784`)
    return data
}

export const getReviews = async (id) => {
    const { data } = await api(`/movie/${id}/reviews?language=en-US&page=1&api_key=2e39566998eaefb55fd8d83f773b6784`)
    return data
}

