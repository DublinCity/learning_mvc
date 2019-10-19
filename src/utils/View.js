import Singleton from "./Singleton";
import props from "./props";

export default class View {
  constructor(_controller = err(), isSingleton) {
    props(this, { _controller });
    if (isSingleton) return Singleton.getInstance(this);
  }
  render(model) {
    override();
  }
  get controller() {
    return this._controller;
  }
}
