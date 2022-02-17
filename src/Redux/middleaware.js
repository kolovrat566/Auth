export const logger = () => {
  return next => action => {
    console.log(action);
    return next(action)
  };
};