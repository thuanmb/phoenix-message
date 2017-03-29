export default function asyncReducer(reducer, requestActionName, receiveActionName) {
  return (state = { isLoading: true, data: {} }, action) => {
    switch (action.type) {
      case requestActionName:
        return {
          ...state,
          isLoading: true,
        };
      case receiveActionName:
        return {
          ...state,
          isLoading: false,
          data: action.response.data,
        };
      default:
        return reducer(state, action);
    }
  };
}
