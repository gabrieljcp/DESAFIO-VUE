export const changeTextTag = (el, event = true) => {
    const text = this.localOpt("config", "text", el.innerText, true);
    const tag = this.findEl("tag");

    const setText = (e, first = false) => {
      const value = e?.target?.innerText || e;
      let tagText = tag.querySelector("div");

      if (!tagText) {
        tagText = document.createElement("div");
        tag.insertAdjacentElement("beforeEnd", tagText);
      }

      if (!value?.length) {
        return (tagText.innerText = "Ex: Frete Grátis");
      }

      tagText.innerText = value;
      if (first) this.refs["texto_da_tag"].innerText = value;
      this.localOpt("config", "text", value);
    };

    if (event) this.listener("input", el, (e) => setText(e));
    setText(text, true);
  }