import { el } from "../Utils/element";
import props from "../Utils/props";
import View from "../Utils/View";

export default class homeDetailView extends View {
  constructor(_controller) {
    super();
    props(this, { _controller });
  }

  render(model) {
    return el("ul").appendChildren(
      el("li").appendChildren(
        el("span", "innerText", model.title),
        el("span", "innerText", model.memo),
        model.isEditing
          ? el("li").appendChildren(
              el("input"),
              el("button", "innerText", "수정", [
                "click",
                e =>
                  this._controller.handleEditDetail.bind(this._controller)(
                    model.id,
                    "수정",
                    "수수수수정"
                  )
              ])
            )
          : el("button", "innerText", "EDIT", [
              "click",
              e =>
                this._controller.handleDetailMode.bind(this._controller)(
                  model.id
                )
            ])
      )
    );
  }
}
