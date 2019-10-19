import View from "../utils/View";
import el, { append } from "../utils/el";
import props from "../utils/props";
export default class HomeBaseView extends View {
  constructor(_controller, isSingleton) {
    super(_controller, isSingleton);
  }
  render(model) {
    const { _controller: controller } = this;
    return append(
      el("ul"),
      ...model.list.map(detail =>
        append(
          el("li", "innerText", detail.title, [
            "click",
            () => {
              controller.$detail(detail.id);
            }
          ]),
          el("button", "innerText", "X", [
            "click",
            e => {
              controller.$remove(detail.id);
              e.stopPropagation();
            }
          ])
        )
      )
    );
  }
}
