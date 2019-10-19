import View from "../utils/View";
import HomeAddView from "./HomeAddView";
import el, { append } from "../utils/el";
export default class HomeDetailView extends View {
  constructor(controller, isSingleton) {
    super(controller, isSingleton);
  }
  render(model) {
    const { controller } = this;
    return [
      ...new HomeAddView(controller, true).render(),
      append(
        el("ul"),
        el("li", "innerText", model.title),
        el("button", "innerText", "BACK", ["click", () => controller.$list()])
      )
    ];
  }
}
