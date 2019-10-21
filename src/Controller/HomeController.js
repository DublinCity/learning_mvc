import HomeModel from "../Model/HomeModel";
import HomeView from "../View/HomeView";
import homeDetailView from "../View/HomeDetailView";
import props from "../Utils/props";
import Controller from "../Utils/Controller";
import HomeDetailModel from "../Model/HomeDetailModel";

export default class HomeController extends Controller {
  constructor(_app) {
    super();
    props(this, {
      _app,
      _homeModel: new HomeModel(),
      _homeView: new HomeView(this),
      _homeDetailView: new homeDetailView(this)
    });
    this.homeModel.addController(this);
  }

  listen(model) {
    switch (true) {
      case model instanceof HomeModel:
        return this.app.route("home");
      case model instanceof HomeDetailModel:
        return this.app.route("home:detail", model.id);
    }
  }

  base() {
    const { homeModel, homeView } = this;
    return homeView.render(homeModel);
  }

  detail(id) {
    const { homeModel, homeDetailView } = this;
    const model = homeModel.getDetail(id);
    return homeDetailView.render(model);
  }

  // routing
  $detail(id) {
    this.app.route("home:detail", id);
  }
  $base(id) {
    this.app.route("home", id);
  }

  // handleActions
  handleRemove(id) {
    const { homeModel } = this;
    homeModel.remove(id);
  }

  handleEditDetail(id, title, memo) {
    const { homeModel } = this;
    const model = homeModel.getDetail(id);
    model.addController(this);

    model.edit(title, memo);
  }
  handleDetailMode(id) {
    console.log(this);
    const { homeModel } = this;
    const model = homeModel.getDetail(id);
    model.addController(this);

    model.changeMode();
  }

  // getter
  get app() {
    return this._app;
  }
  get homeModel() {
    return this._homeModel;
  }
  get homeView() {
    return this._homeView;
  }
  get homeDetailView() {
    return this._homeDetailView;
  }
}
