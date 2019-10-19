import Controller from "../utils/Controller";
import HomeBaseView from "../View/HomeBaseView";
import HomeModel from "../Model/HomeModel";
import HomeDetailView from "../View/HomeDetailView";

export default class Home extends Controller {
  constructor(isSingleton) {
    super(isSingleton);
  }
  base() {
    const view = new HomeBaseView(this, true);
    const model = new HomeModel(true);

    return view.render(model);
  }
  detail(id) {
    const view = new HomeDetailView(this, true);
    const model = new HomeModel(true);

    let detailModel;
    model.list.some(detail => (detail.id === id ? detailModel : false));

    return view.render(detailModel);
  }
  listen(model) {
    if (model) return this.$list();
  }
  $detail(id) {
    app.route("home:detail", id);
  }
  $remove(id) {
    const model = new HomeModel(true);
    model.remove(id);
    this.$list();
  }
  $list() {
    app.route("home");
  }
  $removeDetail(id) {
    this.$remove(id);
  }
}
