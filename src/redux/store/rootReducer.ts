import { combineReducers } from "redux";
import { sectionOneReduce } from "../section_one_redux/sectionone,reduce";

export const rootReducer = combineReducers({
  // reducer redux
  sectionOneReduce,
});

export type RootState = ReturnType<typeof rootReducer>;
