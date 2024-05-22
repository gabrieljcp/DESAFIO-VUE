export const changeWidth = (el) => {
    const width = this.localOpt("tag", "width", el.value, true);

    const setWidth = (e, first = false) => {
      const value = e?.target?.value || e;
      const tag = this.findEl("tag");

      tag.style.width = value;
      this.opts["custom"]["width"] = value;
      if (first) el.value = value;
      this.localOpt("tag", "width", value);
    };

    this.listener("input", el, (e) => setWidth(e));
    setWidth(width, true);
  }