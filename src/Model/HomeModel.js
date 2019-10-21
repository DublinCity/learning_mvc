import Model from "../Utils/Model";
import props from "../Utils/props";

import HomeDetailModel from "../Model/HomeDetailModel";

export default class HomeModel extends Model {
  constructor() {
    super(true);
    if (!this.list) {
      props(this, {
        _list: [
          new HomeDetailModel(1, "title-1", "memo 1 "),
          new HomeDetailModel(2, "title-2", "memo 2 "),
          new HomeDetailModel(3, "title-3", "memo 3 "),
          new HomeDetailModel(4, "title-4", "memo 4 ")
        ]
      });
    }
  }
  getDetail(id) {
    let result;
    this.list.some(detail => (detail.id === id ? (result = detail) : false));
    console.log(result);
    return result;
  }

  remove(id) {
    this.list.some((detail, i) =>
      detail.id === id ? this.list.splice(i, 1) : false
    );

    this.notify();
  }

  get list() {
    return this._list;
  }
}
