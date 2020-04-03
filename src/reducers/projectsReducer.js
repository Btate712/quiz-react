const projectsReducer = (state = { 
  projectList: [], 
  inProgress: false,
  selectedProjects: []
}, action) => {
  switch(action.type) {
    case 'LOADING_PROJECTS':
      return {
        ...state,
        inProgress: true
      }

    case 'ADD_PROJECTS':
      return {
        ...state,
        projectList: action.projects,
        selectedProjects: state.selectedProjects.length > 0 ? state.selectedProjects : action.projects,
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