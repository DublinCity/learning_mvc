class Singleton extends WeakMap {
  getInstance(instance) {
    if (this.has(instance.constructor)) {
      return this.get(instance.constructor);
    }
    this.set(instance.constructor, instance);
    return instance;
  }
}

export default new Singleton();
