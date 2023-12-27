import { api } from "./api"

export const getTrending = async () => {
    const { data } = await api(`/trending/movie/day?api_key=2e39566998eaefb55fd8d83f773b6784`)
    return data
}

export const getMovie = async (id) => {
    const { data } = await api(`/movie/${id}?api_key=2e39566998eaefb55fd8d83f773b6784&language=en-US`)
    return data
}
