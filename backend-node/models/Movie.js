function Movie(
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
) {
  return {
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
    link,
  }
}

module.exports = Movie
