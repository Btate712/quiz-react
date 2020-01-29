import userReducer from './userReducer';
import topicsReducer from './topicsReducer';
import topicReducer from './topicReducer';
import questionsReducer from './questionsReducer';
import questionReducer from './questionReducer';
import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import quizReducer from './quizReducer';

const rootReducer = (history) => combineReducers({
  user: userReducer,
  topics: topicsReducer, 
  topic: topicReducer, 
  questions: questionsReducer,
  question: questionReducer,
  quiz: quizReducer,
});

export default rootReducer;