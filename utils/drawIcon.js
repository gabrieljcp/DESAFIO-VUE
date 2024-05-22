export const drawIcon = (el, icon) => {
    if (icon) return;

    const defaultIcon = this.localOpt("config", "icon", null, true);
    const currentIcon = icons.find((i) => i.icon === defaultIcon);
    if (!currentIcon) return;

    const elIcon = document.createElement("i");
    currentIcon?.icon?.split(" ")?.forEach((i) => elIcon.classList.add(i));
    el.insertAdjacentElement("afterBegin", elIcon);
  }