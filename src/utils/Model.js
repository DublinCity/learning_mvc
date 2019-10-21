import Singleton from "../Utils/Singleton";
export default class Model extends Set {
  constructor(_isSingleton) {
    super();
    if (_isSingleton) return Singleton.getInstance(this);
  }
  addController(controller) {
    this.add(controller);
  }
  removeController(controller) {
    if (this.has(controller)) {
      this.delete(controller);
    }
  }
  notify() {
    this.forEach(controller => controller.listen(this));
  }
}
