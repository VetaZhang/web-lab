
export default store => {
  return next => {
    return action => {
      console.log(action);
      next(action);
    };
  };
};