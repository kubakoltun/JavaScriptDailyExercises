function fix_uno_redo(object) {
  let commands = [];
  let index = -1;

  return {
    set: function(key, value) {
      commands.splice(index + 1);
      commands.push({
        type: "set",
        key: key,
        value: value,
      });
      index++;
      object[key] = value;
    },
    get: function(key) {
      return object[key];
    },
    del: function(key) {
      commands.splice(index + 1);
      commands.push({
        type: "del",
        key: key,
        value: object[key],
      });
      index++;
      delete object[key];
    },
    undo: function() {
      if (index < 0 || commands[index] === null) {
        throw new Error("No operation to undo");
      }
      const command = commands[index];
      index--;
      if (command.type === "set") {
        delete object[command.key];
      } else if (command.type === "del") {
        object[command.key] = command.value;
      }
    },
    redo: function() {
      if (index >= commands.length - 1 || commands[index + 1] === null) {
        throw new Error("No operation to redo");
      }
      index++;
      const command = commands[index];
      if (command.type === "set") {
        object[command.key] = command.value;
      } else if (command.type === "del") {
        delete object[command.key];
      }
    },
  };
}
