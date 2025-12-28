const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const { getGenreFromAI } = require('./services/aiService')
const { getMoviesByGenre } = require('./services/movieService')
const { quickSortMoviesByRating } = require('./services/sortService')

dotenv.config()

const app = express()
app.use(express.json())

const corsOptions = {
  origin: ['http://localhost:3000', 'https://getstartedanime.vercel.app'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}

app.use(cors(corsOptions))

// Define allowed genres
const allowedGenres = [
  'Action',
  'Adventure',
  'Comedy',
  'Crime',
  'Documentary',
  'Drama',
  'Family',
  'Fantasy',
  'History',
  'Horror',
  'Music',
  'Mystery',
  'Romance',
  'Science Fiction',
  'Thriller',
  'TV Movie',
  'War',
  'Western',
]

app.post('/recommend', async (req, res) => {
  const { input } = req.body
  if (!input) return res.status(400).json({ error: "Missing 'input' field" })

  console.log('Received input:', input)

  const genre = await getGenreFromAI(input)

  if (!genre) return res.status(500).json({ error: 'Genre not determined' })

  // Check if genre is in allowed list
  if (!allowedGenres.includes(genre)) {
    console.log('Genre not found in allowed list')
    return res.json('Not found')
  }

  console.log('Detected genre:', genre)

  const movies = await getMoviesByGenre(genre)
  const sortedMovies = quickSortMoviesByRating(movies)

  res.json(sortedMovies)
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
