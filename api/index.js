import axios from 'axios'

async function getSearch () {
  const {
    data: result
  } = await axios.get('http://api.tvmaze.com/search/shows?q=batman')

  if (result && result.length > 0) {
    return {
      shows: result
    }
  }
}

export {
  getSearch
}