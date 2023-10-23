function uno_redo(object) {
  let state = { object: { ...object }, history: [], current: -1, maxUndo: -1 };

  function set(key, value) {
    if (state.object[key] !== value) {
      state.history = state.history.slice(0, state.current + 1);
      state.history.push({ key, value: state.object[key] });
      state.object[key] = value;
      state.current++;
      state.maxUndo = state.current;
    }
  }

  function get(key) {
    return state.object[key];
  }

  function del(key) {
    if (state.object.hasOwnProperty(key)) {
      state.history = state.history.slice(0, state.current + 1);
      state.history.push({ key, value: state.object[key] });
      delete state.object[key];
      state.current++;
      state.maxUndo = state.current;
    }
  }

  function undo() {
    if (state.current >= 0) {
      const { key, value } = state.history[state.current];
      state.object[key] = value;
      state.current--;
    } else {
      throw new Error('Nothing to undo');
    }
  }

  function redo() {
    if (state.current < state.maxUndo) {
      state.current++;
      const { key, value } = state.history[state.current];
      state.object[key] = value;
    } else {
      throw new Error('Nothing to redo');
    }
  }

  return { set, get, del, undo, redo };
}
