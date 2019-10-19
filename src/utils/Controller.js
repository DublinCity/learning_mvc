import Singleton from "./Singleton";

export default class Controller {
  constructor(isSingleton) {
    if (isSingleton) return Singleton.getInstance(this);
  }
  listen(model) {}
}
