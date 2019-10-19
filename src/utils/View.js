import Singleton from "./Singleton";
import props from "./props";

export default class View {
  constructor(_controller = err(), isSingleton) {
    if (isSingleton) return Singleton.getInstance(this);
    props(this, { _controller });
  }
  render(model) {
    override();
  }
}
