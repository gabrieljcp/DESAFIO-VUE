export const changeValue = (el, type) => {
    const defaultValue = this.localOpt("config", type, null, true);
    const { field } = el.dataset || {};
    if (!field) return;
    const element = el.querySelector(field);

    const change = (value) => {
      this.localOpt("config", type, value);
    };

    this.listener("input", element, ({ target }) => change(target.value));
    if (!defaultValue) return;
    element.value = defaultValue;
    change(defaultValue);
  }