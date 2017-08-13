/**
 * Creates a redux action function.
 *
 * @param {String|Array} type - Action types
 * @param {Array} argNames - Argument names used by the action
 */
export const createAction = (type, ...argNames) => (...args) => {
  const action = Array.isArray(type) ? { types: [ ...type ] } : { type };
  argNames.forEach((arg, index) => {
    action[argNames[index]] = args[index];
  });

  return action;
};


/**
 * Returns the display name of a React components.
 * @param {Object} WrappedComponent
 * @returns {String}
 */
export const getDisplayName = (WrappedComponent) =>
  WrappedComponent.displayName || WrappedComponent.name || 'Component';
