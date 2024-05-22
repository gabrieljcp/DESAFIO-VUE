export const changeFontSize = (el) =>{
    const size = this.localOpt("tag", "fontSize", el?.value || 11, true);
    const small = el.querySelector("small");
    const input = el.querySelector("input");

    const setFontSize = (e, first = false) => {
      const value = e?.target?.value || e;
      const tag = this.findEl("tag");

      tag.style.fontSize = `${value}px`;
      small.innerText = value;
      input.value = value;
      if (first) el.value = value;
      this.localOpt("tag", "fontSize", value);
    };

    this.listener("input", el, (e) => setFontSize(e));
    setFontSize(size, true);
  }