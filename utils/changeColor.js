export const changeColor = (el, event = true, selector = null) => {
    let { type } = el?.dataset || {};
    const color = this.localOpt("tag", type, null, true);
    const input = el.querySelector("input");
    const iconColor = el?.querySelector(".clr-field");

    const setColor = (e) => {
      const value = e?.target?.value || e;
      let tag = this.findEl("tag");
      if (selector) tag = tag.querySelector(selector);
      type = el?.dataset?.type || "";

      input.value = value;
      iconColor.style.color = value;

      this.localOpt("tag", type, value);
      if (type === "fill") type = "color";
      if (tag) tag.style[type] = value;
    };

    if (event) this.listener("input", input, (e) => setColor(e));
    setColor(color);
  }