class Singleton extends WeakMap {
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
    if (!super.has(v.construcor)) {
      super.set(v.construcor, v);
    }
    return super.get(v.construcor);
  }
}
