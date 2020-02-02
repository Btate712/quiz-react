const projectsReducer = (state = { projectList: [], inProgress: false }, action) => {
  switch(action.type) {
    case 'LOADING_PROJECTS':
      return {
        ...state,
        inProgress: true
      }

    case 'ADD_PROJECTS':
      console.log(action);
      return {
        projectList: action.projects,
        inProgress: false
      }

    default:
      return state;
  }
}

export default projectsReducer;