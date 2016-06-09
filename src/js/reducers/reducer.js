import IS_LOADING from '../actions/action'

function isLoading(state = isLoading: true, result) {
  if (result.type === IS_LOADING) {
    return {
      isLoading: true,
    }
  }
  return false
}

export default isLoading
