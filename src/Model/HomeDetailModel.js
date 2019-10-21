import Model from "../Utils/Model";
import props from "../Utils/props";

export default class HomeDetailModel extends Model {
  constructor(_id, _title, _memo) {
    super();
    props(this, { _id, _title, _memo, isEditing: false });
  }

  edit(title, memo) {
    this._title = title;
    this._memo = memo;
    this.isEditing = !this.isEditing;
    this.notify();
  }

  changeMode() {
    this.isEditing = !this.isEditing;
    this.notify();
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
