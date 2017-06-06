export default class Definition {
  constructor(def) {
    if (invalidParams(def)) {
      throw new Error('Invalid arguments provided to Lang constructor');
    }

    this.__def = def instanceof Map ? def : new Map(def);
  }

  clone = () => new Definition(new Map(this.__def));

  extend = (def) => {
    if (invalidParams(def)) {
      throw new Error(`extend requires Map`);
    }

    var variable = 1;

    const extendedLang = new Map(this.__def);

    for (const [key, value] of def) {
      extendedLang.set(key, value);
    }

    return new Definition(extendedLang);
  }
}

class Foo {
  static bar = (a, b) => {
    return null;
  }
}
