import axios from 'axios'

export const fetchApi = () => ({
  type: 'FETCHAPI'
})

export const fetchApiAction = () => {
  return(dispatch) => {
    dispatch(fetchApi())
    axios.get('https://form.v2.support.garena.co.id/_/items/sea_scholarship?access_token=wahyutampan&fields=*.*')
    .then(res => {
      dispatch({
        type: 'FETCH_API_SUCCESS',
        payload: res.data.data[0]
      })
      // console.log(res.data.data[0])
    })
    .catch(err => {
      dispatch({
        type: 'FETCH_API_FAILED'
      })
      throw err
    })
  }
}

export const fetchUniApiAction = () => {
  return(dispatch) => {
    dispatch(fetchApi())
    axios.get('https://form.v2.support.garena.co.id/_/items/sea_scholarship_univ?access_token=wahyutampan&fields=*.*')
    .then(res => {
      dispatch({
        type: 'FETCH_UAPI_SUCCESS',
        payload: res.data
      })
      // console.log(res.data.data[0])
    })
    .catch(err => {
      dispatch({
        type: 'FETCH_UAPI_FAILED'
      })
      throw err
    })
  }
}
export const fetchTeApiAction = () => {
  return(dispatch) => {
    dispatch(fetchApi())
    axios.get('https://form.v2.support.garena.co.id/_/items/sea_scholarship_testimoni?access_token=wahyutampan&fields=*.*')
    .then(res => {
      dispatch({
        type: 'FETCH_TAPI_SUCCESS',
        payload: res.data.data
      })
      console.log(res.data.data)
    })
    .catch(err => {
      dispatch({
        type: 'FETCH_TAPI_FAILED'
      })
      throw err
    })
  }
}