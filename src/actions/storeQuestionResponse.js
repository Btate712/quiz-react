function storeQuestionResponse(question, response) {
  return dispatch => {
    dispatch({type: 'STORE_RESPONSE', question: question, response: response});
  }
}

export default storeQuestionResponse;