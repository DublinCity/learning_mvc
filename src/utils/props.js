const props = (obj, properties) =>
  Object.keys(properties).forEach(prop => {
    obj[prop] = properties[prop];
  });
export default props;
