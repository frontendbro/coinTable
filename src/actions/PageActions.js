export const GET_DATA_REQUEST = "GET_DATA_REQUEST";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";

export const getData = () => {
  return dispatch => {
    dispatch({
      type: GET_DATA_REQUEST,
      payload: ["Load data..."]
    })

    fetch('https://api.coincap.io/v2/assets')
      .then(function(response) {
        response.json().then(function(data) {
          dispatch({
            type: GET_DATA_SUCCESS,
            payload: data.data
          })
        })
      })
  }
}