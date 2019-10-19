import Singleton from "./Singleton";

const singleton = new Singleton();
class Person {
  constructor(isSingleton) {
    if (isSingleton) {
      return singleton.getInstance(this);
    }
  }
}
