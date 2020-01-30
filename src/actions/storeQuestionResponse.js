function storeQuestionResponse(question, response) {
  return dispatch => {
    dispatch({type: 'STORE_RESPONSE', question: question, choice: response});
  }
}

export default storeQuestionResponse;