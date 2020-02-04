const projectsReducer = (state = { projectList: [], inProgress: false }, action) => {
  switch(action.type) {
    case 'LOADING_PROJECTS':
      return {
        ...state,
        inProgress: true
      }

    case 'ADD_PROJECTS':
      return {
        projectList: action.projects,
        inProgress: false
      }

      case 'CLEAR_PROJECTS':
        return {
          ...state,
          projectList: []
        }
    default:
      return state;
  }
}

export default projectsReducer;