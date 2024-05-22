export const changeBorderWidth = (el, event = true) =>{
    let { type } = el?.dataset || {};
    const border = this.localOpt("tag", type, null, true) || "1";
    const input = el.querySelector("input");
    const small = el.querySelector("small");

    const setBorderWidth = (e) => {
      const borderType =
        this.localOpt("tag", "borderStyle", null, true) || "none";

      if (borderType === "none") el.style.display = "none";
      else el.style.display = "flex";

      type = el?.dataset?.type || "";
      const tag = this.findEl("tag");
      const borderWidth = e?.target?.value || e;

      small.innerText = `${borderWidth}px`;
      input.value = borderWidth;
      tag.style[type] = `${borderWidth}px`;
      this.localOpt("tag", type, borderWidth);
    };

    if (event) this.listener("input", input, (e) => setBorderWidth(e));
    setBorderWidth(border);
  }