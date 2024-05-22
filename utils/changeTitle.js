export const changeTitle = (el) => {
    const defaultTitle = el?.innerText || "Novo Template";
    const title = this.localOpt("config", "title", defaultTitle, true);
    const findPageTitle = document.querySelector("header > h4");
    if (!findPageTitle) return;

    const updateTitle = (e, first = false) => {
      const value = e?.target?.value || e;

      if (!value?.length) value = defaultTitle;
      findPageTitle.innerText = value;
      if (first) this.refs["change_title"].value = value;
      this.localOpt("config", "title", value);
    };

    this.listener("input", el, (e) => updateTitle(e));
    updateTitle(title, true);
  }