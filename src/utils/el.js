const el = (type, attr, value, event) => {
  const tag = document.createElement(type);
  if (attr) {
    tag[attr] = value;
  }
  if (event) {
    const [eventType, handler] = event;
    tag.addEventListener(eventType, handler);
  }
  return tag;
};

export const append = (el, ...children) => {
  children.forEach(child => el.append(child));
  return el;
};

export default el;
