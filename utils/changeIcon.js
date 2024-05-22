export const changeIcon = (el) => {
    const defaultIcon = this.localOpt("config", "icon", null, true);
    const select = el.querySelector("select");
    const tag = this.findEl("tag");

    const change = (value) => {
      const tagIcon = tag?.querySelector("i");
      if (!tagIcon) return;
      tagIcon?.removeAttribute("class");
      const { icon } = icons.find(({ icon }) => icon === value);
      if (!icon) return;
      icon.split(" ").forEach((i) => tagIcon.classList.add(i));
      this.localOpt("config", "icon", value);
    };

    this.listener("input", select, ({ target }) => change(target.value));

    if (!defaultIcon) return;
    select.value = defaultIcon;
    change(defaultIcon);
  }