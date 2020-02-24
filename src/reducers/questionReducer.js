const questionReducer = (state = { question: {}, comments: [], inProgress: false }, action) => {
  switch(action.type) {
    case 'LOADING_QUESTION':
      return {
        ...state,
        inProgress: true
      }

    case 'ADD_QUESTION':
      return {
        question: action.question.question,
        comments: action.question.comments,
        inProgress: false
      }

    case 'CLEAR_QUESTION':
      return {
        ...state,
        question: {},
        comments: []
      }
      
    case 'ADD_COMMENT_TO_QUESTION':
      return {
        ...state,
        comments: [...state.comments, { comment: action.comment.comment, user_name: action.comment.user_name }]
      }

    case 'DELETE_COMMENT_FROM_QUESTION':
      const index = state.comments.findIndex(comment => comment.comment.id === action.commentId);
      return {
        ...state,
        comments: [...state.comments.slice(0, index), ...state.comments.slice(index + 1)] 
      }

    default:
      return state;
  }
}

export default questionReducer;