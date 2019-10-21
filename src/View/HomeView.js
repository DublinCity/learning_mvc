import props from "../Utils/props";
import { el } from "../Utils/element";
import View from "../Utils/View";
export default class HomeView extends View {
  constructor(_controller) {
    super();
    props(this, { _controller });
  }

  render(model) {
    return el("ul").appendChildren(
      ...model.list.map(detail =>
        el("li").appendChildren(
          el("span", "innerHTML", detail.title, [
            "click",
            e => this._controller.$detail(detail.id)
          ]),
          el("button", "innerText", "X", [
            "click",
            e => this._controller.handleRemove(detail.id)
          ])
        )
      )
    );
  }
}
