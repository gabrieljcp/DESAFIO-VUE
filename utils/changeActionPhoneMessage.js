export const changeActionPhoneMessage = (el) => {
    const defaultValue =
      this.localOpt("config", "action_phone_message", null, true) || "";
    const input = el.querySelector("input");

    const change = (value) => {
      this.localOpt("config", "action_phone_message", value);
    };

    this.listener("input", input, ({ target }) => change(target.value));
    input.value = defaultValue;
    change(defaultValue);
  }