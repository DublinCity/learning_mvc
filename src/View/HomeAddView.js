import View from "../utils/View";
import el, { append } from "../utils/el";

export default class HomeAddView extends View {
  constructor(_controller, isSingleton) {
    super(_controller, isSingleton);
  }
  render() {
    return [
      append(
        el("li.input"),
        el("input", "value", ""),
        el("button", "innerText", "Confirm", [
          "click",
          e => {
            const value = e.target.parentNode.querySelector("input").value;
            this.controller.$add(value, value);
          }
        ])
      )
    ];
  }
}
