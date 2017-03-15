const userReducer = (state = { authenticated: false, user: { email: 'buimthuan@gmail.com' } }, action) => {
  switch (action.type) {
    case 'LOGGED_IN':
      return {
        ...state,
        authenticated: true,
        user: action.user,
      };
    default:
      return state;
  }
};

export default userReducer;
