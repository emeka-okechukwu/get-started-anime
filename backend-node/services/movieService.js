const axios = require('axios')
const Movie = require('../models/Movie')

const genreMap = {
  Action: 28,
  Adventure: 12,
  Comedy: 35,
  Crime: 80,
  Documentary: 99,
  Drama: 18,
  Family: 10751,
  Fantasy: 14,
  History: 36,
  Horror: 27,
  Music: 10402,
  Mystery: 9648,
  Romance: 10749,
  'Science Fiction': 878,
  Thriller: 53,
  'TV Movie': 10770,
  War: 10752,
  Western: 37,
}

const apiKey = process.env.TMDB_API_KEY
const movieMap = new Map()

async function getMoviesByGenre(genre) {
  const genreId = genreMap[genre]
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId},16&with_original_language=ja`

  try {
    const { data } = await axios.get(url)
    for (const result of data.results) {
      const id = result.id
      const title = result.title
      const synopsis = result.overview
      const releaseDate = result.release_date || '0000'
      const year = releaseDate.substring(0, 4)
      const genres = await getMovieGenres(id)
      const cast = await getMovieCast(id)
      const rating = result.vote_average
      const runtime = await getRuntime(id)
      const posterImage = result.poster_path
      const backdropImage = result.backdrop_path
      const link = `https://www.themoviedb.org/movie/${id}`

      const movie = new Movie(
        id,
        title,
        synopsis,
        year,
        genres,
        cast,
        rating,
        runtime,
        posterImage,
        backdropImage,
        link
      )
      movieMap.set(id, movie)
    }

    return Array.from(movieMap.values())
  } catch (err) {
    console.error('TMDB API error:', err.response?.data || err.message)
    return []
  }
}

async function getMovieGenres(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
  const { data } = await axios.get(url)
  return data.genres?.map((g) => g.name) || []
}

async function getMovieCast(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`
  const { data } = await axios.get(url)
  return data.cast?.slice(0, 3).map((c) => c.name) || []
}

async function getRuntime(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
  const { data } = await axios.get(url)
  return data.runtime || 0
}

module.exports = { getMoviesByGenre }
