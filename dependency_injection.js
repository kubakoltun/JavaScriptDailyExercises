function DI(dependency) {
  this.dependency = dependency;
}

DI.prototype.inject = function (func) {
  var fnText = func.toString();
  var dependencies = fnText
    .match(/\((.*?)\)/)[1]
    .split(',')
    .map(function (dep) {
      return dep.trim();
    });

  var resolvedDependencies = dependencies.map((dep) => {
    return this.dependency.hasOwnProperty(dep) ? this.dependency[dep] : undefined;
  });

  return function () {
    const args = resolvedDependencies.filter((dep) => dep !== undefined);
    return func.apply(this, args);
  };
};

var deps = {
  'firstDependency': function () {
    return 'this is firstDependency';
  },
};

var myDependentFunc = new DI(deps).inject(function (secondDepency, firstDependency) {
  return firstDependency() + (secondDepency ? secondDepency() : '+0');
});
