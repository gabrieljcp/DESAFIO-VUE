export const changeBorder = (el) => {
    let { type } = el?.dataset || {};
    const border = this.localOpt("tag", type, null, true) || "none";
    el.value = border;

    const setBorder = (e) => {
      const borderType = e?.target?.value || e;
      const borderColor = this.findEl("border_color");
      const borderWidth = this.findEl("border_width");

      const tag = this.findEl("tag");
      type = el?.dataset?.type || "";

      tag.style[type] = borderType;
      this.localOpt("tag", type, borderType);

      this.changeBorderColor(borderColor, false);
      this.changeBorderWidth(borderWidth, false);
    };

    this.listener("input", el, (e) => setBorder(e));
    setBorder(border);
  }