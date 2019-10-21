export default (instance, props) => {
  Object.keys(props).forEach(key => (instance[key] = props[key]));
};
