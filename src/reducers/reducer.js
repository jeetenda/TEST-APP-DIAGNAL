import { FETCH_DATA_API } from "../actions/types";

export default function Reducer(state = null, action) {
  switch (action.type) {
    case FETCH_DATA_API:
      return action.data;
    default:
      return state;
  }
}
