export const changeType = (el) => {
    const type = this.localOpt("config", "type", null, true);
    this.changeFields(type);
    el.value = type;

    this.listener("input", el, ({ target }) => this.changeFields(target.value));
  }