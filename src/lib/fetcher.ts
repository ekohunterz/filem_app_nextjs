import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
axios.defaults.params = {
  api_key: process.env.NEXT_PUBLIC_API_KEY,
  language: 'en-US',
}

const fetcher = async (url: string) =>
  await axios.get(url).then((res) => res.data)

export const fetchDetail = async (url: string) =>
  await axios
    .get(url, { params: { append_to_response: 'credits' } })
    .then((res) => res.data)

export default fetcher
