import View from "../utils/View";
import el from "../utils/el";
export default class HomeDetailView extends View {
  constructor(controller, isSingleton) {
    super(controller, isSingleton);
  }
  render(model) {
    const { _controller: controller } = this;
    return el("ul").append(
      ...model.list.map(detail =>
        el("li", "innerText", detail.title, [
          "click",
          () => controller.$detail(detail.id)
        ])
      )
    );
  }
}
