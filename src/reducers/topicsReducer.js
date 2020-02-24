const topicsReducer = (state = { topicList: [], inProgress: false }, action) => {
  switch(action.type) {
    case 'LOADING_TOPICS':
      return {
        ...state,
        inProgress: true
      }

    case 'ADD_TOPICS':
      return {
        topicList: action.topics.map(topicArrayElement => {
          topicArrayElement.topic.questionCount = topicArrayElement.questionCount
          return topicArrayElement.topic
        }),
        inProgress: false
      }

    case 'DELETE_TOPIC':
      const newTopicList = [].concat(state.topicList);
      const index = newTopicList.findIndex(topic => topic.id === action.topicId);
      newTopicList.splice(index, 1);
      return {
        ...state,
        topicList: newTopicList,
        inProgress: false
      }

      case 'CLEAR_TOPICS':
        return {
          ...state,
          topicList: []
        }

      case 'ADD_TOPIC_TO_TOPICS':
        return {
          ...state,
          topicList: [...state.topicList, action.topic]
        }

    default:
      return state;
  }
}

export default topicsReducer;
