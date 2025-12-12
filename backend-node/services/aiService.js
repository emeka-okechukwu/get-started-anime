const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config()

async function getGenreFromAI(movies) {
  const prompt = `My favorite movies are: ${movies}. 

Please provide ONLY a single genre from this exact list (no other text):
Action, Adventure, Comedy, Crime, Documentary, Drama, Family, Fantasy, History, Horror, Music, Mystery, Romance, Science Fiction, Thriller, TV Movie, War, Western.`

  try {
    const response = await axios.post(
      'https://api.cohere.ai/v1/chat',
      {
        model: 'command-a-03-2025',
        message: prompt,
        temperature: 0.1,
        max_tokens: 10,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    )

    const text = response.data.text?.trim()
    return text || ''
  } catch (err) {
    console.error('Cohere Chat API error:', err.response?.data || err.message)
    return ''
  }
}

module.exports = { getGenreFromAI }
