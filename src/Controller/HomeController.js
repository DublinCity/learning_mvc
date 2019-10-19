import Controller from "../utils/Controller";
import HomeBaseView from "../View/HomeBaseView";
import HomeModel from "../Model/HomeModel";
import HomeDetailView from "../View/HomeDetailView";

export default class HomeController extends Controller {
  constructor(_app, isSingleton) {
    super(_app, isSingleton);
  }

  listen(model) {
    if (model) return this.$list();
  }

  // routing
  $detail(id) {
    this.app.route("home:detail", id);
  }
  $list() {
    this.app.route("home");
  }

  // scene
  base() {
    const view = new HomeBaseView(this, true);
    const model = new HomeModel(true);
    model.addController(this);
    return view.render(model);
  }
  detail(id) {
    const view = new HomeDetailView(this, true);
    const model = new HomeModel(true).get(id);
    model.addController(this);

    return view.render(model);
  }

  // actions
  $remove(id) {
    const model = new HomeModel(true);
    model.remove(id);
  }
  $removeDetail(id) {
    this.$remove(id);
  }
  $add(title, memo) {
    const model = new HomeModel(true);
    model.add(title, memo);
  }
}
