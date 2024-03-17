const key = '5f9c91f10d1c4a594e451ec33175416b'
const baseUrl = 'https://api.themoviedb.org/3'

const endpoints = {
    popular: `${baseUrl}/movie/popular?api_key=${key}`,
    topRated: `${baseUrl}/movie/top_rated?api_key=${key}`,
    trending: `${baseUrl}/movie/popular?api_key=${key}&language=en-US&page=2`,
    comedy: `${baseUrl}/search/movie?api_key=${key}&language=en-US&query=comedy&page=1&include_adult=false`,
    upcoming: `${baseUrl}/movie/upcoming?api_key=${key}`,
}

export function createImageUrl(filename,size){
    return `https://image.tmdb.org/t/p/${size}/${filename}`
}
export default endpoints