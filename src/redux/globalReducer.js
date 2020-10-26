import { combineReducers } from "redux";
import pageSectionReducer from "./pagesectionReducer";

export default combineReducers({
  pagesection: pageSectionReducer,
});
