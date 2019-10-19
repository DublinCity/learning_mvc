import singleton from "./Singleton";
export default class Model extends Set {
  constructor(isSingleton) {
    super();
    if (isSingleton) return singleton.getInstance(this);
  }
  add() {
    err();
  }
  delete() {
    err();
  }
  has() {
    err();
  }
  addController(controller) {
    super.add(controller);
  }
  removeController(controller) {
    super.delete(controller);
  }
  notify() {
    super.forEach(controller => controller.listen(this));
  }
}
