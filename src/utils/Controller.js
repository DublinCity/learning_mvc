import Singleton from "./Singleton";
import props from "./props";

export default class Controller {
  constructor(_app, isSingleton) {
    props(this, { _app });
    if (isSingleton) return Singleton.getInstance(this);
  }

  listen(model) {}

  get app() {
    return this._app;
  }
}
