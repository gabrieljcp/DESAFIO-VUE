export const changeAction = (el) => {
    const defaultAction = this.localOpt("config", "action", null, true);
    const select = el.querySelector("select");

    const elements = {
      none: [],
      openPage: ["openPage"],
      whatsapp: ["whatsapp"],
    };

    const actions = document.querySelectorAll("[data-action]");

    const change = (value) => {
      actions.forEach((ac) => {
        const { action } = ac.dataset;
        if (elements?.[value]?.includes(action)) {
          ac.classList.remove("d-none");
        } else {
          ac.classList.add("d-none");
        }
      });
      this.localOpt("config", "action", value);
    };

    this.listener("input", select, ({ target }) => change(target.value));

    if (!defaultAction) return;
    select.value = defaultAction;
    change(defaultAction);
  }