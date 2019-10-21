export const el = (type, attr, value, [eventType, handler] = []) => {
  const element = document.createElement(type);
  if (attr) {
    element[attr] = value;
  }
  if (eventType) {
    element.addEventListener(eventType, handler);
  }
  element.appendChildren = (...elements) => {
    element.append(...elements);
    return element;
  };
  return element;
};
