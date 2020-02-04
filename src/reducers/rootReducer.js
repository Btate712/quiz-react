import userReducer from './userReducer';
import usersReducer from './usersReducer';
import topicsReducer from './topicsReducer';
import topicReducer from './topicReducer';
import questionsReducer from './questionsReducer';
import questionReducer from './questionReducer';
import projectsReducer from './projectsReducer';
import { combineReducers } from 'redux';
import quizReducer from './quizReducer';

const rootReducer = (history) => combineReducers({
  user: userReducer,
  users: usersReducer,
  topics: topicsReducer, 
  topic: topicReducer, 
  questions: questionsReducer,
  question: questionReducer,
  quiz: quizReducer,
  projects: projectsReducer
});

export default rootReducer;