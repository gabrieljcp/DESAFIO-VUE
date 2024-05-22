export const changeActionPhone = (el) => {
    const defaultValue =
      this.localOpt("config", "action_phone", null, true) || "";
    const input = el.querySelector("input");

    const change = (value) => {
      value = String(value)?.replace(/\D+/g, "");
      this.localOpt("config", "action_phone", value);
    };

    this.listener("input", input, ({ target }) => change(target.value));
    input.value = defaultValue;
    change(defaultValue);
  }