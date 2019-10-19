import Model from "../utils/Model";
import props from "../utils/props";

export default class HomeDetailModel extends Model {
  constructor(_id = err(), _title = err(), _memo = err()) {
    super();
    props(this, { _id, _title, _memo });
  }
  get id() {
    return this._id;
  }
  get title() {
    return this._title;
  }
  get memo() {
    return this._memo;
  }
}
