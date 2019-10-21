import Singleton from "../Utils/Singleton";
export default class View {
  constructor() {
    return Singleton.getInstance(this);
  }
}
