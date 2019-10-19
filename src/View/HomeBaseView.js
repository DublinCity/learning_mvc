import View from "../utils/View";
import el, { append } from "../utils/el";
import props from "../utils/props";
export default class HomeBaseView extends View {
  constructor(_controller, isSingleton) {
    super(_controller, isSingleton);
    props(this, { _controller });
  }
  render(model) {
    const { _controller: controller } = this;
    return append(
      el("ul"),
      ...model.list.map(detail =>
        el("li", "innerText", detail.memo, [
          "click",
          () => {
            controller.$detail(detail.id);
          }
        ])
      )
    );
    // return (document.createElement("div").innerHTML = "adsfsdfs");
  }
}
