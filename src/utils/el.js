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
  el.append(...children);
  return el;
};

export const compose = (...sibling) => {
  const frag = document.createDocumentFragment();
  return append(frag, ...sibling);
};
export default el;
