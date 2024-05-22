export const changeBorderColor = (el, event = true) => {
    let { type } = el?.dataset || {};
    const color = this.localOpt("tag", type, null, true) || "#000000";
    const input = el.querySelector("input");
    const iconColor = el?.querySelector(".clr-field");

    const setColor = (e) => {
      const borderType =
        this.localOpt("tag", "borderStyle", null, true) || "none";

      if (borderType === "none") el.style.display = "none";
      else el.style.display = "flex";

      const borderColor = e?.target?.value || e;
      const tag = this.findEl("tag");
      type = el?.dataset?.type || "";

      input.value = borderColor;
      iconColor.style.color = borderColor;

      tag.style[type] = borderColor;
      this.localOpt("tag", type, borderColor);
    };

    if (event) this.listener("input", input, (e) => setColor(e));
    setColor(color);
  }