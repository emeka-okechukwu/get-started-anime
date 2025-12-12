function quickSortMoviesByRating(movies) {
  if (movies.length <= 1) return movies

  const pivot = movies[movies.length - 1]
  const left = []
  const right = []

  for (let i = 0; i < movies.length - 1; i++) {
    if (movies[i].rating >= pivot.rating) left.push(movies[i])
    else right.push(movies[i])
  }

  return [
    ...quickSortMoviesByRating(left),
    pivot,
    ...quickSortMoviesByRating(right),
  ]
}

module.exports = { quickSortMoviesByRating }
