class Thing {
  constructor(name) {
    this.name = name;
  }

  get is_a() {
    return booleanPropAdder(this, true);
  }

  get is_not_a() {
    return booleanPropAdder(this, false);
  }

  get is_the() {
    return relationPropAdder(this);
  }

  get being_the() {
    return relationPropAdder(this);
  }

  get and_the() {
    return relationPropAdder(this);
  }

  has(n) {
    return thingPropAdder(this, n);
  }

  having(n) {
    return thingPropAdder(this, n);
  }

  get can() {
    return funcPropAdder(this);
  }
}

class ThingArray extends Array {
  constructor(count, name) {
    super(count);
    
    for (let i = 0; i < count; i++) {
      this[i] = new Thing(name);
    }
  }

  each(fn) {
    this.forEach(thing => {
      global.having = n => thingPropAdder(thing, n);
      global.being_the = relationPropAdder(thing);
      fn();
      delete global.having;
      delete global.being_the;
    });
  }
}

function booleanPropAdder(o, value) {
  return onPropAccess(prop => {
    o[`is_a_${prop}`] = value;
    return o;
  });
}
