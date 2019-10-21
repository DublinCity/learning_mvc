import props from "./Utils/props";

export default class App extends WeakMap {
  constructor(_root) {
    super();
    props(this, { root: document.querySelector(_root), _table: new Map() });
  }

  addRouter(path, router) {
    const [service, scene = "base"] = path.split(":");
    this.table.set(`${service}:${scene}`, router);
  }

  route(path, ...args) {
    const [service, scene = "base"] = path.split(":");
    const controller = this.table.get(`${service}:${scene}`);
    const controllerInstance = new controller(this);
    const view = controllerInstance[scene](...args);

    return this.render(view);
  }

  render(view) {
    this.root.innerHTML = "";
    this.root.append(view);
  }

  get table() {
    return this._table;
  }
}
