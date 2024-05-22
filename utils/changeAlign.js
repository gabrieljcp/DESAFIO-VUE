export const changeAlign = (el, ref) => {
    this.formatAlignOptions("all");
    const findButtons = el.querySelectorAll("li");
    if (!findButtons) return;

    const styleRef = {
      align_vertical: "alignItems",
      align_horizontal: "justifyContent",
    };

    const findBtnActive = Object.values(findButtons).find((btn) =>
      btn.classList.contains("active")
    );

    const setAlign = (button) => {
      const { event } = button?.dataset || {};
      const tag = this.findEl("tag_container");

      Object.values(findButtons).forEach((btn) =>
        btn.classList.remove("active")
      );
      button.classList.add("active");

      tag.style[styleRef[ref]] = event;
      this.localOpt("container", styleRef[ref], event);
    };

    if (findBtnActive) {
      const evt = findBtnActive?.dataset?.event;
      const align = this.localOpt("container", styleRef[ref], evt, true);
      const findButtonAlign = Object.values(findButtons).find(
        (btn) => btn?.dataset?.event === align
      );
      setAlign(findButtonAlign);
    }

    Object.values(findButtons).forEach((button) =>
      this.listener("click", button, () => setAlign(button))
    );
  }