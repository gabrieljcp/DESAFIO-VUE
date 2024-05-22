export const changeRadius = (el) => {
    const radius = this.localOpt("tag", "borderRadius", el?.value, true);

    const setRadius = (e, first = false) => {
      const value = e?.target?.value || e;
      const tag = this.findEl("tag");

      tag.style.borderRadius = value;
      if (first) el.value = value;
      this.localOpt("tag", "borderRadius", value);
    };

    this.listener("input", el, (e) => setRadius(e));
    setRadius(radius, true);
  }