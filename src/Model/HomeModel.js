import Model from "../utils/Model";
import props from "../utils/props";
import HomeDetailModel from "./HomeDetailModel";

export default class HomeModel extends Model {
  constructor(isSingleton) {
    super(isSingleton);
    if (!this._list) {
      props(this, {
        _list: [
          new HomeDetailModel(1, "detail1", "detail Memo1"),
          new HomeDetailModel(2, "detail2", "detail Memo2"),
          new HomeDetailModel(3, "detail3", "detail Memo3")
        ]
      });
    }
  }
  remove(id) {
    const { _list: list } = this;
    list.some((detail, i) => {
      if (detail.id === id) {
        list.splice(i, 1);
        return true;
      }
    });
    this.notify();
  }
  add(...details) {
    this._list.push(...details);
  }
  get list() {
    return [...this._list];
  }
  get(id) {
    let result;
    this.list.some(detail => (detail.id === id ? (result = detail) : false));
    return result;
  }
}
