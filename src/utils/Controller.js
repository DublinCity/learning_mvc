import Singleton from "../Utils/Singleton";
export default class Controller {
  constructor() {
    return Singleton.getInstance(this);
  }
}
