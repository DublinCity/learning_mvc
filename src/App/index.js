import props from "../utils/props";
import { compose } from "../utils/el";

export default class App {
  constructor(_parent = err()) {
    props(this, { _parent, _table: new Map() });
  }
  add(path, controller) {
    const [service, scene] = path.split(":");
    this.table.set(service, controller);
    [scene || ""]
      .concat("base")
      .forEach(scene => this.table.set(`${service}:${scene}`), controller);
  }
  route(path, ...arg) {
    const [service, scene = "base"] = path.split(":");
    const controller = this.table.get(service)(this);
    const view = controller[scene](...arg);

    document.querySelector(this._parent).innerHTML = "";
    document
      .querySelector(this._parent)
      .append(Array.isArray(view) ? compose(...view) : view);
  }
  get table() {
    return this._table;
  }
}
