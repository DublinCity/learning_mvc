class Singleton extends WeakMap {
  /*
  WeakMap: 키로 reference value를 사용
  => 어떤 객체를 키로 하는 값을 가지고 싶을 떄 사용
  Map: 키로 primitive value를 사용
  */
  delete() {
    err();
  }
  get() {
    err();
  }
  has() {
    err();
  }
  set() {
    err();
  }
  getInstance(v) {
    if (!super.has(v.constructor)) {
      super.set(v.constructor, v);
      // 클래스당 인스턴스 하나만 유지
      // v: instance, v.__proto__.constructor === V class
    }
    return super.get(v.constructor);
  }
}

export default new Singleton();
