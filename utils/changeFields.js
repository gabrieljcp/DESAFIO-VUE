export const changeFields = (type) => {
    const findAllFields = document.querySelectorAll("[data-field]");
    if (!findAllFields) return;

    const elements = {
      image: this.findEl("tag_image"),
      text: this.findEl("tag"),
      icon: this.findEl("tag"),
      text_icon: this.findEl("tag"),
    };

    // All Fields
    findAllFields.forEach((el) => {
      const { field } = el?.dataset;
      if (!excludeFields?.[type]) return;
      el.classList.remove("hidden");
      excludeFields[type].forEach((exclude) => {
        if (field != exclude) return;
        el.classList.add("hidden");
      });
    });

    // Select Element Type
    Object.values(elements).forEach((el) => el.classList.add("hidden"));

    const currentElement = elements?.[type] || {};

    currentElement?.classList.remove("hidden");

    // Draw Start Icon
    const icon = currentElement?.querySelector("i");
    const text = currentElement?.querySelector("div");
    if (["text_icon", "icon"].includes(type)) {
      this.drawIcon(currentElement, icon);
    } else icon && icon.remove();

    if (type === "icon") text?.remove();
    else this.changeTextTag(currentElement, false);

    // Save Type
    this.localOpt("config", "type", type);
  }